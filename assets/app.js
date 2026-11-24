(function () {
  "use strict";
  var D = window.METH_TOOLS;
  var tools = D.tools, vocab = D.vocab;
  var state = { q: "", sort: "citations", functions: new Set(), platforms: new Set() };
  var $ = function (id) { return document.getElementById(id); };

  // Short labels for the data-type column; full names appear in the sidebar and on hover.
  var SHORT = { array: "Array", bs: "Short-read", targeted: "Targeted", enrich: "Enrichment", sc: "Single-cell",
                spatial: "Spatial", ont: "Nanopore", pacbio: "PacBio", cfdna: "cfDNA" };
  var maxLog = Math.log10(1 + Math.max.apply(null, tools.map(function (t) { return t.citations || 0; })));

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Within a group, selected facets are OR-ed; the two groups are AND-ed.
  function matches(t) {
    var hit = function (sel, vals) {
      if (!sel.size) return true;
      return vals.some(function (v) { return sel.has(v); });
    };
    if (!hit(state.functions, t.functions) || !hit(state.platforms, t.platforms)) return false;
    if (!state.q) return true;
    var hay = (t.name + " " + (t.title || "") + " " + (t.journal || "") + " " + (t.year || "")).toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function sorter(a, b) {
    if (state.sort === "name") return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
    var k = state.sort;
    return (b[k] || 0) - (a[k] || 0) || a.name.localeCompare(b.name);
  }

  function buildFacets(kind) {
    var box = $("f-" + kind), counts = {};
    tools.forEach(function (t) { t[kind].forEach(function (v) { counts[v] = (counts[v] || 0) + 1; }); });
    Object.keys(vocab[kind]).forEach(function (key) {
      if (!counts[key]) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "facet";
      b.setAttribute("aria-pressed", "false");
      b.innerHTML = '<span class="dot"></span><span class="lbl">' + esc(vocab[kind][key]) +
        '</span><span class="n">' + counts[key] + "</span>";
      b.addEventListener("click", function () {
        var on = state[kind].has(key);
        if (on) state[kind].delete(key); else state[kind].add(key);
        b.setAttribute("aria-pressed", String(!on));
        render();
      });
      box.appendChild(b);
    });
  }

  function row(t) {
    var name = t.url
      ? '<a class="name" href="' + esc(t.url) + '" target="_blank" rel="noopener">' + esc(t.name) + "</a>"
      : '<span class="name">' + esc(t.name) + "</span>";
    var title = "";
    if (t.title) {
      title = t.doi
        ? '<a class="title" href="https://doi.org/' + esc(t.doi) + '" target="_blank" rel="noopener">' + esc(t.title) + "</a>"
        : '<span class="title">' + esc(t.title) + "</span>";
    }
    var fns = t.functions.map(function (v) { return "<span>" + esc(vocab.functions[v] || v) + "</span>"; }).join("");
    var plats = t.platforms.map(function (v) {
      return '<span class="plat" title="' + esc(vocab.platforms[v] || v) + '">' + esc(SHORT[v] || v) + "</span>";
    }).join("");
    var cites = "–";
    if (t.citations != null) {
      var w = Math.round(100 * Math.log10(1 + t.citations) / maxLog);
      cites = t.citations.toLocaleString("en-US") + '<span class="bar" style="width:' + w + '%"></span>';
    }
    return "<tr>" +
      '<td class="tool">' + name + title + "</td>" +
      '<td class="fn">' + fns + "</td>" +
      '<td class="data">' + plats + "</td>" +
      '<td class="journal">' + esc(t.journal || "–") + "</td>" +
      '<td class="num">' + (t.year || "–") + "</td>" +
      '<td class="num cites">' + cites + "</td></tr>";
  }

  function render() {
    var list = tools.filter(matches).sort(sorter);
    var active = state.functions.size + state.platforms.size;
    document.querySelector("#tools tbody").innerHTML = list.map(row).join("");
    $("count").textContent = list.length === tools.length
      ? tools.length + " tools"
      : list.length + " of " + tools.length + " tools";
    $("empty").hidden = list.length > 0;
    $("reset").hidden = !(active || state.q);
    $("nactive").textContent = active ? "(" + active + ")" : "";
    document.querySelectorAll("th[data-sort]").forEach(function (th) {
      th.classList.toggle("active", th.dataset.sort === state.sort);
    });
  }

  // Masthead motif: a CpG lollipop track, the way bisulfite reads are usually drawn.
  function lollipops() {
    var pattern = "1110100011011100001011", out = '<line x1="0" y1="27" x2="320" y2="27" stroke="currentColor" stroke-width="1.5"/>';
    for (var i = 0; i < pattern.length; i++) {
      var x = 8 + i * 14.4, on = pattern[i] === "1";
      out += '<line x1="' + x + '" y1="27" x2="' + x + '" y2="11" stroke="currentColor" stroke-width="1.2"/>' +
        '<circle cx="' + x + '" cy="7" r="4.4" stroke="currentColor" stroke-width="1.4" fill="' +
        (on ? "currentColor" : "none") + '"/>';
    }
    $("lollipops").innerHTML = out;
  }

  lollipops();
  buildFacets("platforms");
  buildFacets("functions");
  // Filters are always open on wide screens and start folded on narrow ones.
  if (window.matchMedia) {
    var narrow = window.matchMedia("(max-width: 900px)");
    var syncFilters = function () { $("filters").open = !narrow.matches; };
    syncFilters();
    if (narrow.addEventListener) narrow.addEventListener("change", syncFilters);
  }

  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });
  $("sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  document.querySelectorAll("th[data-sort]").forEach(function (th) {
    th.addEventListener("click", function () { state.sort = th.dataset.sort; $("sort").value = state.sort; render(); });
  });
  $("reset").addEventListener("click", function () {
    state.q = ""; state.functions.clear(); state.platforms.clear();
    $("q").value = "";
    document.querySelectorAll(".facet").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
    render();
  });

  var years = tools.map(function (t) { return t.year; }).filter(Boolean);
  $("stats").textContent = tools.length + " tools · " + Object.keys(vocab.functions).length + " functions · " +
    Object.keys(vocab.platforms).length + " data types · " + Math.min.apply(null, years) + "–" + Math.max.apply(null, years);
  $("updated").textContent = "Last refreshed " + D.updated + ".";

  render();
})();
