"""Shared drawing style for Syrrhēxis rules diagrams. 1 SVG unit = 1 mm on the table."""
import math, os

IN = 25.4
B = 3  # tray border
C = {'ink': '#2b2b2b', 'paper': '#f6f1e6', 'blue': '#3f6fb0', 'bluel': '#c9d8ee', 'red': '#b4473a', 'redl': '#f0cfc9',
     'gold': '#efe2bf', 'flank': '#e4e0d6', 'rear': '#d9d4c6', 'line': '#6b6253', 'green': '#4f7f4a', 'terrain': '#9aa37a', 'terrainl': '#d8dcc0'}
HERE = os.path.dirname(os.path.abspath(__file__))


class SVG:
    def __init__(self, w, h, title=None, caption=()):
        self.w, self.h, self.title, self.caption = w, h, title, list(caption)
        self.parts = []

    def add(self, s): self.parts.append(s)

    def text(self, x, y, t, size=6.5, col=None, anchor='middle', italic=False, bold=False, rot=None):
        tr = f' transform="rotate({rot} {x} {y})"' if rot is not None else ''
        self.add(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{col or C["line"]}" text-anchor="{anchor}"'
                 f'{" font-style=\"italic\"" if italic else ""}{" font-weight=\"bold\"" if bold else ""}{tr}>{t}</text>')

    def panel(self, x, y, w, h, title=None, fill=None):
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill or C["paper"]}" stroke="{C["line"]}" stroke-width="0.8"/>')
        if title: self.text(x + 5, y + 10, title, 7, C['ink'], 'start', bold=True)

    def arrow(self, x1, y1, x2, y2, col=None, dashed=False, w=1.3, label=None, loff=(0, -3)):
        col = col or C['red']
        mid = 'arrow_' + col.strip('#')
        self._marker(col)
        self.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{col}" stroke-width="{w}"'
                 f'{" stroke-dasharray=\"3 2\"" if dashed else ""} marker-end="url(#{mid})"/>')
        if label: self.text((x1 + x2) / 2 + loff[0], (y1 + y2) / 2 + loff[1], label, 5.5, col)

    def arc_arrow(self, cx, cy, r, a0, a1, col=None):
        col = col or C['red']; mid = 'arrow_' + col.strip('#'); self._marker(col)
        p = lambda a: (cx + r * math.cos(math.radians(a)), cy + r * math.sin(math.radians(a)))
        (x0, y0), (x1, y1) = p(a0), p(a1)
        sweep = 1 if a1 > a0 else 0
        self.add(f'<path d="M{x0:.1f},{y0:.1f} A{r},{r} 0 0 {sweep} {x1:.1f},{y1:.1f}" fill="none" stroke="{col}" stroke-width="1.2" marker-end="url(#{mid})"/>')

    _markers = None
    def _marker(self, col):
        if self._markers is None: self._markers = set()
        self._markers.add(col)

    def tray(self, x, y, ranks, files, ang=0, side='red', bw=20, bd=20, ghost=False, name=None, outline=False, hl=0):
        """Closed Order tray centred on (x, y); front edge at the top before rotation."""
        col, coll = (C['red'], C['redl']) if side == 'red' else (C['blue'], C['bluel'])
        w, d = files * bw + 2 * B, ranks * bd + 2 * B
        op = ' opacity="0.35"' if ghost else ''
        dash = ' stroke-dasharray="3 2"' if ghost or outline else ''
        fill = 'none' if outline else coll
        g = [f'<g transform="translate({x:.1f},{y:.1f}) rotate({ang:.1f})"{op}>',
             f'<rect x="{-w/2}" y="{-d/2}" width="{w}" height="{d}" rx="1.5" fill="{fill}" stroke="{col}" stroke-width="{1.2 if outline else 1}"{dash}/>']
        if outline:
            g.append(f'<line x1="{-w/2}" y1="{-d/2}" x2="{w/2}" y2="{-d/2}" stroke="{col}" stroke-width="2" stroke-dasharray="3 2"/>')
        if not ghost and not outline:
            for r in range(ranks):
                for f in range(files):
                    bx, by = -w / 2 + B + f * bw, -d / 2 + B + r * bd
                    hf = f'fill="{col}" fill-opacity="0.55"' if r < hl else 'fill="#fff" fill-opacity="0.55"'
                    g.append(f'<rect x="{bx+0.6}" y="{by+0.6}" width="{bw-1.2}" height="{bd-1.2}" rx="1" {hf} stroke="{col}" stroke-width="0.5"/>')
                    g.append(f'<line x1="{bx+3}" y1="{by+2.2}" x2="{bx+bw-3}" y2="{by+2.2}" stroke="{col}" stroke-width="1.2" stroke-linecap="round"/>')
            g.append(f'<line x1="{-w/2}" y1="{-d/2}" x2="{w/2}" y2="{-d/2}" stroke="{col}" stroke-width="2.2"/>')
        if name: g.append(f'<text x="0" y="{d/2+8}" font-size="6" text-anchor="middle" fill="{col}" font-weight="bold">{name}</text>')
        g.append('</g>')
        self.add(''.join(g))
        return w, d

    def model(self, x, y, side='red', face=None, ang=None, dashed=False, ghost=False, bw=20, hl=False):
        """Open Order model on a square base; front faces the point `face` or the angle `ang` (0 = up)."""
        col, coll = (C['red'], C['redl']) if side == 'red' else (C['blue'], C['bluel'])
        if ang is None:
            ang = math.degrees(math.atan2(face[1] - y, face[0] - x)) + 90 if face else 0
        da = ' stroke-dasharray="2 1.5"' if dashed or ghost else ''
        op = ' opacity="0.35"' if ghost else ''
        self.add(f'<g transform="translate({x:.1f},{y:.1f}) rotate({ang:.1f})"{op}>'
                 f'<rect x="{-bw/2+0.6}" y="{-bw/2+0.6}" width="{bw-1.2}" height="{bw-1.2}" rx="1" fill="{col if hl else coll}" fill-opacity="{0.55 if hl else 1}" stroke="{col}" stroke-width="0.9"{da}/>'
                 + ('' if ghost else f'<line x1="{-bw/2+3}" y1="{-bw/2+2.2}" x2="{bw/2-3}" y2="{-bw/2+2.2}" stroke="{col}" stroke-width="1.2" stroke-linecap="round"/>')
                 + '</g>')

    def scale(self, x, y, inches=2):
        for i in range(inches):
            fill = C['ink'] if i % 2 == 0 else '#fff'
            self.add(f'<rect x="{x+i*IN:.1f}" y="{y}" width="{IN}" height="3" fill="{fill}" stroke="{C["ink"]}" stroke-width="0.5"/>')
        for i in range(inches + 1):
            self.text(x + i * IN, y - 2, '0' if i == 0 else f'{i}"', 5, C['ink'])

    def save(self, name):
        import textwrap
        self.caption = textwrap.wrap(' '.join(self.caption), int(self.w / 3.4)) if self.caption else []
        cap_h = (14 if self.title else 0) + 8 * len(self.caption) + (6 if self.caption else 0)
        H = self.h + cap_h
        defs = ''.join(f'<marker id="arrow_{c.strip("#")}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{c}"/></marker>' for c in (self._markers or []))
        out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {H}" width="{self.w*2.4:.0f}" height="{H*2.4:.0f}" font-family="Georgia, \'Times New Roman\', serif">',
               f'<defs>{defs}</defs>', f'<rect width="{self.w}" height="{H}" fill="#fff"/>'] + self.parts
        y = self.h + 13
        if self.title:
            out.append(f'<text x="4" y="{y}" font-size="8" font-weight="bold" fill="{C["ink"]}">{self.title}</text>'); y += 11
        for line in self.caption:
            out.append(f'<text x="4" y="{y}" font-size="6" fill="{C["ink"]}">{line}</text>'); y += 8
        out.append('</svg>')
        path = os.path.join(HERE, name)
        open(path, 'w').write('\n'.join(out))
        return path
