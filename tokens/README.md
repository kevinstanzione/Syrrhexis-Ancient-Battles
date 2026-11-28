# Syrrhēxis tokens

Every token the game uses, as 3D-printable STLs: Penalty tokens and the Initiative token (below), and the play tokens: Action, Order, Pass, Break, Furor and Pardon (see [Play tokens](#play-tokens)). Track Damage with dice.

## Penalty tokens

Accuracy, Strength and Training Penalty tokens, in -1 and -2 values. The Action tokens look like metal coins; these look like small fired-clay tablets, so the two families are easy to tell apart. Each kind keeps its own shape so a single-colour print still reads at a glance:

| Token | Shape | Suggested colour | Files |
|---|---|---|---|
| Accuracy Penalty | round, 25 mm | ochre `#C49A5E`, letters in a dark umber wash | [-1](stl/Accuracy_Penalty_-1.stl), [-2](stl/Accuracy_Penalty_-2.stl) |
| Strength Penalty | square, 22.5 mm | terracotta `#A4502F`, letters in a light bone slip `#E8DCC0` | [-1](stl/Strength_Penalty_-1.stl), [-2](stl/Strength_Penalty_-2.stl) |
| Training Penalty | hexagon, 25 mm across corners | dark umber `#5E4632`, letters in a light bone slip `#E8DCC0` | [-1](stl/Training_Penalty_-1.stl), [-2](stl/Training_Penalty_-2.stl) |

Each tablet is 3 mm thick with a slightly uneven, hand-pressed edge. The label (ACC, STR, TRN) and value are stamped 0.7 mm into the face like a seal, and shallow cracks (0.45 mm) run across the clay, kept clear of the lettering. Fill the stamped letters for contrast: a dark wash on the ochre tokens, a light bone slip on the terracotta and umber ones (paint it in, then wipe the face clean with a damp cloth). The cracks can take a dark wash on all three.

How many to print: a unit carries at most -2 Accuracy and -2 Strength (Mass Casualties), and splitting a unit copies its tokens onto every new unit, so print generously, roughly one -1 and one -2 of each per unit in a large army. Training penalties come from the Army Morale table (-1 at Unease and Panic, -2 at Mass Panic).

To regenerate: `pip install trimesh manifold3d matplotlib shapely`, then `python tokens/make_tokens.py`. The lettering uses Cinzel Bold from `tools/fonts`; the cracks are seeded, so each token comes out the same every build.

## Initiative token

One [Initiative token](stl/Initiative_Token.stl) marks the player who won the most recent Initiative roll. Pass it to the winner each round: the next round's Start of the Round, Reserves and Orders Phases go by that roll, and so does playing a Weather card. In a 2v2 game, use it for the player first in Initiative order.

It is a struck medallion, 36 mm across and 3.4 mm thick, so it never gets mixed up with the Action coins or the clay Penalty tablets: a beaded rim, a raised eight-pointed sun-star and INITIATIVE in relief along the bottom, 3 mm letters ([preview](initiative_token_preview.png)). Print it in brass or gold filament, or paint it bronze and pick out the relief with a dark wash.

To regenerate: `python tokens/make_initiative_token.py` (same packages as above).

## Play tokens

Each family has its own shape and finish, so they read at a glance even in a single-colour print and never get mixed up with the clay Penalty tablets or the Initiative medallion ([preview](play_tokens_preview.png)).

| Token | Look | Suggested colour | Files | How many to print (per player) |
|---|---|---|---|---|
| Action: Run, Charge, Hold, Flee | struck coin, 30 mm, plain raised rim, icon and word in relief (chevrons up, spearhead, round shield, chevrons down) | bronze or brass, dark wash in the recesses | [Run](stl/Action_Run.stl), [Charge](stl/Action_Charge.stl), [Hold](stl/Action_Hold.stl), [Flee](stl/Action_Flee.stl) | about 6 Run, 6 Charge, 8 Hold, 6 Flee for a 12-unit army (Hold and Flee stay on through the End of the Round) |
| Order 1 to 12 | octagonal bone tessera, 24 mm across the flats, the number cut inside a ring; 6 and 9 underlined; plain back | bone or ivory, a different colour for each player's set | `stl/Order_01.stl` to `stl/Order_12.stl` | one of each |
| Pass | the same tessera with PASS, so face-down Order and Pass tokens look alike | as the Order tokens | [Pass](stl/Pass_Token.stl) | about 6 |
| Break | broken pottery shard, about 22 mm, BREAK stamped in, a crack or two | black, letters filled terracotta or bone | [Break](stl/Break_Token.stl) | about 20 (Mass Casualties adds 2 every Activation Phase) |
| Furor (European Barbarians) | oval Celtic shield, 22 × 30 mm, spine and boss in relief, FUROR below; the back is cut SPENT / -1 TRN for the flipped token | bronze | [Furor](stl/Furor_Token.stl) | one per unit with Furor |
| Pardon (Qin China) | bamboo slip, 11 × 36 mm, two binding grooves, PARDON cut down its length | bamboo tan, dark ink wash in the letters | [Pardon](stl/Pardon_Token.stl) | one per Geng Da unit |

The cut lettering on the Order, Pass, Break and Pardon tokens takes a wash or slip the same way as the Penalty tokens. The Furor token's back is cut into the bed side and mirrored, so it reads the right way round when flipped; it prints fine on a smooth bed. All relief on the coins and the Furor shield is the same height, so they lie flat either way up.

To regenerate: `python tokens/make_play_tokens.py` (same packages as above); add `--preview` to redraw the preview. `ORDER_MAX` at the top sets how many Order tokens to make.
