#!/usr/bin/env python3
"""Build the catalogue from the curated TSV files.

Reads   data/tools.tsv, data/reviews.tsv, data/vocab.json
Fetches title, journal, year and citation count for every DOI from Crossref
Writes  data/tools.json, data/tools.js (used by index.html) and the table in README.md

Usage:  python3 scripts/build.py            # refresh everything from Crossref
        python3 scripts/build.py --offline  # rebuild from the last data/tools.json

Only the standard library is needed.
"""
import csv
import datetime
import html
import json
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
UA = {"User-Agent": "methylation-tools-catalogue/1.0 (python-urllib)"}
OFFLINE = "--offline" in sys.argv
PAUSE = 0.35


def clean(text):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", text or ""))).strip()


def fetch(url):
    """GET a URL and return (status, text). Falls back to curl when Python cannot verify the
    certificate, which happens behind TLS-inspecting corporate proxies that curl already trusts."""
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
            return r.status, r.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except urllib.error.URLError as e:
        if "CERTIFICATE_VERIFY_FAILED" not in str(e.reason) or not shutil.which("curl"):
            raise
    out = subprocess.run(["curl", "-s", "-m", "60", "-A", UA["User-Agent"], "-w", "\n%{http_code}", url],
                         capture_output=True, text=True).stdout
    body, _, code = out.rpartition("\n")
    return int(code or 0), body


def crossref(doi):
    """Return (title, journal, year, citations) for a DOI, or None if Crossref has no record."""
    url = "https://api.crossref.org/works/" + urllib.parse.quote(doi, safe="/")
    m = None
    for attempt in range(5):
        time.sleep(PAUSE)  # Crossref's public pool allows only a few requests per second
        try:
            status, body = fetch(url)
        except Exception as e:
            print(f"warning: {doi}: {e}")
            status = 0
        if status == 200:
            m = json.loads(body)["message"]
            break
        if status == 404:
            return None
        time.sleep(5 + 10 * attempt)  # 429 or a server error: back off
    if m is None:
        print(f"warning: gave up on {doi}")
        return None
    year = None
    for key in ("published-print", "published", "issued", "published-online"):
        parts = m.get(key, {}).get("date-parts") or [[None]]
        if parts[0] and parts[0][0]:
            year = parts[0][0]
            break
    journal = clean((m.get("container-title") or [""])[0])
    if not journal and m.get("type") == "posted-content":
        inst = (m.get("institution") or [{}])[0].get("name", "")
        journal = (inst or "Preprint") + " (preprint)"
    return clean((m.get("title") or [""])[0]), journal, year, m.get("is-referenced-by-count")


def read_tsv(path):
    with open(path, newline="", encoding="utf-8") as fh:
        return [r for r in csv.DictReader(fh, delimiter="\t") if (r.get("name") or r.get("doi") or "").strip()]


def enrich(row, previous):
    doi = (row.get("doi") or "").strip()
    rec = {
        "title": (row.get("title") or "").strip(),
        "journal": (row.get("journal") or "").strip(),
        "year": int(row["year"]) if (row.get("year") or "").strip() else None,
        "citations": None,
        "doi": doi,
    }
    if not doi:
        return rec
    hit = None if OFFLINE else crossref(doi)
    if hit:
        title, journal, year, cites = hit
        rec.update(title=title or rec["title"], journal=journal or rec["journal"],
                   year=year or rec["year"], citations=cites)
    elif doi.lower() in previous:  # offline, or Crossref unreachable: keep the last known values
        old = previous[doi.lower()]
        for k in ("title", "journal", "year", "citations"):
            rec[k] = rec[k] or old.get(k)
    return rec


