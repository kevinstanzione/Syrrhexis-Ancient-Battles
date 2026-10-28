from board import *
from tokens import *
W, H = 340, 300
s = SVG(W, H, 'A Battlefield Ready to Play', [
    'A 4’ x 4’ board after Setting Up. The Major Terrain (here a Marsh) runs along the left edge. Terrain features from Command cards',
    'are placed: a Watchtower in Blue’s deployment zone, Dense Brush in the neutral middle and a Monument by Red. Each army is deployed',
    'wholly within its 12” zone, Closed Order units facing the enemy edge, and each player’s 3-card Command hand waits beside the board.'])
s.panel(0, 0, W, H)
ox, oy = 62, 22; S = bx(BOARD)
board(s, ox, oy)
z = bx(12 * IN)
s.add(f'<rect x="{ox}" y="{oy}" width="{S:.1f}" height="{z:.1f}" fill="{C["blue"]}" fill-opacity="0.12"/>')
s.add(f'<rect x="{ox}" y="{oy + S - z:.1f}" width="{S:.1f}" height="{z:.1f}" fill="{C["red"]}" fill-opacity="0.12"/>')
# Major terrain: marsh along the left edge
t = bx(12 * IN)
s.add(f'<rect x="{ox}" y="{oy}" width="{t:.1f}" height="{S:.1f}" fill="#b9c9b0" fill-opacity="0.75" stroke="{C["terrain"]}" stroke-width="0.8"/>')
for i in range(14):
    x = ox + 8 + (i * 37) % (t - 14); y = oy + 10 + i * 17
    s.add(f'<path d="M{x:.1f},{y:.1f} q3,-4 6,0 q3,4 6,0" fill="none" stroke="#6f8f8a" stroke-width="0.7"/>')
s.text(ox + t / 2, oy + S / 2, 'Marsh', 6, C['line'], bold=True, rot=-90)
def feature(x, y, w_in, h_in, label, fill, above=False):
    w, h = bx(w_in * IN), bx(h_in * IN)
    s.add(f'<rect x="{x - w/2:.1f}" y="{y - h/2:.1f}" width="{w:.1f}" height="{h:.1f}" rx="1.5" fill="{fill}" stroke="{C["line"]}" stroke-width="0.7"/>')
    s.text(x, y - h / 2 - 3 if above else y + h / 2 + 7, label, 5, C['line'], italic=True)
feature(ox + S * 0.78, oy + z * 0.45, 3, 3, 'Watchtower', '#c7b08a', above=True)
feature(ox + S * 0.6, oy + S / 2, 6, 6, 'Dense Brush', '#9aae78')
feature(ox + S * 0.36, oy + S - z * 0.55, 2, 2, 'Monument', '#d9d2c3')
# Blue army (facing down = rotate 180)
for (fx, ranks, files) in [(0.42, 4, 6), (0.6, 4, 6), (0.88, 2, 4)]:
    mini_tray(s, ox + S * fx, oy + z * 0.55, ranks, files, 180, 'blue')
for i in range(6):
    s.add(f'<rect x="{ox + S*0.3 + i*6:.1f}" y="{oy + z - 9 + (i%2)*3:.1f}" width="4" height="4" fill="{C["bluel"]}" stroke="{C["blue"]}" stroke-width="0.5"/>')
# Red army (facing up)
for (fx, ranks, files) in [(0.5, 4, 5), (0.68, 4, 5), (0.86, 2, 5)]:
    mini_tray(s, ox + S * fx, oy + S - z * 0.5, ranks, files, 0, 'red')
for i in range(6):
    s.add(f'<rect x="{ox + S*0.55 + i*6:.1f}" y="{oy + S - z + 5 + (i%2)*3:.1f}" width="4" height="4" fill="{C["redl"]}" stroke="{C["red"]}" stroke-width="0.5"/>')
# edges
s.text(ox + S / 2, oy - 5, 'Blue Friendly edge', 6, C['blue'], bold=True)
s.text(ox + S / 2, oy + S + 10, 'Red Friendly edge', 6, C['red'], bold=True)
s.text(ox + S + 7, oy + z / 2, '12”', 5, C['blue'], 'start'); s.text(ox + S + 7, oy + S - z / 2, '12”', 5, C['red'], 'start')
# command hands
def hand(x, y, col):
    for i in range(3):
        s.add(f'<rect x="{x + i*5:.1f}" y="{y - i*2:.1f}" width="16" height="23" rx="1.5" fill="{col}" stroke="{C["ink"]}" stroke-width="0.6" transform="rotate({-8 + i*8} {x + i*5 + 8} {y + 11})"/>')
hand(14, oy + 18, C['bluel']); s.text(30, oy + 52, 'Blue Command', 5, C['blue'], italic=True); s.text(30, oy + 58, 'hand', 5, C['blue'], italic=True)
hand(14, oy + S - 48, C['redl']); s.text(30, oy + S - 14, 'Red Command', 5, C['red'], italic=True); s.text(30, oy + S - 8, 'hand', 5, C['red'], italic=True)
scalebar(s, W - 78, H - 10)
print(s.save('battlefield_setup.svg'))
