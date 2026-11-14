from style import *
import math
W, H = 420, 250
s = SVG(W, H, 'The Commander', [
    'At the end of an allied unit’s Movement Step, the Commander can order it to make a Special Move (1” shift or one turn for Closed',
    'Order, 1” toward or away from the enemy side for Open Order, 1” directly forward or backwards for Chariots and Elephants), if it has',
    'no Action Token and is not Locked in Combat. Measure from the Commander’s unit: the order fails beyond 6”, or beyond 18” if the',
    'chosen unit has a Standard Bearer. A failed order gives a Run Token.'])
s.panel(0, 0, W, H)
s.add(f'<defs><clipPath id="cpanel"><rect x="1" y="1" width="{W-2}" height="{H-2}"/></clipPath></defs>')
k = 0.3
tw, td = (4 * 20 + 2 * B) * k, (2 * 20 + 2 * B) * k        # a 2 x 4 tray at this scale
cx, cy = 90, 125


def halo(x, y, t, size, col, anchor='middle', italic=False, bold=False, bg=None):
    """Text on a small backing box so it reads cleanly where it sits on a zone line."""
    w = len(t) * size * (0.56 if bold else 0.5) + 3
    x0 = {'middle': x - w / 2, 'start': x - 1.5, 'end': x - w + 1.5}[anchor]
    s.add(f'<rect x="{x0:.1f}" y="{y - size * 0.8:.1f}" width="{w:.1f}" height="{size * 1.1:.1f}" rx="1" fill="{bg or C["paper"]}"/>')
    s.text(x, y, t, size, col, anchor, italic=italic, bold=bold)


def zone(r_in, col, fill):
    r = r_in * IN * k
    s.add(f'<rect x="{cx - tw/2 - r:.1f}" y="{cy - td/2 - r:.1f}" width="{tw + 2*r:.1f}" height="{td + 2*r:.1f}" rx="{r:.1f}" '
          f'fill="{fill}" fill-opacity="0.18" stroke="{col}" stroke-width="0.9" stroke-dasharray="4 2" clip-path="url(#cpanel)"/>')
    return cx + tw / 2 + r                                   # x of the zone's right-hand edge


x18 = zone(18, C['line'], C['gold'])
x6 = zone(6, C['green'], C['green'])


def small_tray(x, y):
    s.add(f'<g transform="translate({x:.1f},{y:.1f}) scale({k})">'); s.tray(0, 0, 2, 4, 0, 'blue'); s.add('</g>')


def badge(x, y, n, col):
    s.add(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4.6" fill="{col}" stroke="{C["paper"]}" stroke-width="1"/>')
    s.text(x, y + 2, str(n), 5.8, '#fff', bold=True)


# Commander's unit
small_tray(cx, cy)
s.text(cx, cy + 14, 'Commander’s unit', 5.3, C['blue'], bold=True)

# Zone labels, sitting on each zone's right-hand edge
halo(x6, cy + 2, '6”', 6.5, C['green'], bold=True)
s.text(x18 + 4, cy - 2, '18”', 6.5, C['line'], 'start', bold=True)
s.text(x18 + 4, cy + 6, 'with a Standard Bearer', 5.2, C['line'], 'start', italic=True)

# Example units: centre placed along a bearing so the nearest tray edges are exactly `dist` inches apart
def gap(dx, dy):
    return math.hypot(max(0, abs(dx) - tw), max(0, abs(dy) - td))


def place(dist, ang):
    a = math.radians(ang); lo, hi = 0, 400
    for _ in range(60):
        m = (lo + hi) / 2
        if gap(m * math.cos(a), m * math.sin(a)) < dist * IN * k: lo = m
        else: hi = m
    return cx + lo * math.cos(a), cy + lo * math.sin(a)


def flag(x, y):
    fx = x + tw / 2 + 3
    s.add(f'<line x1="{fx:.1f}" y1="{y+5:.1f}" x2="{fx:.1f}" y2="{y-7:.1f}" stroke="{C["blue"]}" stroke-width="0.8"/>'
          f'<path d="M{fx:.1f},{y-7:.1f} l6,2.5 l-6,2.5 z" fill="{C["blue"]}"/>')


units = [
    (place(3, -90), 1, C['green'], False),     # straight ahead, well inside 6"
    (place(10, 40), 2, C['red'], False),       # outside 6", inside 18", no Standard Bearer
    (place(12, -30), 3, C['green'], True),     # inside 18" with a Standard Bearer
]
for (x, y), n, col, sb in units:
    small_tray(x, y)
    if sb: flag(x, y)
    badge(x - tw / 2 - 6, y - td / 2 - 1, n, col)

# Key, in the open space beyond the 18" zone
kx, ky = x18 + 16, 30
s.text(kx - 8, ky - 10, 'Ordering a unit', 6.2, C['ink'], 'start', bold=True)
key = [(1, C['green'], '3” away', 'Order succeeds.'),
       (2, C['red'], '10” away, no Standard Bearer', 'Order fails: Run Token.'),
       (3, C['green'], '12” away, Standard Bearer', 'Order succeeds.')]
for i, (n, col, a, b) in enumerate(key):
    y = ky + i * 22
    badge(kx - 3, y - 2, n, col)
    s.text(kx + 5, y, a, 5.4, C['ink'], 'start', italic=True)
    s.text(kx + 5, y + 8, b, 5.4, col, 'start', bold=True)
print(s.save('commander.svg'))
