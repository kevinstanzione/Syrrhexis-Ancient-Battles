# To do

## Rulebook
- Collision: stays a Strength 5 strike, and a rank missing any models gives no Collision hits (decided 2026-11-03). Ideas not taken for now: count half-full ranks; Strength equal to the rank's width.
- Fleeing from Melee (shelved 2026-11-03, not rejected): Parting Blows (each enemy in contact makes a free front-rank strike at +1 Strength before the Flee move, no Collision, no strike back), or a pursuit move for the winner.
  - Watch in playtesting: Collision applies every round, so deep blocks may grind down Open Order units.


### Rulebook corrections (Kevin's read-through, 2026-11-04)
Done 2026-11-05: First Blood row, Strength table order, matching Armor Save tables; Walls diagram, Who Attacks Collision labels, Break Tokens visual, Scout and Ambush label; Aim and the Shooting Modifiers rework, "see X" links, Evasion flavour, Unwieldy styling, Activation Phase bold, End of the Round placement, Cohesion note, Stony Plain Strength 6, and the diagram fixes (Battlefield, Turning, Charge Arcs, Path and Bumping, Charge Fails, both Pile In, Firing Angle).
Still to do:

## Tokens and templates
- Design Strength, Accuracy and Training (leadership) Penalty tokens (noted 2026-11-11). Splitting a Unit copies the parent's tokens onto every new unit, so a set needs enough of each.
- Corner Marker: a small 90° template that marks a tray's footprint for About Face (added 2026-11-11). Make an STL to go with the Turn Template.

## Terrain bases (3D print)
- Generator done: terrain/make_bases.py writes exact-size plates to terrain/stl (Monument 2x2", Watchtower 3x3", wall 8x1/2" or two 4" halves, Rolling Wagons 40x60mm, Flaming Pigs 25mm round). Large terrain and Major Terrain use felt, so no bases.
- Monument model: first Meshy image done (stele on stepped plinth with altar). Scale so the plinth fits inside 50.8 mm.
- Meshy models done 2026-11-03: Monument, Muriq-Tidnim wall section, timber Watchtower. Walls are chunky and untextured on the back: mirror the textured front onto the back and thin to about 12 mm deep. Scale each wall section to 4" long. Watchtower footing is rectangular: fit the long side to about 74 mm.
- All terrain models done 2026-11-04 (Phocian Wall, Field Wall, Rolling Wagons, Flaming Pig added). Printing in resin; the slicer adds rafts. Left: mirror wall backs.
- Models for the bases come from ChatGPT images run through Meshy (Monument prompt drafted 2026-11-03: Bronze Age victory stele).

## Playtest watch
- Breaking (changed 2026-11-03): passing removes 1 Break Token, or all if the unit was not Locked in Combat and took no Damage. Watch how often units break, especially at Mass Casualties (2 tokens every Activation Phase).

## Sumerian City-States
- Review changes made 2026-11-03 in the army book draft (tools/army-book/drafts/sumer.json): Eren 2x5, Rear Captain, Šukur Accuracy 6; Šub-lugal characters; Lú-daluš Ranger Captain; Gír removed from Lú-ĝešbu, Eren, Šub-lugal, both vehicles and Martu; Aga-ús Retinue (Army Standard Bearer, Ha-zi-in 4/5/5); Martu Ilar base with Ĝešbu upgrade; new card The God's Steward.
- Points after the review, to playtest: Eren 11 -> 12, Aga-ús Retinue 15 -> 16, Martu 12 -> 11; others unchanged.
- Added 2026-11-03: Gigir-tur Straddle Car rule (1 Unit Strength per Kunga, car = 5); Shields of Lagash Command card (ongoing advance under shields). Both in the army book draft; plan doc not yet updated.
- Gigir-tur: gained Feign Retreat 2026-11-03, stays 33 pts (Straddle Car took its shock role; Feign Retreat makes it a harasser).
- Command cards (draft): The God's Steward, Shields of Lagash, Battle Net of Ningirsu, Muriq-Tidnim.
- Eren rule named Guru (Sumerian "shield", ePSD2 guru) on 2026-11-03. Sumer moved into the builder in 0.14.0 (2026-11-04); intro rewritten, waiting on Kevin's read. Renamed from Sumerian Kingdom in 0.18.0. Plan doc still needs syncing (Guru, Straddle Car, Feign Retreat, points, name). Šukur Length 8 confirmed.

