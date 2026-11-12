"""Build the Syrrhēxis rulebook PDF (8x10, two-column) from rulebook/src.

The rulebook source is one HTML fragment per chapter in rulebook/src, read in file-name order.
Each fragment starts with its <h1>; images point at ../../diagrams/*.svg.

    python3 tools/rulebook-pdf/build.py

writes rulebook/Syrrhexis_Rulebook.pdf. Fonts come from tools/fonts (or $SYRRHEXIS_FONTS).
"""
import glob
import html as H
import logging
import os
import re

import weasyprint

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
SRC = os.path.join(ROOT, 'rulebook', 'src')
OUT = os.path.join(ROOT, 'rulebook', 'Syrrhexis_Rulebook.pdf')
FONT_DIR = os.environ.get('SYRRHEXIS_FONTS', os.path.join(ROOT, 'tools', 'fonts'))
TITLE = 'Syrrhēxis: Ancient Battles'
COVER_VERSION = 'Core Rules · Version 0.3.1 · November 2026'
TOC_SKIP = {'Update History'}

FACES = [('Cinzel', 'Cinzel', 400, 'normal'), ('Cinzel', 'Cinzel', 600, 'normal'), ('Cinzel', 'Cinzel', 700, 'normal'),
         ('EB Garamond', 'EBGaramond', 400, 'normal'), ('EB Garamond', 'EBGaramond', 600, 'normal'), ('EB Garamond', 'EBGaramond', 700, 'normal'),
         ('EB Garamond', 'EBGaramond-Italic', 400, 'italic'), ('EB Garamond', 'EBGaramond-Italic', 600, 'italic'),
         ('Source Sans 3', 'SourceSans3', 400, 'normal'), ('Source Sans 3', 'SourceSans3', 600, 'normal'), ('Source Sans 3', 'SourceSans3', 700, 'normal')]


def assemble():
    files = sorted(glob.glob(os.path.join(SRC, '*.html')))
    content = '\n'.join(open(f, encoding='utf-8').read() for f in files)
    ids = re.findall(r'<h[1-6] id="([^"]+)"', content)
    dup = {i for i in ids if ids.count(i) > 1}
    assert not dup, ('duplicate heading ids', dup)
    broken = sorted(set(re.findall(r'href="#([^"]+)"', content)) - set(ids))
    if broken:
        print('warning: cross-references to missing headings:', broken)
    toc = [(int(l), i, t) for l, i, t in re.findall(r'<h([12]) id="([^"]+)"[^>]*>([^<]+)</h\1>', content)]
    toc_html = ''.join(f'<li class="t{l}"><a href="#{i}">{t}</a></li>' for l, i, t in toc if H.unescape(t) not in TOC_SKIP)
    fonts = '<style>' + ''.join(
        f"@font-face{{font-family:'{fam}';src:url('file://{FONT_DIR}/{fn}-{w}.ttf');font-weight:{w};font-style:{sty}}}"
        for fam, fn, w, sty in FACES) + '</style>'
    return f'''<!doctype html><html><head><meta charset="utf-8">{fonts}
<link rel="stylesheet" href="file://{HERE}/book.css"><title>{TITLE}</title></head><body>
<section class="cover">
  <div class="frame">
    <div class="kicker">Rules for Wargaming in 1/72 Scale</div>
    <div class="ctitle">Syrrhēxis</div>
    <div class="csub">Ancient Battles</div>
    <div class="cgreek">σύρρηξις · the clash of battle lines</div>
    <div class="cera">From the Bronze Age to the end of Classical Antiquity</div>
    <div class="cauth">by Kevin Stanzione</div>
    <div class="cver">{COVER_VERSION}</div>
  </div>
</section>
<section class="toc"><h1 class="toch">Contents</h1><ul>{toc_html}</ul></section>
<main>{content}</main>
</body></html>'''


def render(s):
    return weasyprint.HTML(string=s, base_url=SRC + '/').render()


def headings(s):
    return [H.unescape(t) for t in re.findall(r'<h[1-4][^>]*>([^<]+)</h[1-4]>', s)]


def missing(doc, heads):
    """Headings that never made it onto a page (WeasyPrint can drop content after some column splits)."""
    seen = set()

    def walk(b):
        if getattr(b, 'element_tag', '') in ('h1', 'h2', 'h3', 'h4') and b.element is not None:
            seen.add(''.join(b.element.itertext()).strip())
        for c in getattr(b, 'children', []) or []:
            walk(c)
    for p in doc.pages:
        walk(p._page_box)
    return [h for h in heads if h.strip() not in seen]


def split(s, hid):
    return re.sub(rf'<(h1) id="{hid}">', rf'</main><main class="pb"><\1 class="brk" id="{hid}">', s, count=1)


def main():
    logging.getLogger('weasyprint').setLevel(logging.ERROR)
    src = assemble()
    heads = headings(src)
    bad = set()
    for it in range(6):
        doc = render(src)
        low = []
        for page in doc.pages:
            h = page._page_box.height + page._page_box.margin_top

            def walk(b):
                el = getattr(b, 'element', None)
                if el is not None and getattr(b, 'element_tag', '') == 'h1' and b.position_y > 0.75 * h:
                    low.append(el.get('id'))
                for c in getattr(b, 'children', []) or []:
                    walk(c)
            walk(page._page_box)
        low = [x for x in dict.fromkeys(low) if x and x not in bad and f'class="brk" id="{x}"' not in src]
        print('pass', it, len(doc.pages), 'pages; low chapter headings:', low)
        if not low:
            break
        for hid in low:
            trial = split(src, hid)
            if missing(render(trial), heads):
                bad.add(hid)
                print('  skipped split before', hid, '(would drop content)')
            else:
                src = trial
    miss = missing(doc, heads)
    assert not miss, ('content dropped', miss[:5])
    doc.write_pdf(OUT)
    print('ok', len(doc.pages), 'pages ->', OUT)


if __name__ == '__main__':
    main()
