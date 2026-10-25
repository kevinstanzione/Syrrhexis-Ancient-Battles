from board import *
W, H = 330, 290
s = SVG(W, H, 'Reserves', [
    'From the second round, a Reserve unit may enter along its Friendly board edge, or along either Neutral edge within its own half',
    'of the battlefield (the thick red lines), never in the enemy’s half. It then makes a standard move: not a Charge or a Run, since',
    'it has no Action Token yet, and it cannot shoot. Reserves that have not arrived by the fourth round are destroyed.'])
s.panel(0, 0, W, H)
ox, oy = 45, 22; S = bx(BOARD)
board(s, ox, oy)
for (x1, y1, x2, y2) in [(ox, oy + S, ox + S, oy + S), (ox, oy + S / 2, ox, oy + S), (ox + S, oy + S / 2, ox + S, oy + S)]:
    s.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{C["red"]}" stroke-width="3.5" stroke-linecap="round"/>')
for (x1, y1, x2, y2) in [(ox, oy, ox, oy + S / 2), (ox + S, oy, ox + S, oy + S / 2)]:
    s.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{C["line"]}" stroke-width="1" stroke-dasharray="2 2"/>')
s.text(ox - 6, oy + S / 4, 'No entry: enemy half', 5, C['line'], rot=-90, italic=True)
s.text(ox + S + 8, oy + S / 4, 'No entry: enemy half', 5, C['line'], rot=90, italic=True)
s.text(ox + S / 2, oy + S / 2 - 3, 'halfway line', 4.5, C['line'], italic=True)
# a reserve unit entering on the left neutral edge, then moving 6"
y0 = oy + bx(BOARD * 0.68)
mini_tray(s, ox + bx(23), y0, 2, 4, 90, 'red', ghost=True)
mini_tray(s, ox + bx(23 + 6 * IN), y0, 2, 4, 90, 'red')
mini_tray(s, ox + S / 2, oy + S - bx(23), 2, 4, 0, 'red', ghost=True)
mini_tray(s, ox + S / 2, oy + S - bx(23 + 6 * IN), 2, 4, 0, 'red')
s.arrow(ox + bx(50), y0 - 14, ox + bx(6 * IN + 20), y0 - 14, C['red'], w=0.9, label='standard move', loff=(0, -3))
s.arrow(ox + S / 2 + 16, oy + S - 6, ox + S / 2 + 16, oy + S - bx(6 * IN) + 2, C['red'], w=0.9)
s.text(ox + S / 2 + 20, oy + S - 20, 'standard move', 5, C['red'], 'start')
s.text(ox + S / 2, oy + S + 10, 'Red Friendly edge', 6, C['red'], bold=True)
s.text(ox + S / 2, oy - 5, 'Enemy edge', 6, C['blue'], bold=True)
scalebar(s, W - 75, H - 12)
print(s.save('reserves.svg'))
