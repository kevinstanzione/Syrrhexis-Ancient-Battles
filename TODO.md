# To do

## Rulebook
- Collision: stays a Strength 5 strike, and a rank missing any models gives no Collision hits (decided 2026-11-03). Ideas not taken for now: count half-full ranks; Strength equal to the rank's width.
- Fleeing from Melee (shelved 2026-11-03, not rejected): Parting Blows (each enemy in contact makes a free front-rank strike at +1 Strength before the Flee move, no Collision, no strike back), or a pursuit move for the winner.
  - Watch in playtesting: Collision applies every round, so deep blocks may grind down Open Order units.


### Rulebook corrections (Kevin's read-through, 2026-11-04)
Done 2026-11-05: First Blood row, Strength table order, matching Armor Save tables; Walls diagram, Who Attacks Collision labels, Break Tokens visual, Scout and Ambush label; Aim and the Shooting Modifiers rework, "see X" links, Evasion flavour, Unwieldy styling, Activation Phase bold, End of the Round placement, Cohesion note, Stony Plain Strength 6, and the diagram fixes (Battlefield, Turning, Charge Arcs, Path and Bumping, Charge Fails, both Pile In, Firing Angle).

## Tokens and templates
- Penalty tokens done 2026-11-17 (tokens/): cracked clay tablets, stamped lettering, earthen colours (ochre, terracotta, umber), distinct shapes. Action tokens are to look like metal coins. Splitting a Unit copies the parent's tokens onto every new unit, so a set needs enough of each.
- Corner Marker STL done 2026-11-17 (trays/make_corner_marker.py).

## Terrain bases (3D print)
- Generator done: terrain/make_bases.py writes exact-size plates to terrain/stl (Monument 2x2", Watchtower 3x3", wall 8x1/2" or two 4" halves, Rolling Wagons 40x60mm, Flaming Pigs 20x20mm, ʾLpm oxen 25x50mm). Large terrain and Major Terrain use felt, so no bases.
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

## Kingdom of Kush
- Built in 0.28.0 (9 units, 5 Command cards). Playtest pricing, especially the Šmsw Retinue (15, Training 7), Wrrywt (45) and the Horses of Kush Army Morale.
- Names are Egyptian and some are constructed (Ssmtyw from ssmt "horse"); logged in the names doc. Mḏꜣyw (Medjay) is a slightly late term, kept on purpose. Kush names checked and logged in the Reconstructed Names Reference doc on 2026-11-13; Wrrt → Wrrywt in 0.31.3.

## Dynastic Egypt
- Built in 0.29.0 (9 units, New Kingdom c. 1550–1070 BC); 5 Command cards in 0.30.0 (Amun My Father, The Aruna Road, Shoot in Ranks, Snapping the Nine Bows, Trumpets of the Divisions).
- Names checked 2026-11-13 (0.31.2) and logged in the Reconstructed Names Reference doc: Snnw → Snnyw, Ḫrp → Ḥrp (AED: ḥrp "dagger; short sword", Semitic loan; note it is a short sword in the dictionary), mace-axe → Ỉqḥw (jqḥw "battle axe"), Nsjwt → Nsỉwt (Wb 2, 324.17 nswt, variant nsjwt). ꜥb confirmed as the technical term for the composite bow. Styw kept on purpose (constructed from stj "to shoot"; the Nubians are Stjw, with j). Checked 2026-11-17 against the TLA word list (aed-tei dictionary.xml): mnfꜣ.t "infantry" (Wb 2, 80.1-5), nḫt-ꜥ "strong one" (FCD 138), nfr.w "recruits" (Wb 2, 258.1-3), pḥrr "runner" (Wb 1, 541.14-18), bꜣgs.w "dagger" (Wb 1, 432.4-5), mjnb "axe" (Wb 2, 44.7-8), pr-ꜥꜣ "palace; pharaoh" (Wb 1, 516.2-12). All fine; logged in the names doc (Kush has its own Napatan section).
- King of Kings: Mnfꜣt stand in for the Egyptians (added 0.33.0).
- Playtest pricing: Snnw (45), Pr-ꜥꜣ Retinue (55 × 3 chariots, discounted retinue characters), Šrdn (16).

