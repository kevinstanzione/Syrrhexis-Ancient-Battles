from style import *
import math
W, H = 420, 230
s = SVG(W, H, 'The Commander', [
    'At the end of an allied unit’s Movement Step, the Commander can order it to make a Special Move (1” shift or one turn for Closed',
    'Order, 1” toward or away from the enemy side for Open Order), if it has no Action Token and is not Locked in Combat. Measure from',
    'the Commander’s unit: the order fails beyond 6”, or beyond 18” if the chosen unit has a Standard Bearer. A failed order gives a Run Token.'])
s.panel(0, 0, W, H)
s.add(f'<defs><clipPath id="cpanel"><rect x="1" y="1" width="{W-2}" height="{H-2}"/></clipPath></defs>')
k = 0.32
cx, cy = 70, 140
def ring(r_in, col, lab, ang):
    r = r_in * IN * k
    s.add(f'<circle cx="{cx}" cy="{cy}" r="{r:.1f}" fill="none" stroke="{col}" stroke-width="0.9" stroke-dasharray="4 2" clip-path="url(#cpanel)"/>')
    a = math.radians(ang)
    s.text(cx + r * math.cos(a) + 3, cy + r * math.sin(a), lab, 5.5, col, 'start', italic=True)
def small_tray(x, y):
    s.add(f'<g transform="translate({x:.1f},{y:.1f}) scale({k})">'); s.tray(0, 0, 2, 4, 0, 'blue'); s.add('</g>')
small_tray(cx, cy)
s.text(cx, cy + 16, 'Commander’s unit', 5.5, C['blue'], bold=True)
ring(6, C['green'], '6”', 135)
ring(18, C['line'], '18” with a Standard Bearer', -20)
def unit(dist, ang, label, ok, sb=False):
    a = math.radians(ang); x = cx + dist * IN * k * math.cos(a); y = cy + dist * IN * k * math.sin(a)
    small_tray(x, y)
    s.add(f'<line x1="{cx}" y1="{cy}" x2="{x:.1f}" y2="{y:.1f}" stroke="{C["ink"]}" stroke-width="0.4" stroke-dasharray="1.5 1.5"/>')
    s.text(x, y + 15, label, 5.2, C['ink'], italic=True)
    s.text(x, y - 11, 'order succeeds' if ok else 'order fails: Run Token', 5.5, C['green'] if ok else C['red'], bold=True)
    if sb:
        s.add(f'<line x1="{x+26:.1f}" y1="{y-2:.1f}" x2="{x+26:.1f}" y2="{y-16:.1f}" stroke="{C["blue"]}" stroke-width="0.8"/><path d="M{x+26:.1f},{y-16:.1f} l7,3 l-7,3 z" fill="{C["blue"]}"/>')
unit(4, -30, '4” away', True)
unit(10, 12, '10” away, no Standard Bearer', False)
unit(14, -38, '14” away, with a Standard Bearer', True, sb=True)
print(s.save('commander.svg'))
