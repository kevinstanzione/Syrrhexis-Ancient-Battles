from board import *
from tokens import action_token
k = 0.3
W, H = 330, 225
s = SVG(W, H, 'Fleeing and Rallying', [
    'In the Morale Phase, a unit with a Flee Token moves up to twice its Move toward its Friendly board edge, as far as it can, and its',
    'player loses Army Morale equal to its Unit Strength. A fleeing unit that touches its Friendly edge is removed, losing Army Morale',
    'equal to the base Training of its remaining models. During its activation, a unit with a Hold Token may try to Rally a fleeing',
    'friendly unit within 12”; a fleeing unit may also try to Rally itself.'])
s.panel(0, 0, W, H)
edge = H - 32
s.add(f'<line x1="8" y1="{edge}" x2="{W-8}" y2="{edge}" stroke="{C["red"]}" stroke-width="2.2"/>')
s.text(W / 2, edge + 10, 'Red Friendly edge', 6, C['red'], bold=True)
def mm(v): return v * k
def token(x, y, t, col):
    s.add(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="6.5" fill="{col}"/>'); s.text(x, y + 1.8, t, 3.8, '#fff', bold=True)
# 1. a unit (Move 6) flees 12" toward its edge
fx, fy0 = 60, 22
fy1 = fy0 + mm(12 * IN)
mini_tray(s, fx, fy0 + mm(23), 2, 4, 180, 'red', ghost=True, k=k)
mini_tray(s, fx, fy1 + mm(23), 2, 4, 180, 'red', k=k)
s.arrow(fx + 20, fy0 + mm(23), fx + 20, fy1 + mm(23) - 2, C['red'], w=0.9)
s.text(fx + 24, (fy0 + fy1) / 2 + mm(23), 'flees 12”', 5.5, C['red'], 'start', bold=True)
s.text(fx + 24, (fy0 + fy1) / 2 + mm(23) + 7, '(2x Move 6)', 5, C['red'], 'start', italic=True)
action_token(s, fx, fy1 + mm(23) + 17, 'Flee', 8)
# 2. a fleeing unit that reaches the edge is removed
rx = 290
mini_tray(s, rx, edge - mm(23), 2, 3, 180, 'red', ghost=True, k=k)
s.text(rx, edge - mm(46) - 10, 'touches the edge:', 5, C['red'], italic=True)
s.text(rx, edge - mm(46) - 3, 'removed', 5.5, C['red'], bold=True)
# 3. a unit with a Hold token and its 12" rally range
hx, hy = 150, 118
w, d = mm(86), mm(46); R = mm(12 * IN)
s.add(f'<clipPath id="table"><rect x="0" y="0" width="{W}" height="{edge}"/></clipPath>')
s.add(f'<rect clip-path="url(#table)" x="{hx - w/2 - R:.1f}" y="{hy - d/2 - R:.1f}" width="{w + 2*R:.1f}" height="{d + 2*R:.1f}" rx="{R:.1f}" fill="{C["green"]}" fill-opacity="0.07" stroke="{C["green"]}" stroke-width="0.9" stroke-dasharray="4 3"/>')
mini_tray(s, hx, hy, 2, 4, 0, 'red', k=k)
action_token(s, hx + w / 2 + 14, hy, 'Hold', 8)
s.text(hx, hy - d / 2 - R + 18, '12” Rally range', 5.5, C['green'], bold=True)
s.text(fx + 16, fy1 + mm(23) + 19, 'within 12”: can be Rallied', 5, C['green'], 'start', italic=True)
s.add(f'<rect x="0.4" y="0.4" width="{W-0.8}" height="{H-0.8}" fill="none" stroke="{C["line"]}" stroke-width="0.8"/>')
w12 = mm(12 * IN)
s.add(f'<rect x="{W-8-w12:.1f}" y="{12}" width="{w12/2:.1f}" height="2.5" fill="{C["ink"]}"/><rect x="{W-8-w12/2:.1f}" y="12" width="{w12/2:.1f}" height="2.5" fill="#fff" stroke="{C["ink"]}" stroke-width="0.5"/>')
s.text(W - 8 - w12, 10, '0', 5, C['ink']); s.text(W - 8 - w12 / 2, 10, '6"', 5, C['ink']); s.text(W - 8, 10, '12"', 5, C['ink'])
print(s.save('fleeing.svg'))