## Armies of Alexander
- Built in 0.23.0 (13 units); 6 Command cards as of 0.25.0 (Émbolon, Lord of Asia, Oblique Advance, Aristander's Eagle, Ipsus, Synaspismós). Playtest pricing, especially Pezhétairoi (15), Argyráspides (19), Eléphantes (100) and Thureophóroi (12).
- Idea for later: Ptolemaic African forest elephants (smaller, Elephant Strength 7, cheaper). Conflicts with the no-negative-cost rule, so it would need its own profile.

## Neo-Assyrian Empire (added 0.34.0)
- Names done 0.38.0 (Akkadian; checked against Dezső, The Assyrian Army, and the CAD where possible). Logged in the names doc. Attested: Qurādu, kiṣir šarrūti, ša šēpē, ṣāb šarri, Itu'ayu, kallāpu ('light troops'), ša pētḫalli, narkabtu, mugerru, asmarû, ariktu, namṣaru, patru, qaštu, aspu (sling, Landsberger 1957), siriam/sariam, kabābu, adê, abūbu. Constructed or loose: Ṣāb Qašti (phrase), Mugerri Šarri (phrase), Qaštu Itu'ayītu, Kakku (generic 'weapon'), Ḫuṭāru ('staff'), Tappû (not checked in a dictionary).
- Playtest: Gurrāyū (12, Enforcers) added 0.38.0.
- Points to watch: the Royal Spearmen (17) and Royal Spearmen Retinue (16) must take a Lead Captain, so check whole-unit costs.

## Mauryan Empire (added 0.35.0)
- Playtest pricing: Maula Retinue (15 × 10 models), Ratha (70), Hastin (95), Rājahastin Retinue (120 with paired characters).

## Hannibal’s Forces (added 0.36.0)
- Names: logged in the names doc. Attested: Mḥnt (coin legend "the camp"), Mḥšbm ("the paymasters", coin legend), Ksp ("silver"), Ndr ("vow"), ʾlp ("ox"), Rb ("general"), Qrtḥdšt. ʿm Qrtḥdšt appears only in a restored line of KAI 303. Constructed from Hebrew/Aramaic cognates: Lbym, Qdšt, Pršm, Rmḥ, Ḥrb, Mʾklt, Kdn, Plm (low confidence: Aramaic pīlā, Akkadian pīru). Saunion is Greek (the Samnites' name may come from it).
- Playtest pricing: Mḥnt Qdšt Retinue (22 × 8), Pršm hRb Retinue (22 × 4), Plm (75), Ligurēs (13, Heavy Shield with no Move penalty), Equitēs Gallī (24).
- Watch: Mḥšbm with two retinues gives 2 extra mercenary units, plus 3 from Ksp Qrtḥdšt. Brq has no cap.
- Done 2026-11-22: Phalanx Shield/Length 6 negation removed (rulebook 0.3.10); terrain and Half Strength / under 6 models negation kept. Still to do: an Initiative token.

## King of Kings rework (Persia)
- Done 0.35.0: rework complete. 2 units from 8 options: Arabian Camel Riders, Greek Hoplites, Scythian Archers, Cretan Archers (Supplemental Mercenaries) and Pḏtyw, Mnfꜣt, Provincial Levy, Hastin (borrowed lists). Units taken this way gain Mercenary.
- Done 0.35.0: the Mauryan Hastin replace the Pīrū (merc copy hastin-merc, cardOnly); the Pīrū are gone from the Persian list and the Mauryan starter draft is deleted.
- Done 0.34.0: the Assyrian Provincial Levy added as the card-only Assyrian unit (merc copy, cardOnly).
- Done 0.33.0: Mnfꜣt added as the card-only Egyptian unit; the builder gives Mercenary to any unit taken through a card other than Lord of Asia.
- Done 0.28.0: Kushite Archers left the general mercenary pool and became the Kush Pḏtyw; King of Kings still offers them (merc copy marked cardOnly).

## Playtest watch (Unwieldy)
- 0.33.0: Open Order Unwieldy now also gives -X Accuracy when the unit moved or turned that activation. No compensation for anyone (Carduchian bow stays Accuracy 5). Watch the Kush Pḏtyw and Šmsw Retinue, the Pródromoi and the Carduchians.

## Weapon-ability Command cards (drafted 2026-11-24, names and flavor still to do)
Generic, Limit 2 each. Each targets 2 friendly units within 3” of each other that use the keyword weapon; proximity is checked only when the card is played. Two units of the same profile are a valid pair. A weapon's ability only works while it is the selected weapon (existing rule). Shooting cards are played in the Activation Phase, Melee cards at the start of the Combat Phase; effects last until the end of the round.

- **Cleaving Blade** (Combat Phase): while a chosen unit has a Charge token, its Cleaving Blade attacks gain +1 Accuracy against enemies with Armor 1 or less.
- **Parrying Blade** (Combat Phase): while a chosen unit has a Hold token, place a die on this card for each successful Armor Save it makes in Melee, up to 1 per model in its front rank (track each unit separately). Saves made before the unit strikes add that many attacks to its Parrying Blade strike, at its own Length. Saves made after it strike once more at the end of the Melee, alongside Collision. These attacks use the Parrying Blade's profile.
- **Thrusting Blade** (Combat Phase): while a chosen unit has a Charge token, its Thrusting Blade gains +2 Length.
- **Direct Fire** (Activation Phase): Shooting attacks with the chosen units' Direct Fire weapons gain +1 Accuracy against units that include a Lord, Commander, Army Standard Bearer, Army Musician, Standard Bearer or Musician.
- **Wide Attack** (Activation Phase): Shooting attacks with the chosen units' Wide Attack weapons gain Sunder (2) against targets at Close Range.
- **Reach** (Combat Phase): while a chosen unit has a Hold token, it gains +1 Armor against Melee attacks, but only its front rank attacks with its Reach weapon; its other full ranks add Collision Hits as normal.
- **Throwing Weapon** (Activation Phase): if a chosen unit takes the Hold action, it may use Volley with its Throwing Weapon (Volley's -1 Accuracy and -1 Strength still apply), and each Hit from its Throwing Weapon Shooting attacks causes +1 Suppression.

## Maybe

## Future army notes
- Done 0.37.0: **Backstabbers** went to the Sea People Raiders (1 Break Token, 14 pts) instead of Hannibal's Forces.
- **Qin China — two Army Musicians** (idea, 2026-11-18; drums to advance, gongs to halt, per Sunzi): a Qin retinue rule letting the army take up to 2 Army Musicians. Still to work out how two would interact, since an Army Musician swaps every unit's Hold/Charge tokens at once. One option: with two, each affects only units within 18” of it, so one can drum an advance while the other gongs a halt.

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
- Shieldwall candidates: Sumerian heavy phalanx (instead of Phalanx), a Germanic-style spear warband for European Barbarians.

## Art spreads (future)
- Pencil scene art: 8 army openers done (art/illustrations), Kush portrait added 2026-11-13, plus card art for The Eclipse and Crumbled Ruins in the Army Book's generic cards. Army Book images get a torn-paper edge at build time.
- Mercenary art for the Army Book (units that need showing exactly): Arabian Camel Riders, Đông Sơn Axemen, Lydian Houndsmen. Familiar-looking mercenaries (Cataphracts, maybe Galatians) go in the core rulebook as splash art instead.
- Rulebook spot art (done, 0.3.4): cataphract (Charge Movement), Cretan archer (Shooting), Iberian (Melee Hits), centurion (Commander), Aztec conch player (Musician), Persian standard bearer (Standard Bearer). Square, no background, torn edge without a corner, full column width.
- Next rulebook spot art, for the Special Rules chapter: Carduchian Tribesmen (tall Aġeġn bow; place by Unwieldy (X) or Surefooted) and Thracian Warriors (two-handed rhomphaia; place by Sunder (X)). Prompts not written yet.
- More mercenary spot art ideas for Special Rules: Sea People Raiders by Ambush (leaping from beached ships, Medinet Habu look), Numidian Javelineers by Feign Retreat, Galatian Warriors by Frenzy. Balearic Slingers could go in Unit Types (Skirmishing Warriors).
- Army openers done for every built army (Egypt, Assyria, Mauryan, Hannibal's Forces and European Barbarians added 2026-11-23). Qin China still needs one once its list is built; portrait openers sit at the top of the first text column.
- Deployment section: a wide piece of the Persian army forming up with King of Kings contingents side by side (e.g. Greek hoplite, Arabian camel rider, Scythian horse archer, with a Persian officer directing). Ambitious: keep to 3 or 4 large figures. Landscape, spanning the full page width in the rulebook (not a square column spot).
- Unit Types chapter (Warmachines section): Roman carroballista spot art, after Trajan's Column (mule cart with a bolt thrower and two crew).
- Spears spread done: art/spears/ (21 images, build_spread.py, spears_spread.png/.pdf). Placement in the rulebook still to decide.
- Next spreads: chariots, hand weapons, shields, armor, standards, musical instruments.
- Chariots (empty, strict side profile facing right, pole and yoke but no horses, harness or crew): Anše.Kur.Ra Ḫatti, Anše.Kur.Ra Mittanni, Raθā, Raθā-Dāça, Raθā Retinue (royal), Egyptian, Assyrian (light), Assyrian royal (heavy 4-horse with parasol), Sumerian battle wagon, Sumerian straddle car, Celtic, Qin, Mauryan. Prompts were drafted in chat on 2026-10-28; same style prompt as the spears.
- Style for all spreads: black and white ink, fine pen linework with cross-hatching, plain white background, no text; one item per image; avoid the words "butt" and "shaft" (ChatGPT's filter flags them), use "ferrule"/"end spike" and "pole".

## Notes
- Hittite unit names: Giš.Ban Ḫatti and Šukur.Tur Ḫatti are constructed ("bows/javelins of Hatti", after the way chariotry is written as "horses"); the others are attested terms or real peoples.
