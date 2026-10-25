from style import *
W, H = 340, 230
s = SVG(W, H, 'Line of Sight and Cover', [
    'Dense Brush hides 4 of the target’s 10 models, so 60% of the defending unit is seen (the ≥50% row). Each archer checks whether',
    'it can see at least half the target; only terrain and units in between block its view. The two left-hand files are blocked,',
    'so 6 of 8 (75%) can see (the ≥50% column). The table gives Cover. Because battlefield objects cause it, the archers lose half',
    'their shooting attacks and suffer -1 Accuracy.'])
s.panel(0, 0, W, H)
# target
tcx, tcy = 120, 45
s.tray(tcx, tcy, 2, 5, 180, 'blue', name=None)
s.text(tcx, 12, 'Target: 10 models', 6, C['blue'], bold=True)
# dense brush in front of the left part of the target
bx0, by0, bw, bh = 60, 74, 65, 22
s.add(f'<rect x="{bx0}" y="{by0}" width="{bw}" height="{bh}" rx="8" fill="{C["green"]}" fill-opacity="0.55" stroke="{C["green"]}" stroke-width="0.9"/>')
for x, y in [(70, 82), (84, 89), (98, 81), (112, 88), (118, 80)]:
    s.add(f'<circle cx="{x}" cy="{y}" r="5" fill="{C["green"]}" opacity="0.8"/>')
s.text(bx0 - 4, by0 + bh / 2 + 2, 'Dense Brush', 5.5, C['green'], 'end', italic=True)
# archers
acx, acy = 135, 190
s.tray(acx, acy, 2, 4, 0, 'red', name=None)
s.text(acx, H - 8, 'Archers: 8 models', 6, C['red'], bold=True)
afy = acy - 23 + B
tl, tr = (tcx - 53, tcy + 23), (tcx + 53, tcy + 23)
ty = tcy + 23
def line(x0, x1, dashed=False):
    st = f'stroke="{C["line"]}" stroke-dasharray="2 2"' if dashed else f'stroke="{C["ink"]}"'
    s.add(f'<line x1="{x0}" y1="{afy}" x2="{x1}" y2="{ty}" {st} stroke-width="0.6"/>')
la, ra = 105, 165          # a left and a right front-rank archer
line(la, 67, True); line(la, 133); line(la, 173)
line(ra, 67, True); line(ra, 110); line(ra, 173)
s.text(la - 8, afy - 14, 'sees 40%:', 5.5, C['line'], 'end', bold=True)
s.text(la - 8, afy - 7, 'blocked', 5.5, C['line'], 'end', italic=True)
s.text(ra + 8, afy - 14, 'sees 60%:', 5.5, C['ink'], 'start', bold=True)
s.text(ra + 8, afy - 7, 'can see', 5.5, C['ink'], 'start', italic=True)
# mini cover table
x0, y0, cw, ch = 232, 40, 20, 13
cols = ['100%', '≥50%', '≥25%', '≥0%']
grid = [['None', 'Light', 'Cover', 'Heavy'], ['Light', 'Cover', 'Heavy', 'No'], ['Cover', 'Heavy', 'No', 'No'], ['Heavy', 'No', 'No', 'No']]
s.text(x0 + 24 + 2 * cw, y0 - 14, '% Attacking Unit Can See', 5, C['ink'], bold=True)
for j, c in enumerate(cols): s.text(x0 + 24 + j * cw + cw / 2, y0 - 3, c, 4.5, C['ink'])
s.text(x0 + 4, y0 + 2 * ch, '% Defending Unit Seen', 5, C['ink'], bold=True, rot=-90)
for i, c in enumerate(cols):
    s.text(x0 + 16, y0 + i * ch + ch / 2 + 1.6, c, 4.5, C['ink'], 'middle')
    for j in range(4):
        hl = (i, j) == (1, 1)
        fill = C['gold'] if hl else '#fff'
        s.add(f'<rect x="{x0 + 24 + j*cw}" y="{y0 + i*ch}" width="{cw}" height="{ch}" fill="{fill}" stroke="{C["line"]}" stroke-width="{1.2 if hl else 0.5}"/>')
        s.text(x0 + 24 + j * cw + cw / 2, y0 + i * ch + ch / 2 + 1.6, grid[i][j], 4.5, C['ink'], bold=hl)
s.text(x0 + 24 + 2 * cw, y0 + 4 * ch + 9, 'No = cannot shoot', 4.5, C['line'], italic=True)
s.scale(8, H - 22) if False else s.scale(W - 60, H - 12)
print(s.save('los_cover.svg'))
