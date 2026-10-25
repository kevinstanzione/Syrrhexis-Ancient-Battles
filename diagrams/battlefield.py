from board import *
W, H = 330, 290
s = SVG(W, H, 'The Battlefield', [
    'A standard game is played on a 4’ x 4’ board. Each player’s own edge is their Friendly board edge; the side edges are Neutral.',
    'Deployment zones extend 12” from each Friendly edge. The Major Terrain, a 1’ x 4’ strip on this board, runs between the two',
    'players’ edges along the left, down the centre, or along the right; the First Player chooses its location or its type.'])
s.panel(0, 0, W, H)
ox, oy = 45, 22; S = bx(BOARD)
board(s, ox, oy)
z = bx(12 * IN)
s.add(f'<rect x="{ox}" y="{oy}" width="{S:.1f}" height="{z:.1f}" fill="{C["blue"]}" fill-opacity="0.13"/>')
s.add(f'<rect x="{ox}" y="{oy + S - z:.1f}" width="{S:.1f}" height="{z:.1f}" fill="{C["red"]}" fill-opacity="0.13"/>')
t = bx(12 * IN)
for i, x in enumerate([ox, ox + S / 2 - t / 2, ox + S - t]):
    if i == 1:
        s.add(f'<rect x="{x:.1f}" y="{oy}" width="{t:.1f}" height="{S:.1f}" fill="{C["terrainl"]}" fill-opacity="0.85" stroke="{C["terrain"]}" stroke-width="0.9"/>')
    else:
        s.add(f'<rect x="{x:.1f}" y="{oy}" width="{t:.1f}" height="{S:.1f}" fill="none" stroke="{C["terrain"]}" stroke-width="0.8" stroke-dasharray="3 2"/>')
s.text(ox + S / 2, oy + S / 2 - 3, 'Major Terrain', 6, C['line'], bold=True)
s.text(ox + S / 2, oy + S / 2 + 5, '(or left, or right)', 5, C['line'], italic=True)
s.text(ox + S / 2, oy + z / 2 + 2, 'Blue deployment zone (12”)', 5.5, C['blue'], italic=True)
s.text(ox + S / 2, oy + S - z / 2 + 2, 'Red deployment zone (12”)', 5.5, C['red'], italic=True)
s.text(ox + S / 2, oy + S + 10, 'Red Friendly edge  /  Blue Enemy edge', 6, C['red'], bold=True)
s.text(ox + S / 2, oy - 5, 'Blue Friendly edge  /  Red Enemy edge', 6, C['blue'], bold=True)
s.text(ox - 6, oy + S / 2, 'Neutral edge', 6, C['ink'], rot=-90)
s.text(ox + S + 8, oy + S / 2, 'Neutral edge', 6, C['ink'], rot=90)
s.text(ox + S + 4, oy + S / 2 - 3, '', 5)
s.text(ox + 4, oy + S / 2 - 2, 'halfway line', 4.5, C['line'], 'start', italic=True)
scalebar(s, W - 75, H - 12)
s.text(W - 75 - 4, H - 9, '', 5)
print(s.save('battlefield.svg'))
