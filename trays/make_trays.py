"""Generate Syrrhēxis movement trays: one STL per unique base size x ranks x files."""
import json, os, sys, zipfile, collections
import trimesh
from trimesh.creation import box, cylinder

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "stl")
DATA = os.path.join(HERE, "..", "data", "armies.js")

# Tunable parameters (mm)
CLEAR = 0.4      # total extra room per axis for the whole block of bases
BORDER = 3.0     # wall thickness around the recess (rulebook allows up to 6.35)
FLOOR = 1.4      # floor under the bases
DEPTH = 2.0      # recess depth (how far the bases sit down)
NOTCH_R = 6.0    # finger notch radius in the back wall

# base width (frontage) x depth, from Physical Aspects of a Model
def base_for(f):
    t = f["type"]
    if t == "Elephant" or (t == "Chariot" and f["horses"] >= 4):
        return ("Large-Chariot-Elephant", 60, 80)
    if t == "Chariot":
        return ("Chariot", 40, 60)
    if "Cavalry" in t:
        return ("Cavalry", 25, 50)
    return ("Warrior", 20, 20)

def tray(files, ranks, bw, bd):
    iw, idp = files * bw + CLEAR, ranks * bd + CLEAR
    W, D, H = iw + 2 * BORDER, idp + 2 * BORDER, FLOOR + DEPTH
    outer = box([W, D, H]); outer.apply_translation([0, 0, H / 2])
    recess = box([iw, idp, DEPTH + 1]); recess.apply_translation([0, 0, FLOOR + (DEPTH + 1) / 2])
    # notch: vertical half-cylinder cut through the back wall, centred on the back edge of the recess
    notch = cylinder(radius=NOTCH_R, height=DEPTH + 1, sections=48)
    notch.apply_translation([0, idp / 2 + BORDER / 2, FLOOR + (DEPTH + 1) / 2])
    m = trimesh.boolean.difference([outer, recess, notch], engine="manifold")
    return m, (W, D, H)

def load_formations():
    """Every Closed Order formation in the list builder, mercenaries included."""
    src = open(DATA, encoding="utf-8").read()
    data = json.loads(src[src.index("=") + 1:].strip().rstrip(";"))
    rows = []
    def add(army, u):
        if u.get("range") or not u.get("comps"):
            return
        for r, f in u["comps"]:
            rows.append({"army": army, "name": u["name"], "type": u["type"], "ranks": r, "files": f,
                         "horses": (u.get("crew") or {}).get("horses", 0)})
    for a in data["armies"]:
        for u in a["units"]:
            add(a["name"], u)
    for u in data.get("mercs", {}).get("units", []):
        add("Mercenaries", u)
    return rows

def main():
    forms = load_formations()
    groups = collections.OrderedDict()
    for f in forms:
        kind, bw, bd = base_for(f)
        key = (kind, bw, bd, f["ranks"], f["files"])
        groups.setdefault(key, []).append(f)
    os.makedirs(OUT, exist_ok=True)
    order = ["Warrior", "Cavalry", "Chariot", "Large-Chariot-Elephant"]
    rows = []
    for key in sorted(groups, key=lambda k: (order.index(k[0]), k[3], k[4])):
        kind, bw, bd, r, fl = key
        m, (W, D, H) = tray(fl, r, bw, bd)
        assert m.is_watertight, key
        name = f"{kind}_{bw}x{bd}mm_{r}-rank{'s' if r > 1 else ''}_of_{fl}.stl"
        sub = os.path.join(OUT, kind); os.makedirs(sub, exist_ok=True)
        m.export(os.path.join(sub, name))
        users = sorted({f"{f['name']} ({f['army']})" for f in groups[key]})
        rows.append((kind, name, r, fl, W, D, H, users))
    with open(os.path.join(HERE, "README.md"), "w", encoding="utf-8") as fh:
        fh.write("# Syrrhēxis movement trays\n\n3D-printable trays for every Closed Order formation in the list builder. "
                 "Each tray holds its bases touching in ranks (front to back) and files (across the frontage), with every model facing forward. "
                 "Open Order units don't use trays.\n\n")
        fh.write(f"Recess clearance {CLEAR} mm, border {BORDER} mm, "
                 f"floor {FLOOR} mm, recess depth {DEPTH} mm.\n\n")
        fh.write("To regenerate after army changes: `pip install trimesh manifold3d`, then `python trays/make_trays.py`.\n\n")
        fh.write("| File | Outer size (W x D x H mm) | Used by |\n|---|---|---|\n")
        for kind, name, r, fl, W, D, H, users in rows:
            fh.write(f"| [{name}](stl/{kind}/{name}) | {W:.1f} x {D:.1f} x {H:.1f} | {'; '.join(users)} |\n")
    print(len(rows), "trays written")
    for row in rows: print(row[1], f"{row[4]:.1f}x{row[5]:.1f}")

main()
