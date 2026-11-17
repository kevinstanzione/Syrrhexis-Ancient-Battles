# Syrrhēxis penalty tokens

3D-printable Accuracy, Strength and Training Penalty tokens, in -1 and -2 values. The Action tokens look like metal coins; these look like small fired-clay tablets, so the two families are easy to tell apart. Each kind keeps its own shape so a single-colour print still reads at a glance:

| Token | Shape | Suggested colour | Files |
|---|---|---|---|
| Accuracy Penalty | round, 25 mm | ochre `#C49A5E` | [-1](stl/Accuracy_Penalty_-1.stl), [-2](stl/Accuracy_Penalty_-2.stl) |
| Strength Penalty | square, 22.5 mm | terracotta `#A4502F` | [-1](stl/Strength_Penalty_-1.stl), [-2](stl/Strength_Penalty_-2.stl) |
| Training Penalty | hexagon, 25 mm across corners | dark umber `#5E4632` | [-1](stl/Training_Penalty_-1.stl), [-2](stl/Training_Penalty_-2.stl) |

Each tablet is 3 mm thick with a slightly uneven, hand-pressed edge. The label (ACC, STR, TRN) and value are stamped 0.7 mm into the face like a seal, and shallow cracks (0.45 mm) run across the clay, kept clear of the lettering. A dark wash pooled in the letters and cracks picks them out (a light slip colour works better on the umber).

How many to print: a unit carries at most -2 Accuracy and -2 Strength (Mass Casualties), and splitting a unit copies its tokens onto every new unit, so print generously, roughly one -1 and one -2 of each per unit in a large army. Training penalties come from the Army Morale table (-1 at Unease and Panic, -2 at Mass Panic).

To regenerate: `pip install trimesh manifold3d matplotlib shapely`, then `python tokens/make_tokens.py`. The lettering uses Cinzel Bold from `tools/fonts`; the cracks are seeded, so each token comes out the same every build.
