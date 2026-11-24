(function () {
  "use strict";
  var D = window.METH_TOOLS;
  var tools = D.tools, vocab = D.vocab;
  var state = { q: "", sort: "citations", functions: new Set(), platforms: new Set() };
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Within a group, selected chips are OR-ed; the two groups are AND-ed.
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

  function buildChips(kind) {
    var box = $("f-" + kind), counts = {};
    tools.forEach(function (t) { t[kind].forEach(function (v) { counts[v] = (counts[v] || 0) + 1; }); });
    Object.keys(vocab[kind]).forEach(function (key) {
      if (!counts[key]) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.setAttribute("aria-pressed", "false");
      b.innerHTML = esc(vocab[kind][key]) + '<span class="n">' + counts[key] + "</span>";
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
    var name = t.url ? '<a href="' + esc(t.url) + '" target="_blank" rel="noopener">' + esc(t.name) + "</a>" : esc(t.name);
    var tags = function (kind, cls) {
      return t[kind].map(function (v) {
        return '<span class="tag ' + cls + '">' + esc(vocab[kind][v] || v) + "</span>";
      }).join("");
    };
    var paper = t.doi
      ? '<a href="https://doi.org/' + esc(t.doi) + '" target="_blank" rel="noopener">DOI</a>'
      : '<span title="No publication; see the tool link">—</span>';
    return "<tr>" +
      '<td class="name">' + name + (t.title ? "<small>" + esc(t.title) + "</small>" : "") + "</td>" +
      "<td>" + tags("functions", "f") + "</td>" +
      "<td>" + tags("platforms", "p") + "</td>" +
      '<td class="journal">' + esc(t.journal || "—") + "</td>" +
      '<td class="num" data-label="Year">' + (t.year || "—") + "</td>" +
      '<td class="num" data-label="Citations">' + (t.citations == null ? "—" : t.citations.toLocaleString("en-US")) + "</td>" +
      "<td>" + paper + "</td></tr>";
  }

  function render() {
    var list = tools.filter(matches).sort(sorter);
    document.querySelector("#tools tbody").innerHTML = list.map(row).join("");
    $("count").textContent = "Showing " + list.length + " of " + tools.length + " tools";
    $("empty").hidden = list.length > 0;
    document.querySelectorAll("th[data-sort]").forEach(function (th) {
      th.classList.toggle("active", th.dataset.sort === state.sort);
    });
  }

  buildChips("functions");
  buildChips("platforms");

  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });
  $("sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  document.querySelectorAll("th[data-sort]").forEach(function (th) {
    th.addEventListener("click", function () { state.sort = th.dataset.sort; $("sort").value = state.sort; render(); });
  });
  $("reset").addEventListener("click", function () {
    state.q = ""; state.functions.clear(); state.platforms.clear();
    $("q").value = "";
    document.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
    render();
  });

  var years = tools.map(function (t) { return t.year; }).filter(Boolean);
  $("stats").innerHTML = "<b>" + tools.length + "</b> tools · <b>" + Object.keys(vocab.functions).length +
    "</b> functions · <b>" + Object.keys(vocab.platforms).length + "</b> data types · published <b>" +
    Math.min.apply(null, years) + "–" + Math.max.apply(null, years) + "</b>";
  $("updated").textContent = "Last refreshed " + D.updated + ".";
  $("reviews").innerHTML = D.reviews.map(function (r) {
    return '<li><a href="https://doi.org/' + esc(r.doi) + '" target="_blank" rel="noopener">' + esc(r.title) +
      "</a><br><span>" + esc(r.scope) + " · " + esc(r.journal) + " " + r.year + "</span></li>";
  }).join("");

  render();
})();
