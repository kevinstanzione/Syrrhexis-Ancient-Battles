from style import *
PW, PH, G = 160, 170, 6
s = SVG(2 * PW + G, PH, 'Removing Models at Half Strength', [
    'When a unit enters Half Strength it removes half its models, rounded down, starting from the rear rank and working forward.',
    'Special Characters are never removed: if one would be, remove another model instead and move the character into its place.',
    'Here a unit of 20 removes 10. Its Standard Bearer, in the rear rank, moves forward into the second rank.'])
col, coll = C['blue'], C['bluel']
def unit(x0, y0, keep, sb):
    w, d = 5 * 20 + 2 * B, 4 * 20 + 2 * B
    s.add(f'<rect x="{x0}" y="{y0}" width="{w}" height="{d}" rx="1.5" fill="{coll}" stroke="{col}" stroke-width="1"/>')
    s.add(f'<line x1="{x0}" y1="{y0}" x2="{x0+w}" y2="{y0}" stroke="{col}" stroke-width="2.2"/>')
    for r in range(4):
        for f in range(5):
            bx, by = x0 + B + f * 20, y0 + B + r * 20
            if (r, f) in keep:
                s.add(f'<rect x="{bx+0.6}" y="{by+0.6}" width="18.8" height="18.8" rx="1" fill="#fff" fill-opacity="0.6" stroke="{col}" stroke-width="0.5"/>')
                s.add(f'<line x1="{bx+3}" y1="{by+2.2}" x2="{bx+17}" y2="{by+2.2}" stroke="{col}" stroke-width="1.2" stroke-linecap="round"/>')
                if (r, f) == sb:
                    s.add(f'<line x1="{bx+7}" y1="{by+16}" x2="{bx+7}" y2="{by+5}" stroke="{C["ink"]}" stroke-width="0.9"/>'
                          f'<polygon points="{bx+7},{by+5} {bx+15},{by+7.5} {bx+7},{by+10}" fill="{C["red"]}"/>')
            else:
                s.add(f'<rect x="{bx+0.6}" y="{by+0.6}" width="18.8" height="18.8" rx="1" fill="none" stroke="{col}" stroke-width="0.5" stroke-dasharray="1.5 1.5" opacity="0.6"/>')
                s.add(f'<path d="M{bx+5},{by+5} L{bx+15},{by+15} M{bx+15},{by+5} L{bx+5},{by+15}" stroke="{C["line"]}" stroke-width="0.8" opacity="0.7"/>')
allm = {(r, f) for r in range(4) for f in range(5)}
s.panel(0, 0, PW, PH, 'Before: 20 models')
unit(PW / 2 - 53, 40, allm, (3, 2))
x0 = PW + G
s.panel(x0, 0, PW, PH, 'After: 10 models')
keep = {(r, f) for r in range(2) for f in range(5)} - {(1, 2)} | {(1, 2)}
unit(x0 + PW / 2 - 53, 40, keep, (1, 2))
s.text(x0 + PW / 2, 145, 'Standard Bearer moved up', 5.5, C['red'], italic=True)
s.text(PW / 2, 145, 'Standard Bearer in the rear rank', 5.5, C['red'], italic=True)
print(s.save('half_strength.svg'))
