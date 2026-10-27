from style import *
import math
W, H = 420, 250
s = SVG(W, H, 'The Commander', [
    'At the end of an allied unit’s Movement Step, the Commander can order it to make a Special Move (1” shift or one turn for Closed',
    'Order, 1” toward or away from the enemy side for Open Order), if it has no Action Token and is not Locked in Combat. Measure from',
    'the Commander’s unit: the order fails beyond 6”, or beyond 18” if the chosen unit has a Standard Bearer. A failed order gives a Run Token.'])
s.panel(0, 0, W, H)
s.add(f'<defs><clipPath id="cpanel"><rect x="1" y="1" width="{W-2}" height="{H-2}"/></clipPath></defs>')
k = 0.3
tw, td = (4 * 20 + 2 * B) * k, (2 * 20 + 2 * B) * k        # a 2 x 4 tray at this scale
cx, cy = 100, 150
def zone(r_in, col, fill):
    r = r_in * IN * k
    s.add(f'<rect x="{cx - tw/2 - r:.1f}" y="{cy - td/2 - r:.1f}" width="{tw + 2*r:.1f}" height="{td + 2*r:.1f}" rx="{r:.1f}" '
          f'fill="{fill}" fill-opacity="0.18" stroke="{col}" stroke-width="0.9" stroke-dasharray="4 2" clip-path="url(#cpanel)"/>')
zone(18, C['line'], C['gold'])
zone(6, C['green'], C['green'])
def small_tray(x, y):
    s.add(f'<g transform="translate({x:.1f},{y:.1f}) scale({k})">'); s.tray(0, 0, 2, 4, 0, 'blue'); s.add('</g>')
small_tray(cx, cy)
s.text(cx, cy + 15, 'Commander’s', 5.3, C['blue'], bold=True); s.text(cx, cy + 21, 'unit', 5.3, C['blue'], bold=True)
s.text(cx, cy - 6 * IN * k - td / 2 - 3, '6”', 6, C['green'], bold=True)
s.text(cx + 18 * IN * k + tw / 2 - 4, 16, '18” (Standard Bearer)', 5.5, C['line'], 'end', italic=True)
def gap(dx, dy):
    return math.hypot(max(0, abs(dx) - tw), max(0, abs(dy) - td))
def unit(dist, ang, label, ok, sb=False):
    a = math.radians(ang); lo, hi = 0, 400
    for _ in range(60):
        m = (lo + hi) / 2
        if gap(m * math.cos(a), m * math.sin(a)) < dist * IN * k: lo = m
        else: hi = m
    x, y = cx + lo * math.cos(a), cy + lo * math.sin(a)
    small_tray(x, y)
    s.text(x, y + 14, label, 5.2, C['ink'], italic=True)
    s.text(x, y - 10, 'order succeeds' if ok else 'order fails: Run Token', 5.5, C['green'] if ok else C['red'], bold=True)
    if sb:
        fx = x - tw/2 - 12
        s.add(f'<line x1="{fx:.1f}" y1="{y+5:.1f}" x2="{fx:.1f}" y2="{y-7:.1f}" stroke="{C["blue"]}" stroke-width="0.8"/>'
              f'<path d="M{fx:.1f},{y-7:.1f} l7,3 l-7,3 z" fill="{C["blue"]}"/>')
unit(3, -40, '3” away', True)
unit(10, 18, '10” away, no Standard Bearer', False)
unit(14, -28, '14” away, Standard Bearer', True, sb=True)
print(s.save('commander.svg'))
