"""Shared token artwork for Syrrhēxis diagrams (sizes in SVG units = mm on the table)."""
import math
from style import C

GOLD, GOLDD = '#e2c26b', '#8a6a1c'
SILVER, SILVERD = '#d4d4d0', '#6e6e68'
SAND, SANDD = '#ecdcae', '#9b8452'
BRONZE, BRONZED = '#cf8f55', '#7a4a22'
BREAK, BREAKD = '#9e2f2b', '#5a1714'


def poly(n, r, rot=-90):
    return ' '.join(f'{r*math.cos(math.radians(rot + i*360/n)):.2f},{r*math.sin(math.radians(rot + i*360/n)):.2f}' for i in range(n))


def _label(t, size, col, y=0):
    return (f'<text x="0" y="{y + size*0.35:.2f}" font-size="{size}" fill="{col}" text-anchor="middle" '
            f'font-weight="bold" font-family="Georgia, serif">{t}</text>')


def _emblem(col, r):
    # crossed spears, the face-down mark
    a = r * 0.55
    return (f'<g stroke="{col}" stroke-width="{r*0.09:.2f}" stroke-linecap="round">'
            f'<line x1="{-a}" y1="{a}" x2="{a}" y2="{-a}"/><line x1="{a}" y1="{a}" x2="{-a}" y2="{-a}"/></g>'
            f'<path d="M{a},{-a} l{-r*0.22:.2f},{r*0.02:.2f} l{r*0.2:.2f},{r*0.2:.2f} z" fill="{col}"/>'
            f'<path d="M{-a},{-a} l{r*0.22:.2f},{r*0.02:.2f} l{-r*0.2:.2f},{r*0.2:.2f} z" fill="{col}"/>')


def order_token(s, x, y, n=None, r=9):
    body = f'<polygon points="{poly(7, r)}" fill="{GOLD}" stroke="{GOLDD}" stroke-width="1"/>'
    body += f'<polygon points="{poly(7, r*0.78)}" fill="none" stroke="{GOLDD}" stroke-width="0.4"/>'
    body += _label(n, r * 1.05, GOLDD) if n is not None else _emblem(GOLDD, r)
    s.add(f'<g transform="translate({x:.1f},{y:.1f})">{body}</g>')


def pass_token(s, x, y, face=True, r=9):
    body = f'<polygon points="{poly(8, r, -67.5)}" fill="{SILVER}" stroke="{SILVERD}" stroke-width="1"/>'
    body += f'<polygon points="{poly(8, r*0.78, -67.5)}" fill="none" stroke="{SILVERD}" stroke-width="0.4"/>'
    body += _label('PASS', r * 0.48, SILVERD) if face else _emblem(SILVERD, r)
    s.add(f'<g transform="translate({x:.1f},{y:.1f})">{body}</g>')


def diamond_token(s, x, y, text, r=10):
    pts = f'0,{-r} {r*1.25},0 0,{r} {-r*1.25},0'
    body = f'<polygon points="{pts}" fill="{SAND}" stroke="{SANDD}" stroke-width="1"/>'
    body += f'<polygon points="0,{-r*0.78} {r*0.98},0 0,{r*0.78} {-r*0.98},0" fill="none" stroke="{SANDD}" stroke-width="0.4"/>'
    body += _label(text.upper(), r * 0.42, SANDD)
    s.add(f'<g transform="translate({x:.1f},{y:.1f})">{body}</g>')


def round_token(s, x, y, text, r=9):
    body = f'<circle r="{r}" fill="{BRONZE}" stroke="{BRONZED}" stroke-width="1"/>'
    body += f'<circle r="{r*0.78}" fill="none" stroke="{BRONZED}" stroke-width="0.4"/>'
    body += _label(text.upper(), r * (0.42 if len(text) <= 4 else 0.3), '#fff8ec')
    s.add(f'<g transform="translate({x:.1f},{y:.1f})">{body}</g>')


def action_token(s, x, y, name, r=None):
    """Hold/Flee share a diamond token; Charge/Run share a round token."""
    if name in ('Hold', 'Flee'):
        diamond_token(s, x, y, name, r or 7)
    else:
        round_token(s, x, y, name, r or 6.5)


def break_token(s, x, y, r=6):
    body = f'<polygon points="{poly(3, r*1.25, -90)}" fill="{BREAK}" stroke="{BREAKD}" stroke-width="0.9" stroke-linejoin="round"/>'
    body += (f'<path d="M0,{-r*0.75:.2f} l{-r*0.22:.2f},{r*0.45:.2f} l{r*0.3:.2f},{r*0.12:.2f} l{-r*0.25:.2f},{r*0.55:.2f}" '
             f'fill="none" stroke="#f3d9d4" stroke-width="{r*0.13:.2f}" stroke-linejoin="round"/>')
    s.add(f'<g transform="translate({x:.1f},{y:.1f})">{body}</g>')


def flip(s, x, y1, y2, col=None):
    """Straight 'flip over' arrow, centred on x, with a small label to its right."""
    col = col or C['red']
    s.arrow(x, y1, x, y2, col, w=1.1)
    s.text(x + 4, (y1 + y2) / 2 + 2, 'flip', 4.8, col, 'start', italic=True)
