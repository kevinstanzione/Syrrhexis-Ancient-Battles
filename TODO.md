# To do

## Rulebook
- Collision: stays a Strength 5 strike, and a rank missing any models gives no Collision hits (decided 2026-11-03). Ideas not taken for now: count half-full ranks; Strength equal to the rank's width.
- Fleeing from Melee (shelved 2026-11-03, not rejected): Parting Blows (each enemy in contact makes a free front-rank strike at +1 Strength before the Flee move, no Collision, no strike back), or a pursuit move for the winner.
  - Watch in playtesting: Collision applies every round, so deep blocks may grind down Open Order units.


### Rulebook corrections (Kevin's read-through, 2026-11-04)
Rules (agreed, do first):
- Aim: reduce Cover by one step (same as Volley) instead of ignoring Light Cover. Rulebook and builder rules text.
- Shooting modifiers table: split cover into three rows (Light Cover -1 Accuracy; Cover -2; Heavy Cover -2 and lose half the attacks). Aim row "+1 Accuracy, reduces Cover by one step"; Volley row "-1 Accuracy, reduces Cover by one step".
- Shooting Modifiers section: rewrite. Name the two bare conditions, Close Range (target within half max range, +1 Accuracy) and On the Move (attacker moved, -1 Accuracy). Everything else points to its named rule. Rows become e.g. "Defender has Evasion | -1 Accuracy (another -1 for Cumbersome weapons)", "Attacker uses a Throwing Weapon | Ignore On the Move". Drop "special ability" wording (Volley, Aim, Throwing Weapon) and link each name to its rule.
- Cohesion: Standard Move has the Open Order cohesion diagram but no rule text for it, and nothing says what happens to a model out of Cohesion. Find where Cohesion is defined, add the rule, decide the stray-model rule with Kevin.
- Melee definition (decided 2026-11-04, Option 1): every unit joined by base contact with an enemy is one Melee (chains merge). A unit may only attack enemies in base contact with it, dividing its attacks between them. If units leave and a Melee splits into separate groups, each group becomes its own Melee. Still one winner and one Combat Move per Melee.
- Combat Moves when boxed in (decided 2026-11-04): a unit making or receiving a Combat Move stops if it would touch an enemy unit, pass through a friendly unit or impassable terrain, or leave the battlefield (never pushed off the board), so it may move less than 2” or not at all; still in contact means still Locked in Combat. A Pushed unit that cannot move at least 1” gains 2 Break Tokens.
- Rename the "Shooting or Rallying" step (later). Options: Command Step, Action Step, Missile Step, Volley and Rally Step.
Text and layout:
- Armor Save table: make the Shooting and Melee copies identical: header "Armor Value", columns 0, 1, 2, 3, 4, ≥5; saves –, 6+, 5+, 4+, 3+, 2+. (Melee currently says "Total Armor" and runs to 8; Shooting ends at ≥6.)
- Melee Wounds (Strength) modifiers table: move "Attacker has Run Token | -1 Strength" up to just above "Defender has Flee Token". House style for modifier tables: penalties first, in order of severity, then bonuses. Check the other modifier tables (including the reworked Shooting table) follow it.
- Melee Hits modifiers table: add a First Blood row, "Attacker has taken Damage earlier in this Melee (First Blood) | -1 attack per model's worth of Damage", linked to the First Blood paragraph.
- Make every "see X" cross-reference a real link (Toughness, Great Toughness, Command cards and so on).
- Evasion is the only Unit Type ability with flavour text; remove it to match the rest.
- Body Armor table: style "Unwieldy (1)" on Heavy Armor as a proper rule callout.
- Game Round Sequence, Activation Phase: in the Shooting or Rallying step the description after the hyphen is bold; only the step name should be.
- Game Round Sequence: End of the Round is pushed to the top of the next column; keep it under the Morale Phase.
Diagrams:
- Battlefield: "Blue/Red deployment zone" labels overlap the Major Terrain strip lines.
- Turn Template: doesn't match the rule (template corner at the tray's front corner, front edge flush to one arm); the turn goes the wrong way and the dashed "before" box is wrong. Reread the rule and redraw.
- Charge Arcs: "Defender: Hoplîtai, 4 ranks of 5" overlaps the dashed lines; shrink or move down.
- Path and Bumping: move "Skirmishers" a little right and down, off the dotted line.
- Charge Fails: move "Crumbled Ruins (Stony Plain)" left off the dotted line; make the "need 7”" bar dashed.
- Pile In, Closed vs Closed: centre panel step 1 curved arrowhead is drawn wrong.
- Pile In, Open Order: add a dot on the attacker panel's Leader, to match the defender panel's Focus dot.
- Who Attacks in Melee (reach diagram): name Collision in the panels, e.g. "5 attacks + 3 Collision Hits" instead of "+ 3 Hits", and make the +1 rank markers read as Collision.
- Break Tokens diagram: text already shows the new pass rule (remove 1, or all if not in combat and no Damage). Make it visual: show the Pass outcome as the tray with 2 of its 3 Break Tokens left (one crossed out), and the out-of-combat case clearing all three.
- Firing Angle: "Target A / in the arc" overlaps the blue dotted line; move down.

