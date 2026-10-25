from style import *
W, H = 240, 330
s = SVG(W, H, 'Charge Fails', [
    'The attacker needs 7” to reach the Destination but has only 6” of Move Allocation, so the Charge fails. It moves directly',
    'forward as far as it can, without coming within 1” of an enemy unit or overlapping a friendly unit. Its Charge Action Token',
    'becomes a Run Action Token, and its controlling player loses Army Morale equal to its Unit Strength.'])
s.panel(0, 0, W, H)
cx = 115; d2 = 2 * 20 + 2 * B
bfront = 70
s.tray(cx, bfront - 33, 3, 5, 180, 'blue')
start_front = bfront + 7 * IN
s.tray(cx, start_front + d2 / 2, 2, 4, 0, 'red', ghost=True)
end_front = start_front - 6 * IN
s.tray(cx, end_front + d2 / 2, 2, 4, 0, 'red')
def dim(x, y1, y2, label, col=None, left=False):
    col = col or C['ink']
    s.add(f'<line x1="{x}" y1="{y1:.1f}" x2="{x}" y2="{y2:.1f}" stroke="{col}" stroke-width="0.8"/>')
    for y in (y1, y2): s.add(f'<line x1="{x-3}" y1="{y:.1f}" x2="{x+3}" y2="{y:.1f}" stroke="{col}" stroke-width="0.8"/>')
    s.text(x + (-5 if left else 5), (y1 + y2) / 2 + 2, label, 6, col, 'end' if left else 'start', bold=True)
dim(cx + 62, bfront, start_front, 'needs 7”')
dim(cx - 60, end_front, start_front, 'moves 6”', C['red'], left=True)
dim(cx - 60, bfront, end_front, '1” gap', C['line'], left=True)
tx, ty = cx - 45, end_front + 60
s.add(f'<circle cx="{tx+20}" cy="{ty}" r="7" fill="{C["ink"]}"/>')
s.text(tx + 20, ty + 2.2, 'RUN', 4.5, '#fff', bold=True)
s.text(tx + 30, ty + 2, 'Run token', 5.5, C['ink'], 'start', italic=True)
s.text(cx, start_front + d2 + 9, 'Start', 5.5, C['red'], italic=True)
s.scale(8, H - 12)
print(s.save('charge_fails.svg'))