def main():
    vocab = json.loads((DATA / "vocab.json").read_text())
    out_json = DATA / "tools.json"
    previous = {}
    if out_json.exists():
        old = json.loads(out_json.read_text())
        previous = {t["doi"].lower(): t for t in old["tools"] + old["reviews"] if t.get("doi")}

    rows = read_tsv(DATA / "tools.tsv")
    errors, seen = [], set()
    for r in rows:
        for kind in ("functions", "platforms"):
            r[kind] = [v.strip() for v in r[kind].split(";") if v.strip()]
            errors += [f"{r['name']}: unknown {kind} code '{v}'" for v in r[kind] if v not in vocab[kind]]
            if not r[kind]:
                errors.append(f"{r['name']}: no {kind} given")
        if r["name"].lower() in seen:
            errors.append(f"{r['name']}: duplicate name")
        seen.add(r["name"].lower())
        if not (r.get("doi") or r.get("url")):
            errors.append(f"{r['name']}: needs a doi or a url")
    if errors:
        sys.exit("Fix data/tools.tsv:\n  " + "\n  ".join(errors))

    review_rows = read_tsv(DATA / "reviews.tsv")
    meta = [enrich(r, previous) for r in rows]  # one request at a time, see PAUSE
    review_meta = [enrich(r, previous) for r in review_rows]

    tools = []
    for r, m in zip(rows, meta):
        tools.append({"name": r["name"].strip(), "functions": r["functions"], "platforms": r["platforms"],
                      "url": (r.get("url") or "").strip(), **m})
        if m["doi"] and m["citations"] is None and not m["journal"]:
            print(f"warning: no metadata for {r['name']} ({m['doi']}); fill journal/year/title in tools.tsv")
    reviews = [{"scope": r["scope"].strip(), **m} for r, m in zip(review_rows, review_meta)]

    payload = {"updated": datetime.date.today().isoformat(), "vocab": vocab, "tools": tools, "reviews": reviews}
    text = json.dumps(payload, indent=1, ensure_ascii=False)
    out_json.write_text(text + "\n")
    (DATA / "tools.js").write_text("window.METH_TOOLS = " + text + ";\n")
    write_readme(payload)
    print(f"{len(tools)} tools, {len(reviews)} reviews written")


def md(text):
    return (text or "").replace("|", "\\|")


def write_readme(p):
    vocab, lines = p["vocab"], []
    lines.append(f"_{len(p['tools'])} tools. Metadata from Crossref, refreshed {p['updated']}. "
                 "Each tool is listed once, under its primary function; the website shows every tag._\n")
    for code, label in vocab["functions"].items():
        group = [t for t in p["tools"] if t["functions"][0] == code]
        if not group:
            continue
        group.sort(key=lambda t: -(t["citations"] or 0))
        lines += [f"### {label}\n", "| Tool | Data type | Journal | Year | Citations | Paper |", "|---|---|---|---|---|---|"]
        for t in group:
            name = f"[{md(t['name'])}]({t['url']})" if t["url"] else md(t["name"])
            plats = ", ".join(vocab["platforms"][x] for x in t["platforms"])
            paper = f"[{md(t['title'])}](https://doi.org/{t['doi']})" if t["doi"] else "–"
            cites = "–" if t["citations"] is None else f"{t['citations']:,}"
            lines.append(f"| {name} | {plats} | {md(t['journal']) or '–'} | {t['year'] or '–'} | {cites} | {paper} |")
        lines.append("")
    lines.append("### Reviews and benchmarks\n")
    for r in p["reviews"]:
        lines.append(f"- **{r['scope']}**: [{r['title']}](https://doi.org/{r['doi']}). {r['journal']}, {r['year']}.")
    block = "\n".join(lines)

    readme = ROOT / "README.md"
    text = readme.read_text()
    start, end = "<!-- TOOLS:START -->", "<!-- TOOLS:END -->"
    if start not in text or end not in text:
        sys.exit("README.md is missing the TOOLS:START / TOOLS:END markers")
    head, rest = text.split(start, 1)
    readme.write_text(head + start + "\n" + block + "\n" + end + rest.split(end, 1)[1])


if __name__ == "__main__":
    main()