## Terrain bases (3D print)
- Generator done: terrain/make_bases.py writes exact-size plates to terrain/stl (Monument 2x2", Watchtower 3x3", wall 8x1/2" or two 4" halves, Rolling Wagons 40x60mm, Flaming Pigs 25mm round). Large terrain and Major Terrain use felt, so no bases.
- Monument model: first Meshy image done (stele on stepped plinth with altar). Scale so the plinth fits inside 50.8 mm.
- Meshy models done 2026-11-03: Monument, Muriq-Tidnim wall section, timber Watchtower. Walls are chunky and untextured on the back: mirror the textured front onto the back and thin to about 12 mm deep. Scale each wall section to 4" long. Watchtower footing is rectangular: fit the long side to about 74 mm.
- All terrain models done 2026-11-04 (Phocian Wall, Field Wall, Rolling Wagons, Flaming Pig added). Printing in resin; the slicer adds rafts. Left: mirror wall backs.
- Models for the bases come from ChatGPT images run through Meshy (Monument prompt drafted 2026-11-03: Bronze Age victory stele).

## Playtest watch
- Breaking (changed 2026-11-03): passing removes 1 Break Token, or all if the unit was not Locked in Combat and took no Damage. Watch how often units break, especially at Mass Casualties (2 tokens every Activation Phase).

## Sumerian Kingdom
- Review changes made 2026-11-03 in the army book draft (tools/army-book/drafts/sumer.json): Eren 2x5, Rear Captain, Šukur Accuracy 6; Šub-lugal characters; Lú-daluš Ranger Captain; Gír removed from Lú-ĝešbu, Eren, Šub-lugal, both vehicles and Martu; Aga-ús Retinue (Army Standard Bearer, Ha-zi-in 4/5/5); Martu Ilar base with Ĝešbu upgrade; new card The God's Steward.
- Points after the review, to playtest: Eren 11 -> 12, Aga-ús Retinue 15 -> 16, Martu 12 -> 11; others unchanged.
- Added 2026-11-03: Gigir-tur Straddle Car rule (1 Unit Strength per Kunga, car = 5); Shields of Lagash Command card (ongoing advance under shields). Both in the army book draft; plan doc not yet updated.
- Gigir-tur: gained Feign Retreat 2026-11-03, stays 33 pts (Straddle Car took its shock role; Feign Retreat makes it a harasser).
- Command cards (draft): The God's Steward, Shields of Lagash, Battle Net of Ningirsu, Muriq-Tidnim.
- Eren rule named Guru (Sumerian "shield", ePSD2 guru) on 2026-11-03. Sumer moved into the builder in 0.14.0 (2026-11-04); intro rewritten, waiting on Kevin's read. Šukur Length 8 confirmed.

## Armies of Alexander (paused)
- Draft unit list: Pezhétairoi (sarissa with Reach (2)), Hypaspistaí, Agēma Retinue (foot), Argyráspides, Hetaîroi, Basilikḕ Ílē Retinue (mounted), Thessaloì Hippeîs, Pródromoi, Agriânes, Krêtes Toxótai, Thureophóroi, Eléphantes, Oxybeleîs. Extras: scythed chariots, Katáphraktoi, Tarantînoi.
- Add a Dahae / Scythian horse archer unit (hippotoxótai) with Feign Retreat and Parthian Shot.

## Siege expansion (future)
- Core of the expansion: destructible terrain and fortifications (walls, gates, towers) that can be damaged and breached.
- Plan: general-purpose siege weapons available to every army, plus a few army-specific ones.
- Add sapper units (undermining walls, digging, fire under the foundations).
- Elephants battering gates and walls (Indian *nagarayanam*) as a siege rule rather than a mounted engine.
- Mauryan Jāmadagnya bolt thrower (named in the Arthashastra; thinly attested). Siege only, no war engines in standard games.
- Qin: traction trebuchets, bed crossbows, linked-crossbow cart, cloud ladders and rams. Siege only, no war engines in standard games; Qin field identity is massed crossbow infantry.
- Neo-Assyrian: wheeled rams with turrets, siege ladders and sappers. Siege only, no war engines in standard games.
- Roman plutei: wheeled mantlets screening siege engines and crews (Pavise-style protection for war engines).

## Army ideas
- Hannibal's Forces: Iberian / Celtiberian cavalry with Feign Retreat (no Parthian Shot). Tarantînoi in the Alexander list also get Feign Retreat.
- Shieldwall candidates: Sumerian heavy phalanx (instead of Phalanx), a Germanic-style spear warband for European Barbarians, Libyan heavy infantry for Hannibal's Forces.
- Neo-Assyrian chariots: a lighter regular chariot (2 horses, 2–3 crew) and a separate heavy royal retinue chariot (4 horses, 4 crew plus parasol), like the Persian split. Other armies' retinue chariots, if any, use the same vehicle as their regular chariots.
- Pavise candidates: Neo-Assyrian archer and shield-bearer unit (Mixed Unit like the Sparabārā), Mauryan foot archers with tall ox-hide shields.

## Art spreads (future)
- Spears spread done: art/spears/ (21 images, build_spread.py, spears_spread.png/.pdf). Placement in the rulebook still to decide.
- Next spreads: chariots, hand weapons, shields, armor, standards, musical instruments.
- Chariots (empty, strict side profile facing right, pole and yoke but no horses, harness or crew): Anše.Kur.Ra Ḫatti, Anše.Kur.Ra Mittanni, Raθā, Raθā-Dāça, Raθā Retinue (royal), Egyptian, Assyrian (light), Assyrian royal (heavy 4-horse with parasol), Sumerian battle wagon, Sumerian straddle car, Celtic, Qin, Mauryan. Prompts were drafted in chat on 2026-10-28; same style prompt as the spears.
- Style for all spreads: black and white ink, fine pen linework with cross-hatching, plain white background, no text; one item per image; avoid the words "butt" and "shaft" (ChatGPT's filter flags them), use "ferrule"/"end spike" and "pole".

- Hittite unit names: Giš.Ban Ḫatti and Šukur.Tur Ḫatti are constructed ("bows/javelins of Hatti", after the way chariotry is written as "horses"); the others are attested terms or real peoples.
