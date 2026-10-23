// NHB calculations. Pure functions; no DOM. Shared by the page and the test script.
window.NHB = (function () {
  const ARMOR_CATALOG = {
    "Light Armor": { v: 1, text: "" },
    "Medium Armor": { v: 2, runflee: -1, text: "-1 Armor while the unit has a Run or Flee Action Token" },
    "Heavy Armor": { v: 3, runflee: -1, move: -1, text: "Extra -1” penalty to Turning. -1 Armor while the unit has a Run or Flee Action Token" },
    "Buckler": { v: 0, melee: 1, text: "+1 Armor against Melee attacks" },
    "Shield": { v: 1, hold: 1, text: "+1 Armor while the unit has a Hold Action Token" },
    "Heavy Shield": { v: 2, hold: 1, runflee: -1, move: -1, text: "+1 Armor while the unit has a Hold Action Token. -1 Armor while the unit has a Run or Flee Action Token" },
    "Barding": { v: 1, move: -1, text: "Horse armor. Cavalry only" }
  };
  const TYPE_ARMOR = { "Cavalry": 1, "Light Cavalry": 1, "Skirmishing Cavalry": 1, "Chariot": 1 };
  const CLOSED_ONLY = ["Warrior", "Cavalry", "Chariot", "Elephant"];
  const RETINUE = ["Commander", "Army Musician", "Army Standard Bearer"];

  // Army Morale bonus per character, from the rulebook. T = model Training.
  const CHAR_MORALE = {
    "Lead Captain": t => t, "Rear Captain": t => t, "Lord": t => 3 * t,
    "Standard Bearer": t => 2 * t, "Army Standard Bearer": t => 4 * t,
    "Army Musician": t => 2 * t, "Commander": t => 3 * t,
    "Musician": () => 3, "Birdmaster": () => 1, "Bowmaster": () => 1,
    "Houndmaster": () => 1, "Raider Captain": () => 1, "Ranger Captain": () => 2,
    "Shaman": () => 3, "Taskmaster": () => 0, "Tribal Leader": () => 2,
    "Volleymaster": () => 2
  };
  const CHAR_GRANTS = {
    "Lord": ["Noble"], "Raider Captain": ["Feign Charge"], "Ranger Captain": ["Surefooted"],
    "Shaman": ["Frenzy"], "Volleymaster": ["Volley"], "Bowmaster": ["Aim"],
    "Tribal Leader": ["Noble", "Mercenary"]
  };

  const isOpen = u => !!u.range;
  const saveFor = v => v <= 0 ? "–" : v === 1 ? "6+" : v === 2 ? "5+" : v === 3 ? "4+" : v === 4 ? "3+" : "2+";

  function models(u, sel) {
    if (u.range) return Math.min(u.range[1], Math.max(u.range[0], sel.count || u.range[0]));
    const c = u.comps[sel.comp || 0];
    return c[0] * c[1];
  }
  function ranksFiles(u, sel) {
    if (u.range) return null;
    const c = u.comps[sel.comp || 0];
    return { ranks: c[0], files: c[1] };
  }

  function chosenChars(u, sel) {
    const out = [];
    (u.chars || []).forEach((g, i) => {
      const name = sel.chars && sel.chars[i];
      if (!name) return;
      const hit = g.one.find(o => o[0] === name);
      if (hit) out.push({ name: hit[0], cost: hit[1], note: g.note || "" });
    });
    return out;
  }

  function loadout(u, sel) {
    let weapons = u.equip.slice();
    let shield = u.shield, body = u.body, barding = u.barding || null, crewPlus = 0, perModel = u.points || 0, gearOverride = null;
    const opts = u.opts || [];
    opts.forEach((o, i) => {
      if (o.kind !== "swap") return;
      const ch = o.choices[(sel.swaps && sel.swaps[i]) || 0];
      if (ch.w) weapons = ch.w.slice();
      if ("shield" in ch) shield = ch.shield;
      if ("body" in ch) body = ch.body;
      if ("barding" in ch) barding = ch.barding;
      if (ch.gear) gearOverride = ch.gear;
      perModel += ch.c || 0;
    });
    const disabled = {};
    opts.forEach((o, i) => {
      if (o.kind !== "add") return;
      if (o.unlessWeapon && weapons.includes(o.unlessWeapon)) { disabled[i] = true; return; }
      if (!(sel.adds && sel.adds[i])) return;
      if (o.w) o.w.forEach(w => { if (!weapons.includes(w)) weapons.push(w); });
      if (o.shield) shield = o.shield;
      if (o.body) body = o.body;
      if (o.barding) barding = o.barding;
      if (o.crewPlus) crewPlus += o.crewPlus;
      perModel += o.c || 0;
    });
    // Mixed Units: some models take an option. Cost is per model taking it; the unit's
    // armor uses the most common save, so a shield counts only if most models carry it.
    const n = models(u, sel);
    let countCost = 0; const mixed = []; const groupUse = {};
    opts.forEach((o, i) => {
      if (o.kind !== "count") return;
      const k = Math.max(0, Math.min(n, (sel.counts && sel.counts[i]) || 0));
      if (!k) return;
      countCost += k * (o.c || 0);
      mixed.push({ label: o.label, n: k });
      if (o.group) groupUse[o.group] = (groupUse[o.group] || 0) + k;
      if (o.w) o.w.forEach(w => { if (!weapons.includes(w)) weapons.push(w); });
      if (o.shield && k * 2 > n) shield = o.shield;
    });
    opts.forEach((o, i) => {
      if (o.kind !== "count" || !o.replaces) return;
      const used = o.group ? (groupUse[o.group] || 0) : ((sel.counts && sel.counts[i]) || 0);
      if (used >= n) weapons = weapons.filter(w => w !== o.replaces);
    });
    const gear = (gearOverride || u.gear || []).filter(g => !weapons.includes(g));
    return { weapons, gear, shield, body, barding, crewPlus, perModel, disabled, countCost, mixed, groupUse };
  }

  function armorDef(u, name) {
    if (!name) return null;
    return Object.assign({ name, v: 0 }, ARMOR_CATALOG[name] || {}, (u.armors || {})[name] || {});
  }

  function armorCalc(u, body, shield, barding) {
    if (u.type === "Elephant") {
      return { value: 3, save: saveFor(3), melee: 3, hold: 0, runflee: 0, notes: ["Great Toughness: 3 Armor, ignores mahout and crew armor"] };
    }
    const parts = [armorDef(u, body), armorDef(u, shield), armorDef(u, barding)].filter(Boolean);
    const mod = TYPE_ARMOR[u.type] || 0;
    let value = mod, melee = 0, hold = 0, runflee = 0;
    const notes = [];
    let vs6 = 0;
    parts.forEach(p => {
      value += p.v || 0; melee += p.melee || 0; hold += p.hold || 0; runflee += p.runflee || 0;
      if (p.vsStr) notes.push(p.vsStr);
      vs6 += p.vs6 || 0;
    });
    if (u.shorn && vs6 > 1) vs6 = 1;   // Shorn Ones: only 1 Armor lost with both pieces
    if (vs6) notes.unshift(`Against Strength 6+ weapons: Armor ${Math.max(0, value - vs6)} (${saveFor(value - vs6)})`);
    if (u.type === "Chariot") notes.push("Protected Platform: +1, uses crew armor");
    else if (mod) notes.push("Toughness: +1 (Cavalry)");
    return { value, save: saveFor(value), melee: value + melee, hold, runflee, notes, parts };
  }

  function armor(u, sel, lo) {
    lo = lo || loadout(u, sel);
    if (u.mixed) {
      // Mixed Unit: use the most common save, or the weaker if tied.
      const rf = ranksFiles(u, sel);
      const front = armorCalc(u, lo.body, u.mixed.front.shield, lo.barding);
      const rest = armorCalc(u, lo.body, u.mixed.rest.shield, lo.barding);
      const frontN = rf.files, restN = rf.files * (rf.ranks - 1);
      const useFront = frontN > restN || (frontN === restN && front.value < rest.value);
      if (u.frontArcArmor) {
        // Wall of Spara: the front arc uses the 1st Rank's armor; other arcs use the most common save.
        const other = useFront ? front : rest;
        front.mixedNote = `Front arc uses the ${u.mixed.front.label}: Armor ${front.value} (${front.save}). Flanks and rear: Armor ${other.value} (${other.save}).`;
        return front;
      }
      const main = useFront ? front : rest;
      main.mixedNote = `${u.mixed.front.label}: Armor ${front.value} (${front.save}); ${u.mixed.rest.label}: Armor ${rest.value} (${rest.save}). Unit uses the most common save.`;
      return main;
    }
    return armorCalc(u, lo.body, lo.shield, lo.barding);
  }

  function moveValue(u, lo) {
    // Profile Move is unmodified; every armor and shield Move penalty applies, default gear included.
    // Mixed units move as one tray, so the slowest loadout sets the Move.
    let m = u.move;
    const shield = u.mixed ? (u.mixed.front.shield || u.mixed.rest.shield) : lo.shield;
    if (lo.body) m += (armorDef(u, lo.body).move || 0);
    if (shield) m += (armorDef(u, shield).move || 0);
    if (lo.barding) m += (armorDef(u, lo.barding).move || 0);
    // Unwieldy (X): Open Order units lose X Move (Closed Order pay it when turning instead).
    if (isOpen(u)) {
      let x = 0;
      (lo.weapons || []).forEach(w => {
        const t = (u.weapons && u.weapons[w] && u.weapons[w][3]) || "";
        const mm = t.match(/Unwieldy \((\d+)\)/);
        if (mm && (!/With Shield/.test(t) || shield)) x = Math.max(x, +mm[1]);
      });
      m -= x;
    }
    return m;
  }

  function health(u, sel, lo) {
    const n = models(u, sel);
    let hp;
    if (u.type === "Chariot") { const c = u.crew; hp = n * (c.driver + c.crew + c.horses); }
    else if (u.type === "Elephant") hp = 6 * n;
    else if (/Warmachine/.test(u.type)) hp = n;
    else hp = n;
    return {
      hp,
      weakened: Math.floor(hp * 0.75),
      half: Math.floor(hp * 0.5),
      mass: Math.floor(hp * 0.25),
      removeAtHalf: Math.floor(n / 2)
    };
  }

  function activeRules(u, sel) {
    const chars = chosenChars(u, sel).map(c => c.name);
    let rules = (u.rules || []).slice();
    chars.forEach(c => (CHAR_GRANTS[c] || []).forEach(r => { if (!rules.includes(r)) rules.push(r); }));
    if (chars.includes("Taskmaster") || chars.includes("Tribal Leader")) rules = rules.filter(r => r !== "Levy");
    return rules;
  }

  function unitStrength(u, sel, lo) {
    lo = lo || loadout(u, sel);
    const n = models(u, sel);
    const levy = activeRules(u, sel).includes("Levy");
    const rf = ranksFiles(u, sel);
    if (u.type === "Chariot") { const c = u.crew; return n * (c.driver + c.crew + 2 * c.horses); }
    if (u.type === "Elephant") { const c = u.crew; return n * (c.mahout + c.crew + lo.crewPlus + 12); }
    if (/Warmachine/.test(u.type)) return n + (u.engineUS || 3);
    const per = /Cavalry/.test(u.type) ? 3 : 1;
    const riders = /Cavalry/.test(u.type) ? n * (lo.crewPlus || 0) : 0; // Camel Riders: +1 per extra rider
    if (!levy) return n * per + riders;
    if (rf) return (rf.ranks > 1 ? n - rf.files : n) * per; // Closed Order Levy: ignore rear rank (a single rank still counts)
    return Math.ceil(n * per / 2);                  // Open Order Levy: half, rounded up
  }

  // Light units choose Closed or Open Order at deployment; Levy changes their Unit Strength between the two.
  function unitStrengthOpen(u, sel) {
    if (!/^Light (Warrior|Cavalry)/.test(u.type)) return null;
    const n = models(u, sel), per = /Cavalry/.test(u.type) ? 3 : 1;
    return activeRules(u, sel).includes("Levy") ? Math.ceil(n * per / 2) : n * per;
  }

  function points(u, sel, lo) {
    lo = lo || loadout(u, sel);
    if (u.points == null) return null;
    return lo.perModel * models(u, sel) + (lo.countCost || 0) + (u.engine || 0) + chosenChars(u, sel).reduce((s, c) => s + (c.cost || 0), 0);
  }

  // Army Morale counts the men: drivers, mahouts and crewmen for Chariots and Elephants; horses and elephants don't count.
  function moraleModels(u, sel) {
    const n = models(u, sel);
    if (u.type === "Chariot") return n * (u.crew.driver + u.crew.crew);
    if (u.type === "Elephant") return n * (u.crew.mahout + u.crew.crew + loadout(u, sel).crewPlus);
    if (/Cavalry/.test(u.type)) return n * (1 + (loadout(u, sel).crewPlus || 0)); // Camel Riders: extra riders count
    return n;
  }
  function morale(u, sel) {
    const t = u.training, n = moraleModels(u, sel);
    const base = t * n;
    const bonus = chosenChars(u, sel).reduce((s, c) => s + (CHAR_MORALE[c.name] ? CHAR_MORALE[c.name](t) : 0), 0);
    return { base, bonus, total: base + bonus };
  }

  function armyMorale(total) {
    return {
      total,
      unease: Math.floor(total * 0.75),
      panic: Math.floor(total * 0.5),
      massPanic: Math.floor(total * 0.25)
    };
  }

  function warnings(u, sel) {
    const w = [];
    (u.chars || []).forEach((g, i) => {
      if (g.req && !(sel.chars && sel.chars[i])) w.push(`Must take ${g.one.map(o => o[0]).join(" or ")}`);
    });
    const lo = loadout(u, sel), n = models(u, sel);
    Object.entries(lo.groupUse || {}).forEach(([g, k]) => { if (k > n) w.push(`Only ${n} models can swap weapons (${k} chosen)`); });
    return w;
  }

  // Mercenary slots come from Command cards: one slot per unit a card allows, optionally limited to some unit ids.
  // mercFit matches the chosen mercenary units to those slots (a small bipartite matching), so a unit only
  // counts if some card in the deck allows it.
  function mercSlots(cards) {
    const slots = [];
    (cards || []).forEach(c => { for (let k = 0; k < (c.mercs || 0); k++) slots.push({ card: c.id, name: c.name, units: c.mercUnits || null }); });
    return slots;
  }
  function mercFit(slots, ids) {
    const owner = slots.map(() => -1);
    const can = (s, id) => !slots[s].units || slots[s].units.includes(id);
    function place(i, seen) {
      for (let s = 0; s < slots.length; s++) {
        if (seen[s] || !can(s, ids[i])) continue;
        seen[s] = true;
        if (owner[s] < 0 || place(owner[s], seen)) { owner[s] = i; return true; }
      }
      return false;
    }
    const unplaced = [];
    ids.forEach((id, i) => { if (!place(i, [])) unplaced.push(id); });
    return { ok: unplaced.length === 0, unplaced, owner };
  }

  // opts.pools: extra unit lists by source (e.g. { mercs: ... }); opts.mercSlots: mercenary slots from the Command deck (see mercSlots).
  function summarize(army, list, limit, opts) {
    opts = opts || {};
    const pools = opts.pools || {};
    let pts = 0, morale = 0;
    list = list.filter(sel => ((sel.src && pools[sel.src]) || army).units.some(x => x.id === sel.unitId));
    const units = list.map(sel => {
      const u = ((sel.src && pools[sel.src]) || army).units.find(x => x.id === sel.unitId);
      const lo = loadout(u, sel);
      const p = points(u, sel, lo) || 0;
      const m = NHB.morale(u, sel);
      pts += p; morale += m.total;
      return { u, sel, lo, pts: p, morale: m, armor: armor(u, sel, lo), health: health(u, sel, lo), us: unitStrength(u, sel, lo), usOpen: unitStrengthOpen(u, sel), move: moveValue(u, lo), rules: activeRules(u, sel), chars: chosenChars(u, sel), warn: warnings(u, sel) };
    });
    const retCount = {};
    units.forEach(x => x.chars.forEach(c => { if (RETINUE.includes(c.name)) retCount[c.name] = (retCount[c.name] || 0) + 1; }));
    const armyWarn = Object.keys(retCount).filter(k => retCount[k] > 1).map(k => `Only one ${k} allowed per army (you have ${retCount[k]})`);
    const mercIds = list.filter(s => s.src === "mercs").map(s => s.unitId), slots = opts.mercSlots || [];
    if (mercIds.length) {
      const fit = mercFit(slots, mercIds), mercName = id => ((pools.mercs || { units: [] }).units.find(x => x.id === id) || { name: id }).name;
      if (!slots.length) armyWarn.push(`Mercenary units need a mercenary Command card in your deck (you have ${mercIds.length})`);
      else if (mercIds.length > slots.length) armyWarn.push(`Your Command deck allows ${slots.length} mercenary unit${slots.length > 1 ? "s" : ""} (you have ${mercIds.length})`);
      else if (!fit.ok) armyWarn.push(`No mercenary Command card in your deck has room for ${[...new Set(fit.unplaced.map(mercName))].join(", ")}`);
    }
    if (pts > limit) armyWarn.unshift(`Over the limit by ${pts - limit} points`);
    const under = Math.max(0, limit - pts);
    return { units, pts, limit, under, bid: Math.min(25, under), morale: armyMorale(morale), armyWarn };
  }

  const charMorale = (name, t) => CHAR_MORALE[name] ? CHAR_MORALE[name](t) : 0;
  return { mercSlots, mercFit, charMorale, armorDef, models, ranksFiles, loadout, armor, health, unitStrength, points, morale, armyMorale, moveValue, activeRules, chosenChars, warnings, summarize, saveFor, isOpen, CLOSED_ONLY, RETINUE };
})();
if (typeof module !== "undefined") module.exports = NHB;
