from style import *
PW, PH, G = 170, 250, 6
s = SVG(2 * PW + G, PH, 'Crossing and Defending a Wall', [
    'Left: a Warrior or Cavalry unit crosses a wall with a Standard Move or Run, using half its Move Allowance, and must end the move',
    'entirely clear of the wall. It cannot cross during a Charge, Flee or Disengage, and Chariots, Elephants and Warmachines cannot',
    'cross at all. Right: the attacker charges a unit standing behind the wall. It stops when it touches the wall, and the defender is',
    'drawn up to defend it, moving straight forward until it touches the wall. They fight across the wall, and the Charge is broken:',
    'no +1 Strength from the Charge Action Token, no Collision, and no weapons that may only be used on the Charge.'])
WT = 0.5 * IN                     # wall thickness (8" x 1/2" Command-card wall)
TD = 2 * 20 + 2 * B               # depth of a 2-rank tray
STONE, EDGE = '#bdb4a2', C['line']


def wall(x0, y):
    s.add(f'<rect x="{x0 + 6}" y="{y:.1f}" width="{PW - 12}" height="{WT:.1f}" fill="{STONE}" stroke="{EDGE}" stroke-width="0.8"/>')
    for i in range(1, 12):
        xx = x0 + 6 + i * (PW - 12) / 12
        s.add(f'<line x1="{xx:.1f}" y1="{y:.1f}" x2="{xx:.1f}" y2="{y + WT:.1f}" stroke="{EDGE}" stroke-width="0.4"/>')


# left: crossing
x0 = 0; cx = PW / 2 - 8
s.panel(x0, 0, PW, PH, 'Crossing a Wall')
wy = 118
wall(x0, wy)
s.text(x0 + 10, wy - 3, 'wall', 5.5, C['line'], 'start', italic=True)
start_c = wy + WT + 6 + TD / 2
end_c = wy - 6 - TD / 2
s.tray(cx, start_c, 2, 4, 0, 'red', ghost=True)
s.tray(cx, end_c, 2, 4, 0, 'red')
s.arrow(cx + 52, start_c + 10, cx + 52, end_c - 10, C['red'])
s.text(cx + 57, start_c - 3, 'half', 5.5, C['red'], 'start', bold=True)
s.text(cx + 57, start_c + 4, 'Move', 5.5, C['red'], 'start', bold=True)
s.text(cx, end_c - TD / 2 - 8, 'ends entirely clear of the wall', 5.5, C['red'], italic=True)
s.text(cx, start_c + TD / 2 + 10, 'Start: Standard Move or Run', 5.5, C['red'], italic=True)
s.text(PW / 2, PH - 8, 'No crossing in a Charge, Flee or Disengage', 5.2, C['ink'], bold=True)

# right: defending
x0 = PW + G; cx = x0 + PW / 2 - 16
s.panel(x0, 0, PW, PH, 'Defending a Wall')
wy = 118
wall(x0, wy)
d_start = wy - 1 * IN - TD / 2
d_end = wy - TD / 2
s.tray(cx, d_start, 2, 4, 180, 'blue', ghost=True)
s.tray(cx, d_end, 2, 4, 180, 'blue')
s.arrow(cx + 52, d_start - 12, cx + 52, d_end + 6, C['blue'])
s.text(cx + 8, d_start - TD / 2 - 6, 'Defender 1” behind the wall', 5.5, C['blue'], italic=True)
s.text(cx + 55, d_end - 14, 'drawn up', 5.2, C['blue'], 'start', bold=True)
s.text(cx + 55, d_end - 7, 'to the wall', 5.2, C['blue'], 'start', bold=True)
a_end = wy + WT + TD / 2
a_start = a_end + 48
s.tray(cx, a_start, 2, 4, 0, 'red', ghost=True)
s.tray(cx, a_end, 2, 4, 0, 'red')
s.arrow(cx + 52, a_start + 8, cx + 52, a_end - 4, C['red'])
s.text(cx + 55, a_end + 14, 'Charge stops', 5.2, C['red'], 'start', bold=True)
s.text(cx + 55, a_end + 21, 'at the wall', 5.2, C['red'], 'start', bold=True)
s.text(x0 + PW / 2, PH - 15, 'Locked in Combat across the wall;', 5.2, C['ink'], bold=True)
s.text(x0 + PW / 2, PH - 8, 'the Charge is broken', 5.2, C['ink'], bold=True)
s.scale(8, PH - 26)
print(s.save('walls.svg'))