## Armies of Alexander
- Built in 0.23.0 (13 units); 6 Command cards as of 0.25.0 (Émbolon, Lord of Asia, Oblique Advance, Aristander's Eagle, Ipsus, Synaspismós). Playtest pricing, especially Pezhétairoi (15), Argyráspides (19), Eléphantes (100) and Thureophóroi (12).
- Idea for later: Ptolemaic African forest elephants (smaller, Elephant Strength 7, cheaper). Conflicts with the no-negative-cost rule, so it would need its own profile.
- Builder: units taken through Lord of Asia still show "Mercenary ·" on their card in the editor (the printed list drops the rule correctly).

## King of Kings rework (Persia, planned)
- Pulls units from other army lists, not just the mercenary pool: 4 from Supplemental Mercenaries (Arabian Camel Riders, Greek Hoplites, Scythian Archers, Cretan Archers) + 4 from other lists (Indian elephants from the Mauryan list, replacing the Pīrū; Kushite archers from the Kush list; Egyptians; Assyrians). Borrowed units gain Mercenary. No surcharge for now. Still to confirm: still 2 units per card? Elephants come from the Mauryan (Indian) list, not the Successor list: no tower.
- Starter lists saved in tools/army-book/drafts (not in the builder or Army Book yet): mauryan.json holds the Pīrū (Old Persian names to rename to Sanskrit), kush.json holds the Kushite Archers (English name to replace). Both copies drop the Mercenary rule. The live Persian Pīrū and mercenary Kushite Archers stay until the King of Kings rework goes live.
- Kushite Archers leave the general mercenary pool once the Kush list exists. The full card waits on the Mauryan, Kush, Egypt and Assyria lists.

## Rules to decide
- Unwieldy (X) for Open Order units (leaning yes): keep -X Move and add -X Accuracy with the Unwieldy weapon. Raised by the Pródromoi riding 8-wide in Open Order. If adopted, give the Carduchian Aġeġn bow +1 base Accuracy so they stay where they are.

## Future army notes
- **Mauryan Empire — Gajādhyakṣa** (Superintendent of Elephants, from the Arthaśāstra), Mauryan Retinue units only: this unit may Rally friendly Elephant units within 12” as if it were an Elephant unit; 18” if it includes a Commander. A Commander is not required.
- **Hannibal's Forces — Mallet and Chisel** (on the Carthaginian elephant unit itself; Livy on Hasdrubal at the Metaurus): when this unit would become Furious, you may instead destroy it. You lose only half its Army Morale Contribution.

- **Dynastic Egypt — Inspiring** (unit rule for Pharaoh's retinue, "divine king"): during the Combat Phase, this unit may remove its Hold token to give one friendly unit within 12” +1 Accuracy. Keep Aristander's Eagle (Alexander) a different effect.
- **Hannibal's Forces — Backstabbers** (unit rule or Carthage Command card, undecided): after this unit charges an Open Order unit without a Hold token, or a Closed Order unit without a Hold token in its flank or rear, the defender gains a flat Break Token count — 1 for Closed Order and 2 for Open Order, or just 1 for both. Flat count (not per 5 models) because it stacks with Exposed Flanks.
- **European Barbarians — Flanker** (needs a better name): +1 Accuracy while in combat alongside at least one other friendly unit. Always-on infantry rule for warbands.
- **Neo-Assyrian Empire — Spearhead** (was "Vanguard"; that name is taken by a generic card): while this unit has a Charge token, friendly units that begin their activation within 12” and declare a Charge gain +1 Move (Warriors) or +2 Move (Cavalry, Chariots, Elephants). Unit rule for the royal chariot retinue.

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
- Pencil scene art: 7 army openers done (art/illustrations), plus card art for The Eclipse and Crumbled Ruins in the Army Book's generic cards. Army Book images get a torn-paper edge at build time.
- Mercenary art for the Army Book (units that need showing exactly): Arabian Camel Riders, Đông Sơn Axemen, Lydian Houndsmen. Familiar-looking mercenaries (Cataphracts, maybe Galatians) go in the core rulebook as splash art instead.
- Rulebook spot art (done, 0.3.4): cataphract (Charge Movement), Cretan archer (Shooting), Iberian (Melee Hits), centurion (Commander), Aztec conch player (Musician), Persian standard bearer (Standard Bearer). Square, no background, torn edge without a corner, full column width.
- Next rulebook spot art, for the Special Rules chapter: Carduchian Tribesmen (tall Aġeġn bow; place by Unwieldy (X) or Surefooted) and Thracian Warriors (two-handed rhomphaia; place by Sunder (X)). Prompts not written yet.
- More mercenary spot art ideas for Special Rules: Sea People Raiders by Ambush (leaping from beached ships, Medinet Habu look), Numidian Javelineers by Feign Retreat, Galatian Warriors by Frenzy. Balearic Slingers could go in Unit Types (Skirmishing Warriors).
- Army opener art for the 7 remaining armies (Egypt, Assyria, Kush, Mauryan, Qin, Hannibal's Forces, European Barbarians): make at least 4 of them portrait rather than landscape, so the Army Book openers don't all look uniform (only Rome's testudo is portrait so far). Portrait openers sit at the top of the first text column.
- Deployment section: a wide piece of the Persian army forming up with King of Kings contingents side by side (e.g. Greek hoplite, Arabian camel rider, Scythian horse archer, with a Persian officer directing). Ambitious: keep to 3 or 4 large figures.
- Unit Types chapter (Warmachines section): Roman carroballista spot art, after Trajan's Column (mule cart with a bolt thrower and two crew).
- Spears spread done: art/spears/ (21 images, build_spread.py, spears_spread.png/.pdf). Placement in the rulebook still to decide.
- Next spreads: chariots, hand weapons, shields, armor, standards, musical instruments.
- Chariots (empty, strict side profile facing right, pole and yoke but no horses, harness or crew): Anše.Kur.Ra Ḫatti, Anše.Kur.Ra Mittanni, Raθā, Raθā-Dāça, Raθā Retinue (royal), Egyptian, Assyrian (light), Assyrian royal (heavy 4-horse with parasol), Sumerian battle wagon, Sumerian straddle car, Celtic, Qin, Mauryan. Prompts were drafted in chat on 2026-10-28; same style prompt as the spears.
- Style for all spreads: black and white ink, fine pen linework with cross-hatching, plain white background, no text; one item per image; avoid the words "butt" and "shaft" (ChatGPT's filter flags them), use "ferrule"/"end spike" and "pole".

- Hittite unit names: Giš.Ban Ḫatti and Šukur.Tur Ḫatti are constructed ("bows/javelins of Hatti", after the way chariotry is written as "horses"); the others are attested terms or real peoples.
