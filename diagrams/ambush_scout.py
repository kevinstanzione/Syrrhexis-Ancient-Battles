from board import *
W, H = 340, 300
s = SVG(W, H, 'Scout and Ambush', [
    'Scouting and Ambushing units deploy after everyone else, and never in their own deployment zone. A Scout may be placed anywhere',
    'else as long as it is not within 12” of an enemy model. An Ambusher may be placed anywhere else as long as it is within 12” of an',
    'enemy unit. Scouts deploy before Ambushers, so an Ambush can answer where the Scouts went.'])
s.panel(0, 0, W, H)
ox, oy = 48, 22; S = bx(BOARD); z = bx(12 * IN); r = bx(12 * IN)
board(s, ox, oy)
s.add(f'<rect x="{ox}" y="{oy}" width="{S:.1f}" height="{z:.1f}" fill="{C["blue"]}" fill-opacity="0.12"/>')
s.add(f'<rect x="{ox}" y="{oy + S - z:.1f}" width="{S:.1f}" height="{z:.1f}" fill="{C["red"]}" fill-opacity="0.12"/>')
s.text(ox + S / 2, oy + S - 5, 'Red deployment zone: no Scouts or Ambushers here', 5, C['red'], italic=True)
s.add(f'<defs><clipPath id="cb"><rect x="{ox}" y="{oy}" width="{S:.1f}" height="{S:.1f}"/></clipPath></defs>')
blue = [(0.3, 0.25, 4, 6), (0.62, 0.22, 4, 6)]
for fx, fy, rk, fl in blue:
    x, y = ox + S * fx, oy + S * fy
    w, d = bx(fl * 20 + 2 * B), bx(rk * 20 + 2 * B)
    s.add(f'<rect x="{x - w/2 - r:.1f}" y="{y - d/2 - r:.1f}" width="{w + 2*r:.1f}" height="{d + 2*r:.1f}" rx="{r:.1f}" fill="{C["gold"]}" fill-opacity="0.45" stroke="{C["line"]}" stroke-width="0.6" stroke-dasharray="3 2" clip-path="url(#cb)"/>')
for fx, fy, rk, fl in blue:
    mini_tray(s, ox + S * fx, oy + S * fy, rk, fl, 180, 'blue')
s.text(ox + S * 0.62, oy + S * 0.43, 'within 12” of an enemy:', 5.5, C['line'], bold=True)
s.text(ox + S * 0.62, oy + S * 0.43 + 7, 'Ambush allowed, Scouts not', 5.5, C['line'], italic=True)
# red scout well clear of the 12" zone
sx, sy = ox + S * 0.82, oy + S * 0.62
mini_tray(s, sx, sy, 2, 4, 0, 'red', bw=25, bd=50)
s.text(sx, sy + 16, 'Scout: more than', 5.2, C['red'], bold=True); s.text(sx, sy + 22, '12” from every enemy', 5.2, C['red'], italic=True)
# red ambusher inside the zone, on a flank
ax, ay = ox + S * 0.08, oy + S * 0.42
mini_tray(s, ax, ay, 2, 4, 90, 'red')
s.text(ax + 10, ay - 2, 'Ambush: within', 5.2, C['red'], 'start', bold=True); s.text(ax + 10, ay + 4, '12” of an enemy unit', 5.2, C['red'], 'start', italic=True)
s.text(ox + S / 2, oy - 5, 'Blue Friendly edge', 6, C['blue'], bold=True)
s.text(ox + S / 2, oy + S + 10, 'Red Friendly edge', 6, C['red'], bold=True)
scalebar(s, W - 78, H - 10)
print(s.save('ambush_scout.svg'))
