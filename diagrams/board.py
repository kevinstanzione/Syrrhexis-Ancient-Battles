"""Helpers for scaled battlefield diagrams (whole-board views)."""
from style import *
K = 0.2                 # SVG units per mm on the table
BOARD = 48 * IN         # 4' x 4'
def bx(mm): return mm * K
def board(s, ox, oy, mid=True):
    s.add(f'<rect x="{ox}" y="{oy}" width="{bx(BOARD):.1f}" height="{bx(BOARD):.1f}" fill="{C["paper"]}" stroke="{C["ink"]}" stroke-width="1"/>')
    if mid:
        y = oy + bx(BOARD) / 2
        s.add(f'<line x1="{ox}" y1="{y:.1f}" x2="{ox + bx(BOARD):.1f}" y2="{y:.1f}" stroke="{C["line"]}" stroke-width="0.6" stroke-dasharray="1.5 2"/>')
def scaled(s, ox, oy):
    s.add(f'<g transform="translate({ox},{oy}) scale({K})">')
def end(s): s.add('</g>')
def scalebar(s, x, y, inches=12):
    w = bx(inches * IN)
    s.add(f'<rect x="{x}" y="{y}" width="{w/2:.1f}" height="2.5" fill="{C["ink"]}"/><rect x="{x + w/2:.1f}" y="{y}" width="{w/2:.1f}" height="2.5" fill="#fff" stroke="{C["ink"]}" stroke-width="0.5"/>')
    s.text(x, y - 2, '0', 5, C['ink']); s.text(x + w / 2, y - 2, f'{inches//2}"', 5, C['ink']); s.text(x + w, y - 2, f'{inches}"', 5, C['ink'])

def mini_tray(s, x, y, ranks, files, ang=0, side='red', ghost=False, k=K, bw=20, bd=20):
    """A tray drawn at board scale; (x, y) are screen coordinates of its centre."""
    col, coll = (C['red'], C['redl']) if side == 'red' else (C['blue'], C['bluel'])
    w, d = (files * bw + 2 * B) * k, (ranks * bd + 2 * B) * k
    op = ' opacity="0.35"' if ghost else ''
    g = [f'<g transform="translate({x:.1f},{y:.1f}) rotate({ang})"{op}>',
         f'<rect x="{-w/2:.1f}" y="{-d/2:.1f}" width="{w:.1f}" height="{d:.1f}" fill="{coll}" stroke="{col}" stroke-width="0.7"{" stroke-dasharray=\"2 1.5\"" if ghost else ""}/>']
    for f in range(1, files):
        xx = -w / 2 + (B + f * bw) * k
        g.append(f'<line x1="{xx:.1f}" y1="{-d/2:.1f}" x2="{xx:.1f}" y2="{d/2:.1f}" stroke="{col}" stroke-width="0.25"/>')
    for r in range(1, ranks):
        yy = -d / 2 + (B + r * bd) * k
        g.append(f'<line x1="{-w/2:.1f}" y1="{yy:.1f}" x2="{w/2:.1f}" y2="{yy:.1f}" stroke="{col}" stroke-width="0.25"/>')
    if not ghost:
        g.append(f'<line x1="{-w/2:.1f}" y1="{-d/2:.1f}" x2="{w/2:.1f}" y2="{-d/2:.1f}" stroke="{col}" stroke-width="1.6"/>')
    g.append('</g>'); s.add(''.join(g))
