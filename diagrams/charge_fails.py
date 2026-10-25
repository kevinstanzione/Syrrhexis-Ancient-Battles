from style import *
W, H = 240, 370
s = SVG(W, H, 'Charge Fails', [
    'Hattian Infantry (Move 6) would normally charge up to 12”, but they start in Crumbled Ruins, which follow the rules for a',
    'Stony Plain, so the whole Charge is limited to their Move of 6”. They need 7” to reach the defender, so the Charge fails.',
    'They move directly forward as far as they can, without coming within 1” of an enemy unit. Their Charge Action Token becomes',
    'a Run Action Token, and their controlling player loses Army Morale equal to their Unit Strength.'])
s.panel(0, 0, W, H)
cx = 115; dr = 3 * 20 + 2 * B
bfront = 70
start_front = bfront + 7 * IN
# Crumbled Ruins patch (8" x 8" in the rules; only part of it shown)
rx0, ry0 = 30, start_front - 14
s.add(f'<rect x="{rx0}" y="{ry0}" width="{W - 2*rx0 + 10}" height="{H - ry0 - 30}" rx="6" fill="{C["terrainl"]}" stroke="{C["terrain"]}" stroke-width="1" stroke-dasharray="4 2"/>')
for i, (x, y) in enumerate([(45, ry0 + 12), (205, ry0 + 20), (50, ry0 + 70), (200, ry0 + 75)]):
    s.add(f'<path d="M{x},{y} l5,-4 l6,2 l2,5 l-6,3 l-6,-1 z" fill="{C["terrain"]}" opacity="0.8"/>')
s.text(W - 14, ry0 + 103, 'Crumbled Ruins (Stony Plain)', 5.5, C['line'], 'end', italic=True)
s.tray(cx, bfront - 33, 3, 5, 180, 'blue')
s.tray(cx, start_front + dr / 2, 3, 4, 0, 'red', ghost=True)
end_front = start_front - 6 * IN
s.tray(cx, end_front + dr / 2, 3, 4, 0, 'red')
def dim(x, y1, y2, label, col=None, left=False):
    col = col or C['ink']
    s.add(f'<line x1="{x}" y1="{y1:.1f}" x2="{x}" y2="{y2:.1f}" stroke="{col}" stroke-width="0.8"/>')
    for y in (y1, y2): s.add(f'<line x1="{x-3}" y1="{y:.1f}" x2="{x+3}" y2="{y:.1f}" stroke="{col}" stroke-width="0.8"/>')
    s.text(x + (-5 if left else 5), (y1 + y2) / 2 + 2, label, 6, col, 'end' if left else 'start', bold=True)
dim(cx + 62, bfront, start_front, 'needs 7”')
dim(cx - 60, end_front, start_front, 'moves 6”', C['red'], left=True)
dim(cx - 60, bfront, end_front, '1” gap', C['line'], left=True)
tx, ty = cx - 45, end_front + dr + 14
s.add(f'<circle cx="{tx+20}" cy="{ty}" r="7" fill="{C["ink"]}"/>')
s.text(tx + 20, ty + 2.2, 'RUN', 4.5, '#fff', bold=True)
s.text(tx + 30, ty + 2, 'Run token', 5.5, C['ink'], 'start', italic=True)
s.text(cx, start_front + dr + 9, 'Start', 5.5, C['red'], italic=True)
s.text(cx, 14, 'Defender', 6, C['blue'], bold=True) if False else None
s.scale(8, H - 16)
print(s.save('charge_fails.svg'))
