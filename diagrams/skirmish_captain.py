from board import *
from tokens import *
k = 0.36
PW, PH, G = 150, 215, 6
s = SVG(3 * PW + 2 * G, PH, 'The Skirmish Captain', [
    'When an enemy declares a Charge against a unit with a Skirmish Captain, before measuring, it may take a Fear Test. If it passes,',
    'it falls back directly away from the charger up to its Move, through friendly units if needed (not ending on or touching them, or',
    'within 1” of an enemy), and gains a Run Token. If the charger can no longer reach it, it may charge the first enemy unit in its path.'])
def mm(v): return v * k
def skirm(ox, y, ghost=False):
    for i, (dx, dy) in enumerate([(-24, 0), (-12, 4), (0, -2), (12, 3), (24, -1)]):
        x = ox + 75 + dx
        s.add(f'<rect x="{x-mm(10):.1f}" y="{y+dy-mm(10):.1f}" width="{mm(20):.1f}" height="{mm(20):.1f}" rx="0.8" '
              f'fill="{C["bluel"]}" stroke="{C["blue"]}" stroke-width="0.6"{" opacity=\"0.35\" stroke-dasharray=\"1.5 1\"" if ghost else ""}/>')
by, sy, ry = 70, 112, 182
titles = ['1. Charge declared', '2. Fear Test passed: fall back', '3. Charger hits the unit behind']
for p, t in enumerate(titles):
    ox = p * (PW + G)
    s.panel(ox, 0, PW, PH, t)
    mini_tray(s, ox + 75, by, 3, 5, 180, 'blue', k=k)
    if p == 0: s.text(ox + 75, by - 18, 'friendly Closed Order unit', 5, C['blue'], italic=True)
    if p == 0:
        skirm(ox, sy)
        s.text(ox + 75, sy + 14, 'skirmishers with a Skirmish Captain', 5, C['blue'], italic=True)
        mini_tray(s, ox + 75, ry, 2, 4, 0, 'red', k=k, bw=25, bd=50)
        s.arrow(ox + 75, ry - 22, ox + 75, sy + 22, C['red'], dashed=True)
        s.text(ox + 82, (ry + sy) / 2 + 6, 'Charge!', 5.5, C['red'], 'start', bold=True)
    elif p == 1:
        skirm(ox, sy, ghost=True)
        fy = sy - mm(7 * IN)
        skirm(ox, fy)
        s.arrow(ox + 128, sy, ox + 128, fy + 4, C['blue'], w=1)
        s.text(ox + 124, (sy + fy) / 2 + 26, 'up to Move (7”),', 4.8, C['blue'], 'end', italic=True)
        s.text(ox + 124, (sy + fy) / 2 + 32, 'through the friendly unit', 4.8, C['blue'], 'end', italic=True)
        round_token(s, ox + 120, fy - 4, 'Run', 6)
        mini_tray(s, ox + 75, ry, 2, 4, 0, 'red', k=k, bw=25, bd=50)
    else:
        skirm(ox, sy - mm(7 * IN))
        mini_tray(s, ox + 75, ry, 2, 4, 0, 'red', k=k, bw=25, bd=50, ghost=True)
        mini_tray(s, ox + 75, by + mm(66) / 2 + mm(106) / 2 + 3, 2, 4, 0, 'red', k=k, bw=25, bd=50)
        s.arrow(ox + 128, ry, ox + 128, by + 32, C['red'], w=1)
        s.text(ox + 124, ry - 10, 'full Charge Move into', 4.8, C['red'], 'end', italic=True)
        s.text(ox + 124, ry - 4, 'the first enemy in its path', 4.8, C['red'], 'end', italic=True)
print(s.save('skirmish_captain.svg'))
