(function () {
  const DATA = window.NHB_DATA;
  const R = NHB_RULES;
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clean = s => String(s || "").replace(/\s*Note:.*$/i, "").replace(/\s+$/, "").replace(/\.$/, "");
  let uidSeq = 1;
  const newUid = () => "u" + (Date.now().toString(36)) + (uidSeq++);

  // ---------- Storage (per-viewer convenience only) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  const EXAMPLE = {
    name: "Example: Hittite 2000",
    armyId: "hittite", size: 2000, example: true,
    units: [
      { unitId: "royal-retinue", comp: 0, swaps: {}, adds: {}, chars: { 0: "Commander" } },
      { unitId: "hattian-royal-guard", comp: 0, swaps: {}, adds: { 1: true }, chars: { 0: "Lead Captain" } },
      { unitId: "hattian-infantry", comp: 0, swaps: {}, adds: { 1: true }, chars: { 0: "Standard Bearer" } },
      { unitId: "hattian-infantry", comp: 0, swaps: { 0: 1 }, adds: { 1: true }, chars: { 0: "Lead Captain" } },
      { unitId: "levy-infantry", comp: 0, swaps: {}, adds: {}, chars: { 1: "Lead Captain" } },
      { unitId: "hattian-archers", comp: 0, swaps: {}, adds: {}, chars: { 0: "Volleymaster" } },
      { unitId: "hattian-peltasts", count: 12, swaps: {}, adds: {}, chars: { 0: "Lead Captain" } },
      { unitId: "hattian-chariots", comp: 0, swaps: {}, adds: {}, chars: { 0: "Lord" } },
      { unitId: "hattian-chariots", comp: 1, swaps: { 0: 1 }, adds: {}, chars: {} },
      { unitId: "allied-chariots", comp: 0, swaps: {}, adds: {}, chars: {} },
      { unitId: "allied-archers", comp: 0, swaps: {}, adds: {}, chars: {} },
      { unitId: "allied-peltasts", count: 7, swaps: {}, adds: {}, chars: {} }
    ]
  };

  function fresh(armyId, size) { return { name: "", armyId, size: size || 2000, units: [], commands: [], example: false }; }
  function withUids(s) { s.units.forEach(u => { if (!u.uid) u.uid = newUid(); }); if (!Array.isArray(s.commands)) s.commands = []; return s; }

  let lists = store.get("nhb-lists", {});
  // A stored list still marked as the example is replaced by the current example, so point changes reach it.
  const savedCurrent = store.get("nhb-current", null);
  let state = withUids(JSON.parse(JSON.stringify(savedCurrent && !savedCurrent.example ? savedCurrent : EXAMPLE)));
  let toggles = store.get("nhb-toggles", { unit: true, army: false, chars: false, types: false });
  let tab = "build";
  let pending = null; // inline confirmation
  const openCards = new Set(); // expanded unit cards, by uid
  const openCmds = new Set(); // expanded Command cards, by id
  let toast = "";

  const army = () => DATA.armies.find(a => a.id === state.armyId) || DATA.armies[0];
  const MERCS = DATA.mercs || { units: [] };
  const COMMANDS = DATA.commands || [];
  const DECK_SIZE = 6;
  const unitDef = (id, src) => (src === "mercs" ? MERCS : army()).units.find(u => u.id === id);
  // Faction cards list the armies that may take them; cards without "armies" are open to every army.
  const cardsFor = () => COMMANDS.filter(c => !c.armies || c.armies.includes(army().id));
  const deck = () => (state.commands || []).map(id => cardsFor().find(c => c.id === id)).filter(Boolean);
  const mercSlots = () => NHB.mercSlots(deck());
  const copiesOf = id => deck().filter(c => c.id === id).length;
  const limitOf = c => c.limit || 1;
  // "Name, Name ×2" for the sheet and copied text, in deck order.
  const deckNames = () => { const seen = []; deck().forEach(c => { if (!seen.includes(c)) seen.push(c); }); return seen.map(c => c.name + (copiesOf(c.id) > 1 ? ` ×${copiesOf(c.id)}` : "")); };
  const mercIds = () => state.units.filter(s => s.src === "mercs").map(s => s.unitId);
  const summarizeState = () => NHB.summarize(army(), state.units, state.size, { pools: { mercs: MERCS }, mercSlots: mercSlots() });
  const save = () => store.set("nhb-current", state);

  // ---------- Tally ----------
  function renderTally(sum) {
    const pct = Math.min(100, (sum.pts / sum.limit) * 100);
    const over = sum.pts > sum.limit;
    $("#tally").innerHTML = `
      <div class="tally-top">
        <h1>${esc(army().name)}</h1>
        <div class="pts">${sum.pts}<small> / ${sum.limit} pts</small></div>
      </div>
      <div class="meter ${over ? "over" : ""}"><i style="width:${pct}%"></i></div>
      <div class="tally-sub">
        <span>${over ? `<b style="color:var(--danger)">${sum.pts - sum.limit} over</b>` : `<b>${sum.under}</b> left`}</span>
        <span>Bid <b>${sum.bid}</b></span>
        <span>Army Morale <b>${sum.morale.total}</b></span>
        <span>Units <b>${sum.units.length}</b></span>
      </div>`;
  }

  // ---------- Setup ----------
  function renderSetup() {
    const names = Object.keys(lists).sort();
    let confirmHtml = "";
    if (pending) {
      confirmHtml = `<div class="confirm full" role="alert"><span>${esc(pending.text)}</span>
        <button class="btn primary" data-act="confirm-yes">${esc(pending.yes)}</button>
        <button class="btn ghost" data-act="confirm-no">Cancel</button></div>`;
    }
    $("#setup").innerHTML = `
      <div class="setup">
        <div class="field"><label class="label" for="army">Army</label>
          <select id="army">${DATA.armies.map(a => {
            const priced = a.units.filter(u => u.points != null).length;
            return `<option value="${a.id}" ${a.id === state.armyId ? "selected" : ""}>${esc(a.name)}${priced ? "" : " (points TBD)"}</option>`;
          }).join("")}</select></div>
        <div class="field"><span class="label">Game size</span>
          <div class="seg" role="group" aria-label="Game size">
            <button data-size="2000" aria-pressed="${state.size === 2000}">2000 · 1v1</button>
            <button data-size="1250" aria-pressed="${state.size === 1250}">1250 · 2v2</button>
          </div></div>
        <div class="saves full">
          <div class="field"><label class="label" for="listname">List name</label>
            <input type="text" id="listname" value="${esc(state.name)}" placeholder="Name this list to save it"></div>
          <button class="btn primary" data-act="save">Save</button>
          ${names.length ? `<div class="field"><label class="label" for="saved">Saved lists</label>
            <select id="saved"><option value="">Open a saved list…</option>${names.map(n => `<option>${esc(n)}</option>`).join("")}</select></div>` : ""}
          <button class="btn" data-act="new">New list</button>
          ${lists[state.name] ? `<button class="btn ghost danger" data-act="delete">Delete</button>` : ""}
        </div>
        ${confirmHtml}
        ${toast ? `<div class="toast full">${esc(toast)}</div>` : ""}
      </div>`;
  }

  // ---------- Build ----------
  function unitCard(x, idx) {
    const u = x.u, sel = x.sel;
    const lo = x.lo;
    let comp;
    if (u.range) {
      const n = NHB.models(u, sel);
      comp = `<div class="field"><span class="label">${/Warmachine/.test(u.type) ? "Engineers" : "Models"} (${u.range[0]}–${u.range[1]})</span>
        <div class="stepper"><button data-act="dec" data-i="${idx}" aria-label="Fewer models">−</button><span class="num">${n}</span><button data-act="inc" data-i="${idx}" aria-label="More models">+</button></div></div>`;
    } else {
      const noun = u.type === "Chariot" ? "Chariots" : u.type === "Elephant" ? "Elephants" : /Cavalry/.test(u.type) ? "Cavalry" : /Warmachine/.test(u.type) ? "Engineers" : "Warriors";
      comp = `<div class="field"><label class="label" for="comp-${sel.uid}">Composition</label>
        <select id="comp-${sel.uid}" data-act="comp" data-i="${idx}">${u.comps.map((c, ci) =>
          `<option value="${ci}" ${ci === (sel.comp || 0) ? "selected" : ""}>${c[0]} rank${c[0] > 1 ? "s" : ""} of ${c[1]} ${noun} (${c[0] * c[1]})</option>`).join("")}</select></div>`;
    }
    const opts = (u.opts || []).map((o, oi) => {
      if (o.kind === "swap") {
        return `<div class="field"><label class="label" for="sw-${sel.uid}-${oi}">${esc(o.label)}</label>
          <select id="sw-${sel.uid}-${oi}" data-act="swap" data-i="${idx}" data-o="${oi}">${o.choices.map((c, ci) =>
            `<option value="${ci}" ${ci === ((sel.swaps || {})[oi] || 0) ? "selected" : ""}>${esc(c.name)}${c.c ? ` (+${c.c}/model)` : ""}</option>`).join("")}</select></div>`;
      }
      if (o.kind === "count") {
        const n = NHB.models(u, sel), k = Math.min(n, (sel.counts || {})[oi] || 0);
        return `<div class="field"><span class="label">${esc(o.label)} · +${o.c} each</span>
          <div class="stepper"><button data-act="cdec" data-i="${idx}" data-o="${oi}" aria-label="Fewer">−</button><span class="num">${k} / ${n}</span><button data-act="cinc" data-i="${idx}" data-o="${oi}" aria-label="More">+</button></div></div>`;
      }
      const off = lo.disabled[oi];
      const on = !off && (sel.adds || {})[oi];
      return `<label class="check ${off ? "off" : ""}"><input type="checkbox" id="ad-${sel.uid}-${oi}" data-act="add" data-i="${idx}" data-o="${oi}" ${on ? "checked" : ""} ${off ? "disabled" : ""}>
        ${esc(o.label)} <span class="num">+${o.c}/model</span>${off ? ` <span class="label">not with ${esc(o.unlessWeapon)}</span>` : ""}</label>`;
    }).join("");
    const chars = (u.chars || []).map((g, gi) => {
      const cur = (sel.chars || {})[gi] || "";
      const label = (g.req ? "Must take" : "Character") + (g.note ? ` · ${g.note}` : "");
      return `<div class="field"><label class="label" for="ch-${sel.uid}-${gi}">${esc(label)}</label>
        <select id="ch-${sel.uid}-${gi}" data-act="char" data-i="${idx}" data-g="${gi}">
          <option value="">${g.req ? "Choose one…" : "None"}</option>
          ${g.one.map(o => `<option value="${esc(o[0])}" ${o[0] === cur ? "selected" : ""}>${esc(o[0])} (+${o[1]})</option>`).join("")}
        </select>
        <ul class="charlist">${g.one.map(o => {
          const mor = NHB.charMorale(o[0], u.training);
          return `<li class="${o[0] === cur ? "on" : ""}"><b>${esc(o[0])}</b> <span class="num">${o[1]} pts · +${mor} morale</span><br>${esc(R.charShort[o[0]] || "")}</li>`;
        }).join("")}</ul></div>`;
    }).join("");
    const a = x.armor;
    const chips = [
      `Armor ${a.value} (${a.save})`,
      `Health ${x.health.hp}`,
      usText(x, true),
      `Move ${x.move}`,
      `Morale +${x.morale.total}`
    ].map(c => `<span class="chip">${c}</span>`).join("") + x.warn.map(w => `<span class="chip warn">${esc(w)}</span>`).join("");
    const isOpen = openCards.has(sel.uid);
    const head = `<div class="card-head">
        <button class="expander" data-act="expand" data-uid="${sel.uid}" aria-expanded="${isOpen}" aria-label="${isOpen ? "Collapse" : "Expand"} ${esc(u.name)}">${isOpen ? "−" : "+"}</button>
        <div class="card-title"><h3>${esc(u.name)}</h3><div class="type">${sel.src === "mercs" ? "Mercenary · " : ""}${esc(u.type)} · ${esc(sizeText(x))} · ${u.engine ? `${u.engine} + ${u.points}/Engineer` : `${u.points}/model`}</div></div>
        <div class="card-pts">${x.pts} pts</div></div>`;
    if (!isOpen) {
      return `<article class="card ${x.warn.length ? "bad" : ""}">${head}<div class="chips">${chips}</div></article>`;
    }
    return `<article class="card open ${x.warn.length ? "bad" : ""}">${head}
      <div class="opts">${comp}${opts}${chars}</div>
      <div class="profile">${profileHtml(x, true)}</div>
      <div class="chips">${chips}</div>
      <div class="card-foot"><button class="btn" data-act="dup" data-i="${idx}">Duplicate</button><button class="btn danger" data-act="remove" data-i="${idx}">Remove</button></div>
    </article>`;
  }

  function renderBuild(sum) {
    const ex = state.example ? `<div class="example"><span>This is an example list so you can see how it works.</span><button class="btn" data-act="new">Start a new list</button></div>` : "";
    const warn = sum.armyWarn.length ? `<div class="warnbox">${sum.armyWarn.map(esc).join("<br>")}</div>` : "";
    const anyOpen = sum.units.some(x => openCards.has(x.sel.uid));
    const bar = sum.units.length ? `<div class="units-bar"><span class="label">${sum.units.length} unit${sum.units.length > 1 ? "s" : ""}</span><button class="btn ghost" data-act="${anyOpen ? "collapse-all" : "expand-all"}">${anyOpen ? "Collapse all" : "Expand all"}</button></div>` : "";
    const cards = sum.units.length ? bar + `<div class="units">${sum.units.map(unitCard).join("")}</div>`
      : `<div class="empty">No units yet. Add one from the ${esc(army().name)} list below.</div>`;
    const roster = army().units.map(u => {
      const tbd = u.points == null;
      const size = u.range ? `${u.range[0]}–${u.range[1]}${/Warmachine/.test(u.type) ? " Engineers" : ""}` : u.comps.map(c => c[0] * c[1]).join(" or ");
      return `<button class="pick" data-act="addunit" data-u="${u.id}" ${tbd ? "disabled" : ""}>
        <span><span class="nm">${esc(u.name)}</span><br><span class="sub">${esc(u.type)} · ${size}</span></span>
        ${tbd ? `<span class="tbd">TBD</span>` : `<span class="num">${u.points}</span>`}</button>`;
    }).join("");
    const slots = mercSlots(), taken = mercIds(), mercN = taken.length, mercOk = slots.length;
    const allowedAny = id => slots.some(sl => !sl.units || sl.units.includes(id));
    const mercRoster = mercOk ? `<h2>Supplemental Mercenaries <span class="label">${mercN} / ${mercOk} taken</span></h2><div class="roster-list">${MERCS.units.filter(u => allowedAny(u.id)).map(u => {
      const size = u.range ? `${u.range[0]}–${u.range[1]}` : u.comps.map(c => c[0] * c[1]).join(" or ");
      const full = !NHB.mercFit(slots, taken.concat(u.id)).ok;
      return `<button class="pick" data-act="addunit" data-src="mercs" data-u="${u.id}" ${full ? "disabled" : ""}>
        <span><span class="nm">${esc(u.name)}</span><br><span class="sub">${esc(u.type)} · ${size}</span></span>
        <span class="num">${u.points}</span></button>`;
    }).join("")}</div>` : "";
    const inDeck = deck().map(c => c.id);
    const cmd = `<section class="cmd"><h2>Command deck <span class="label">${inDeck.length} / ${DECK_SIZE} cards</span></h2>
      <div class="cmd-list">${cardsFor().map(c => {
        const n = copiesOf(c.id), lim = limitOf(c), on = n > 0, full = inDeck.length >= DECK_SIZE, open = openCmds.has(c.id);
        const limText = lim > 1 ? `Up to ${lim} per deck` : "1 per deck";
        const pick = lim > 1
          ? `<div class="stepper"><button data-act="cmddec" data-id="${esc(c.id)}" ${n ? "" : "disabled"} aria-label="Remove a copy">−</button><span class="num">${n}</span><button data-act="cmdinc" data-id="${esc(c.id)}" ${n >= lim || full ? "disabled" : ""} aria-label="Add a copy">+</button></div>`
          : `<input type="checkbox" data-act="cmd" data-id="${esc(c.id)}" ${on ? "checked" : ""} ${!on && full ? "disabled" : ""} aria-label="Add ${esc(c.name)} to deck">`;
        const details = open ? `<div class="cmd-details">${c.flavor ? `<i class="flavor">${esc(c.flavor)}</i><br>` : ""}${kw(c.text)}${c.note ? `<br><span class="sub">${esc(c.note)}</span>` : ""}</div>` : "";
        return `<div class="cmdcard ${on ? "on" : ""}${open ? " open" : ""}">${pick}<div class="cmd-main"><div class="cmd-head"><span><b>${esc(c.name)}</b><br><span class="sub">${esc(c.short || "")} · ${limText}</span></span><button class="cmd-more" data-act="cmdmore" data-id="${esc(c.id)}" aria-expanded="${open}" aria-label="${open ? "Hide" : "Show"} rules for ${esc(c.name)}">${open ? "−" : "+"}</button></div>${details}</div></div>`;
      }).join("")}</div>
      <p class="sub">Pick up to ${DECK_SIZE} cards. More Command cards are on the way.</p></section>`;
    $("#view").innerHTML = `${ex}${warn}${cards}${cmd}<section class="roster"><h2>Add a unit</h2><div class="roster-list">${roster}</div>${mercRoster}</section>`;
  }

  // ---------- Sheet ----------
  function rulesUsed(sum) {
    const model = new Set(), weapon = new Set(), chars = new Set(), types = new Set();
    sum.units.forEach(x => {
      x.rules.forEach(r => { if (/^Terrify/.test(r)) model.add("Terrify X"); else if (/^Surefooted \(/.test(r)) model.add("Surefooted (X)"); else if (R.model[r]) model.add(r); });
      x.lo.weapons.concat(x.lo.gear).forEach(w => {
        const st = x.u.weapons[w]; if (!st) return;
        R.weaponPatterns.forEach(([re, name]) => { if (re.test(st[3])) weapon.add(name); });
      });
      [x.lo.body, x.lo.shield, x.lo.barding, x.u.mixed && x.u.mixed.front.shield].forEach(n => {
        const d = n && (x.u.armors || {})[n]; if (d && d.grants) d.grants.forEach(g => weapon.add(g));
      });
      x.chars.forEach(c => chars.add(c.name));
      const t = x.u.type;
      if (x.u.range) types.add("Open Order"); else types.add("Closed Order");
      if (/^Light (Warrior|Cavalry)/.test(t)) { types.add("Open Order"); types.add("Light Warriors / Light Cavalry"); }
      if (/Warmachine/.test(t)) types.add("Warmachines");
      if (/Cavalry/.test(t)) types.add("Cavalry");
      if (t === "Chariot") types.add("Chariots");
      if (t === "Elephant") types.add("Elephants");
    });
    return { model: [...model].sort(), weapon: [...weapon].sort(), chars: [...chars].sort(), types: [...types] };
  }


  // ---------- Keyword tooltips ----------
  // Wraps rule keywords (Cleaving Blade (3), Phalanx, Terrify All...) in buttons that show the rule on hover or tap.
  const KW = (() => {
    const all = Object.assign({}, R.model, R.weapon);
    const reEsc = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const list = Object.keys(all).map(name => {
      let src;
      if (name === "Surefooted (X)") src = "Surefooted \\((?:Stony Plain|Marsh|Sand)(?:, (?:Stony Plain|Marsh|Sand))*\\)";
      else if (/ \(X\)$/.test(name)) src = reEsc(name.slice(0, -4)) + " \\((\\d+)\\)";
      else if (/ X$/.test(name)) src = reEsc(name.slice(0, -2)) + " ([A-Z][\\w-]*)";
      else src = reEsc(name);
      return { name, src, re: new RegExp("^(?:" + src + ")$") };
    }).sort((a, b) => b.src.length - a.src.length);
    const big = new RegExp("(?<![\\w-])(?:" + list.map(k => k.src).join("|") + ")(?![\\w-])", "g");
    return { all, list, big };
  })();
  function kw(text) {
    const s = String(text || ""); let out = "", last = 0;
    s.replace(KW.big, (m, ...rest) => {
      const at = rest[rest.length - 2];
      const k = KW.list.find(k => k.re.test(m)); if (!k) return m;
      const x = (m.match(k.re) || [])[1] || "";
      out += esc(s.slice(last, at)) + `<button type="button" class="kw" data-kw="${esc(k.name)}" data-x="${esc(x)}">${esc(m)}</button>`;
      last = at + m.length; return m;
    });
    return out + esc(s.slice(last));
  }
  const tip = document.createElement("div");
  tip.id = "kwtip"; tip.setAttribute("role", "tooltip"); tip.hidden = true; document.body.appendChild(tip);
  let tipFor = null;
  function showTip(b) {
    const name = b.dataset.kw, x = b.dataset.x;
    let txt = KW.all[name] || ""; if (x) txt = txt.replace(/\bX\b/g, x).replace(/type “X”/g, `type “${x}”`);
    tip.innerHTML = `<b>${esc(x ? name.replace(/\(?X\)?$/, m => m.replace("X", x)) : name)}</b>${esc(txt)}`;
    tip.hidden = false; tipFor = b;
    const r = b.getBoundingClientRect(), w = Math.min(320, innerWidth - 24);
    tip.style.width = w + "px";
    tip.style.left = Math.max(12, Math.min(r.left, innerWidth - w - 12)) + "px";
    const h = tip.offsetHeight, below = r.bottom + 6;
    tip.style.top = (below + h > innerHeight - 8 && r.top - h - 6 > 8 ? r.top - h - 6 : below) + "px";
  }
  function hideTip() { tip.hidden = true; tipFor = null; }
  document.addEventListener("mouseover", e => { const b = e.target.closest && e.target.closest(".kw"); if (b && matchMedia("(hover: hover)").matches) showTip(b); });
  document.addEventListener("mouseout", e => { const b = e.target.closest && e.target.closest(".kw"); if (b && tipFor === b && !b.contains(e.relatedTarget) && matchMedia("(hover: hover)").matches) hideTip(); });
  document.addEventListener("click", e => {
    const b = e.target.closest(".kw");
    if (b) { e.stopPropagation(); tipFor === b && !matchMedia("(hover: hover)").matches ? hideTip() : showTip(b); return; }
    hideTip();
  }, true);
  document.addEventListener("keydown", e => { if (e.key === "Escape") hideTip(); });
  addEventListener("scroll", hideTip, { passive: true });
  document.addEventListener("focusin", e => { if (e.target.classList && e.target.classList.contains("kw") && e.target.matches(":focus-visible")) showTip(e.target); });
  document.addEventListener("focusout", e => { if (e.target === tipFor) hideTip(); });

  // Plain-English description shown under native weapon and armor names.
  const LABELS = (window.NHB_DATA && window.NHB_DATA.labels) || {};
  const desc = n => LABELS[n] ? `<span class="wdesc">${esc(LABELS[n])}</span>` : "";

  function weaponRows(x, showAll) {
    const carried = x.lo.weapons.concat(x.lo.gear);
    const names = showAll ? carried.concat(Object.keys(x.u.weapons).filter(w => !carried.includes(w))) : carried;
    return names.map(w => {
      const st = x.u.weapons[w]; if (!st) return "";
      const off = !carried.includes(w);
      const tag = off ? ` <span class="label">option</span>` : x.lo.gear.includes(w) ? ` <span class="label">gear</span>` : "";
      return `<tr class="${off ? "alt" : ""}"><td>${esc(w)}${tag}${desc(w)}</td><td class="n">${esc(st[0])}</td><td class="n">${esc(st[1])}</td><td class="n">${esc(st[2])}</td><td>${kw(clean(st[3]))}</td></tr>`;
    }).join("");
  }

  function armorTable(x) {
    const pieces = [];
    const add = (name, who) => { if (!name || pieces.some(p => p.name === name)) return; pieces.push(Object.assign({ who }, NHB.armorDef(x.u, name))); };
    if (x.u.mixed) { add(x.lo.body, "All ranks"); add(x.u.mixed.front.shield, x.u.mixed.front.label); add(x.u.mixed.rest.shield, x.u.mixed.rest.label); }
    else { const who = x.u.type === "Chariot" ? "Crew" : ""; add(x.lo.body, who); add(x.lo.shield, who); }
    add(x.lo.barding, "Horse");
    if (!pieces.length) return "";
    const rows = pieces.map(p => {
      const extra = (p.grants || []).map(g => R.weapon[g] ? `${g}: ${R.weapon[g]}` : g).join(" ");
      const text = [clean(p.text), extra].filter(Boolean).join(". ");
      return `<tr><td>${esc(p.name)}${p.who ? ` <span class="label">${esc(p.who)}</span>` : ""}${desc(p.name)}</td><td class="n">+${p.v || 0}</td><td class="n">${p.move ? p.move : "0"}</td><td>${text ? kw(text) : "None"}</td></tr>`;
    }).join("");
    return `<div class="tablewrap"><table class="wpn armor"><thead><tr><th>Armor</th><th>Value</th><th>Move</th><th>Ability</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  // Stat block shared by the builder cards (with option weapons shown) and the list sheet.
  function profileHtml(x, showAll) {
    const a = x.armor, h = x.health;
    const charTxt = x.chars.length ? x.chars.map(c => c.name + (c.note ? ` (${c.note})` : "")).join(", ") : "None";
    const custom = (toggles.unit || showAll) && x.u.custom ? Object.entries(x.u.custom).map(([k, v]) => `<div><b>${esc(k)}:</b> ${kw(v)}</div>`).join("") : "";
    return `<div class="statline">
          <div class="stat"><div class="k">Move</div><div class="v">${x.move}</div></div>
          <div class="stat"><div class="k">Training</div><div class="v">${x.u.training}</div></div>
          <div class="stat"><div class="k">Armor</div><div class="v">${a.value} · ${a.save}</div></div>
          <div class="stat"><div class="k">Health</div><div class="v">${h.hp}</div></div>
          <div class="stat"><div class="k">${split(x) ? "Unit Str. C / O" : "Unit Str."}</div><div class="v">${split(x) ? `${x.us} / ${x.usOpen}` : x.us}</div></div>
        </div>
        <div class="tablewrap"><table class="wpn"><thead><tr><th>Weapon</th><th>Len/Rng</th><th>Acc</th><th>Str</th><th>Ability</th></tr></thead><tbody>${weaponRows(x, showAll)}</tbody></table></div>
        ${armorTable(x)}
        <div class="health"><b>Health breaks</b>
          <span>Weakened ≤${h.weakened}</span><span>Half ≤${h.half} (remove ${h.removeAtHalf})</span><span>Mass Casualties ≤${h.mass}</span><span>Eradicated 0</span></div>
        <div class="lines">
          ${armorLines(a).map(l => `<div><b>Armor:</b> ${esc(l)}</div>`).join("")}
          ${showAll ? "" : `<div><b>Characters:</b> ${esc(charTxt)}</div>`}
          <div><b>Special rules:</b> ${x.rules.length ? kw(x.rules.join(", ")) : "None"}</div>
          <div><b>Army Morale:</b> ${x.morale.base}${x.morale.bonus ? ` + ${x.morale.bonus} characters` : ""} = ${x.morale.total}</div>
          ${custom}
        </div>`;
  }

  function armorLines(a) {
    const out = [];
    if (a.melee !== a.value) out.push(`In melee: ${a.melee} (${NHB.saveFor(a.melee)})`);
    if (a.hold) out.push(`With Hold token: +${a.hold}`);
    if (a.runflee) out.push(`With Run/Flee token: ${a.runflee}`);
    if (a.mixedNote) out.push(a.mixedNote);
    (a.notes || []).forEach(n => out.push(n));
    return out;
  }

  function loadoutText(x) {
    const bits = [];
    if (x.u.mixed) {
      bits.push(`${x.u.mixed.front.label}: ${x.u.mixed.front.w.join(", ")}${x.u.mixed.front.shield ? ", " + x.u.mixed.front.shield : ""}`);
      bits.push(`${x.u.mixed.rest.label}: ${x.u.mixed.rest.w.join(", ")}`);
      if (x.lo.body) bits.push(`All: ${x.lo.body}`);
      return bits.join(" · ");
    }
    const eq = x.lo.weapons.filter(w => w !== "Horses" && w !== "Elephant");
    if (eq.length) bits.push(eq.join(", "));
    if (x.lo.body) bits.push(x.lo.body);
    if (x.lo.shield) bits.push(x.lo.shield);
    if (x.lo.barding) bits.push(x.lo.barding);
    if (x.lo.crewPlus) bits.push(x.u.type === "Elephant" ? `+${x.lo.crewPlus} crewman per Elephant` : `+${x.lo.crewPlus} rider per Camel`);
    (x.lo.mixed || []).forEach(m => bits.push(`${m.n} × ${m.label.replace(/ \(replaces[^)]*\)/, "")}`));
    return bits.join(" · ") || "No equipment";
  }

  const split = x => x.usOpen != null && x.usOpen !== x.us;
  function usText(x) { return split(x) ? `US ${x.us} closed / ${x.usOpen} open` : `US ${x.us}`; }

  function sizeText(x) {
    const n = NHB.models(x.u, x.sel);
    const rf = NHB.ranksFiles(x.u, x.sel);
    const noun = x.u.type === "Chariot" ? "Chariots" : x.u.type === "Elephant" ? "Elephants" : /Cavalry/.test(x.u.type) ? "Cavalry" : /Warmachine/.test(x.u.type) ? "Engineers" : "Warriors";
    if (/Warmachine/.test(x.u.type)) return `1 war engine and ${n} ${noun}`;
    return rf ? `${rf.ranks} × ${rf.files} ${noun} (${n})` : `${n} ${noun}`;
  }

  function renderSheet(sum) {
    const used = rulesUsed(sum);
    const m = sum.morale;
    const t = (k, label, sub) => `<label class="check"><input type="checkbox" id="tg-${k}" data-act="toggle" data-k="${k}" ${toggles[k] ? "checked" : ""}> ${label}${sub ? ` <span class="label">${sub}</span>` : ""}</label>`;
    const units = sum.units.map(x => `<section class="su">
        <div class="su-head"><h3>${esc(x.u.name)}</h3><span class="num">${x.pts} pts</span></div>
        <div class="su-sub">${esc(x.u.type)} · ${esc(sizeText(x))} · ${esc(loadoutText(x))}</div>
        ${profileHtml(x, false)}
      </section>`).join("");
    const dl = (keys, src) => `<dl>${keys.map(k => `<div><dt>${esc(k)}</dt><dd>${esc(src[k] || "")}</dd></div>`).join("")}</dl>`;
    let app = "";
    if (toggles.army && (used.model.length || used.weapon.length)) app += `<div class="appendix"><h3>Special Rules</h3>${dl(used.model, R.model)}${used.weapon.length ? `<h3 style="margin-top:12px">Weapon Rules</h3>${dl(used.weapon, R.weapon)}` : ""}</div>`;
    if (toggles.chars && used.chars.length) app += `<div class="appendix"><h3>Character Abilities</h3>${dl(used.chars, R.chars)}</div>`;
    if (toggles.types && used.types.length) app += `<div class="appendix"><h3>Unit Type Rules</h3>${dl(used.types, R.types)}</div>`;

    $("#view").innerHTML = `
      <div class="toggles">
        ${t("unit", "Unit-specific rules", "default")}
        ${t("army", "Special rules from the rulebook")}
        ${t("chars", "Character abilities")}
        ${t("types", "Unit type rules")}
      </div>
      ${sum.armyWarn.length ? `<div class="warnbox">${sum.armyWarn.map(esc).join("<br>")}</div>` : ""}
      <article class="sheet" id="sheet">
        <div class="sheet-head"><div class="game">Syrrhēxis: Ancient Battles</div><h2>${esc(state.name || army().name + " list")}</h2>
          <div class="meta"><span>${esc(army().name)}</span><span>${state.size === 2000 ? "2000 pts · 1v1" : "1250 pts · 2v2"}</span><span class="num">${sum.pts} / ${sum.limit} pts</span><span>Bid ${sum.bid}</span></div></div>
        <div class="label" style="margin-bottom:4px">Army Morale</div>
        <div class="morale-row">
          <div><div class="v">${m.total}</div><div class="k">Starting</div></div>
          <div><div class="v">≤${m.unease}</div><div class="k">Unease (75%)</div></div>
          <div><div class="v">≤${m.panic}</div><div class="k">Panic (50%)</div></div>
          <div><div class="v">≤${m.massPanic}</div><div class="k">Mass Panic (25%)</div></div>
          <div><div class="v">≤0</div><div class="k">Complete Rout</div></div>
        </div>
        ${deck().length ? `<div class="cmdline"><b>Command deck (${deck().length}/${DECK_SIZE}):</b> ${deckNames().map(esc).join(", ")}</div>` : ""}
        ${units || `<div class="empty">Add units on the Build tab to see your list here.</div>`}
        ${app}
        <div class="foot">List builder v${esc(DATA.meta.version)} · profiles synced from your army decks on ${esc(DATA.meta.synced)}.</div>
      </article>
      <div class="actions">${window.NHB_CAN_PRINT ? `<button class="btn primary" data-act="print">Print or save as PDF</button>` : ""}<button class="btn${window.NHB_CAN_PRINT ? "" : " primary"}" data-act="copy">Copy list as text</button><span class="toast" id="copied"></span></div>
      <div id="copyfall"></div>`;
  }

  function listText(sum) {
    const L = [];
    const m = sum.morale;
    L.push(`Syrrhēxis: Ancient Battles (list builder v${DATA.meta.version})`);
    L.push(`${state.name || army().name + " list"} — ${army().name}, ${sum.pts}/${sum.limit} pts (bid ${sum.bid})`);
    L.push(`Army Morale ${m.total} | Unease ≤${m.unease} | Panic ≤${m.panic} | Mass Panic ≤${m.massPanic} | Rout ≤0`);
    if (deck().length) L.push(`Command deck (${deck().length}/${DECK_SIZE}): ${deckNames().join(", ")}`);
    sum.units.forEach(x => {
      const a = x.armor, h = x.health;
      L.push("");
      L.push(`${x.u.name} — ${x.pts} pts — ${sizeText(x)}`);
      L.push(`  ${loadoutText(x)}`);
      L.push(`  Move ${x.move} | Training ${x.u.training} | Armor ${a.value} (${a.save}) | Health ${h.hp} | ${usText(x, true)}`);
      armorLines(a).forEach(l => L.push(`  Armor: ${l}`));
      x.lo.weapons.concat(x.lo.gear).forEach(w => { const st = x.u.weapons[w]; if (st) L.push(`  ${w}${LABELS[w] ? " (" + LABELS[w] + ")" : ""}: ${st[0]} / Acc ${st[1]} / Str ${st[2]}${clean(st[3]) ? " — " + clean(st[3]) : ""}`); });
      L.push(`  Breaks: Weakened ≤${h.weakened}, Half ≤${h.half} (remove ${h.removeAtHalf}), Mass Casualties ≤${h.mass}`);
      if (x.chars.length) L.push(`  Characters: ${x.chars.map(c => c.name).join(", ")}`);
      if (x.rules.length) L.push(`  Rules: ${x.rules.join(", ")}`);
      if (toggles.unit && x.u.custom) Object.entries(x.u.custom).forEach(([k, v]) => L.push(`  ${k}: ${v}`));
    });
    const used = rulesUsed(sum);
    const sec = (title, keys, src) => { if (!keys.length) return; L.push("", title.toUpperCase()); keys.forEach(k => L.push(`${k}: ${src[k]}`)); };
    if (toggles.army) { sec("Special Rules", used.model, R.model); sec("Weapon Rules", used.weapon, R.weapon); }
    if (toggles.chars) sec("Character Abilities", used.chars, R.chars);
    if (toggles.types) sec("Unit Type Rules", used.types, R.types);
    return L.join("\n");
  }

  // ---------- Render ----------
  function render() {
    const sum = summarizeState();
    renderTally(sum);
    renderSetup();
    $("#tab-build").setAttribute("aria-selected", tab === "build");
    $("#tab-sheet").setAttribute("aria-selected", tab === "sheet");
    if (tab === "build") renderBuild(sum); else renderSheet(sum);
    render.sum = sum;
  }

  function edit(fn) { fn(); state.example = false; save(); render(); }

  // ---------- Events ----------
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-act], [data-size], [role=tab]");
    if (!b) return;
    if (b.id === "tab-build" || b.id === "tab-sheet") { tab = b.id === "tab-build" ? "build" : "sheet"; render(); return; }
    if (b.dataset.size) { const s = +b.dataset.size; if (s !== state.size) { state.size = s; save(); render(); } return; }
    const act = b.dataset.act, i = +b.dataset.i;
    const sel = state.units[i];
    toast = "";
    switch (act) {
      case "addunit": {
        const src = b.dataset.src || undefined, u = unitDef(b.dataset.u, src);
        edit(() => { const id = newUid(); openCards.add(id); const s = { uid: id, unitId: u.id, comp: 0, count: u.range ? u.range[0] : undefined, swaps: {}, adds: {}, chars: {} }; if (src) s.src = src; state.units.push(s); });
        break;
      }
      case "cmdmore": { const id = b.dataset.id; openCmds.has(id) ? openCmds.delete(id) : openCmds.add(id); render(); break; }
      case "cmdinc": case "cmddec": {
        const id = b.dataset.id, c = cardsFor().find(x => x.id === id); if (!c) break;
        edit(() => {
          const cur = deck().map(x => x.id);
          if (act === "cmdinc" && copiesOf(id) < limitOf(c) && cur.length < DECK_SIZE) cur.push(id);
          if (act === "cmddec") { const k = cur.lastIndexOf(id); if (k >= 0) cur.splice(k, 1); }
          state.commands = cur;
        });
        break;
      }
      case "expand": { const id = b.dataset.uid; openCards.has(id) ? openCards.delete(id) : openCards.add(id); render(); break; }
      case "expand-all": state.units.forEach(s => openCards.add(s.uid)); render(); break;
      case "collapse-all": openCards.clear(); render(); break;
      case "remove": edit(() => state.units.splice(i, 1)); break;
      case "cinc": case "cdec": {
        const u = unitDef(sel.unitId, sel.src), n = NHB.models(u, sel), o = +b.dataset.o;
        edit(() => { sel.counts = sel.counts || {}; sel.counts[o] = Math.max(0, Math.min(n, (sel.counts[o] || 0) + (act === "cinc" ? 1 : -1))); });
        break;
      }
      case "dup": edit(() => { const c = JSON.parse(JSON.stringify(sel)); c.uid = newUid(); openCards.add(c.uid); state.units.splice(i + 1, 0, c); }); break;
      case "inc": case "dec": {
        const u = unitDef(sel.unitId, sel.src);
        edit(() => { sel.count = Math.min(u.range[1], Math.max(u.range[0], (sel.count || u.range[0]) + (act === "inc" ? 1 : -1))); });
        break;
      }
      case "save": {
        const name = ($("#listname").value || "").trim();
        if (!name) { toast = "Type a list name first."; render(); return; }
        state.name = name; state.example = false;
        lists[name] = JSON.parse(JSON.stringify(state));
        store.set("nhb-lists", lists); save();
        toast = `Saved “${name}”.`; render();
        break;
      }
      case "new":
        if (state.units.length && !state.example) { pending = { text: `Start a new list? Unsaved changes to this one are lost.`, yes: "Start new", run: () => { state = fresh(state.armyId, state.size); } }; render(); }
        else { state = fresh(state.armyId === "hittite" ? "hittite" : state.armyId, state.size); save(); render(); }
        break;
      case "delete":
        pending = { text: `Delete “${state.name}” from saved lists?`, yes: "Delete", run: () => { delete lists[state.name]; store.set("nhb-lists", lists); toast = "Deleted."; } };
        render(); break;
      case "confirm-yes": if (pending) { pending.run(); pending = null; save(); render(); } break;
      case "confirm-no": pending = null; render(); break;
      case "print": window.print(); break;
      case "copy": {
        const text = listText(render.sum);
        const done = () => { const el = $("#copied"); if (el) el.textContent = "Copied."; };
        const fallback = () => { $("#copyfall").innerHTML = `<textarea class="copyfall" id="copytext" readonly></textarea>`; const ta = $("#copytext"); ta.value = text; ta.focus(); ta.select(); const el = $("#copied"); if (el) el.textContent = "Select all and copy from the box below."; };
        try { navigator.clipboard.writeText(text).then(done, fallback); } catch (err) { fallback(); }
        break;
      }
    }
  });

  document.addEventListener("change", e => {
    const el = e.target;
    if (el.id === "army") {
      const target = el.value;
      if (state.units.length && !state.example) {
        pending = { text: `Switching to ${DATA.armies.find(a => a.id === target).name} clears the ${state.units.length} units in this list.`, yes: "Switch army", run: () => { state = fresh(target, state.size); } };
        el.value = state.armyId; render();
      } else { state = fresh(target, state.size); save(); render(); }
      return;
    }
    if (el.id === "saved") {
      const l = lists[el.value]; if (!l) return;
      state = withUids(JSON.parse(JSON.stringify(l))); save(); tab = "build"; render(); return;
    }
    if (el.id === "listname") { state.name = el.value.trim(); save(); return; }
    const act = el.dataset.act; if (!act) return;
    if (act === "toggle") { toggles[el.dataset.k] = el.checked; store.set("nhb-toggles", toggles); render(); return; }
    if (act === "cmd") {
      const id = el.dataset.id;
      edit(() => {
        state.commands = deck().map(c => c.id).filter(c => c !== id);
        if (el.checked && state.commands.length < DECK_SIZE) state.commands.push(id);
      });
      return;
    }
    const sel = state.units[+el.dataset.i];
    if (act === "comp") edit(() => { sel.comp = +el.value; });
    if (act === "swap") edit(() => { sel.swaps = sel.swaps || {}; sel.swaps[el.dataset.o] = +el.value; });
    if (act === "add") edit(() => { sel.adds = sel.adds || {}; sel.adds[el.dataset.o] = el.checked; });
    if (act === "char") edit(() => { sel.chars = sel.chars || {}; sel.chars[el.dataset.g] = el.value || null; });
  });

  render();
})();

(function () {
  var v = document.getElementById("ver");
  if (v && window.NHB_DATA) v.textContent = "Syrrhēxis List Builder v" + window.NHB_DATA.meta.version + " · data synced " + window.NHB_DATA.meta.synced;
})();
