import weasyprint, logging, re, html as H
logging.getLogger('weasyprint').setLevel(logging.ERROR)
src = open('book.html').read()
HEADS = [H.unescape(t) for t in re.findall(r'<h[1-4][^>]*>([^<]+)</h[1-4]>', src)]

def render(s):
    return weasyprint.HTML(string=s, base_url='.').render()

def missing(doc):
    """Headings that never made it onto a page (WeasyPrint can drop content after some column splits)."""
    seen = set()
    def walk(b):
        if getattr(b, 'element_tag', '') in ('h1', 'h2', 'h3', 'h4') and b.element is not None:
            seen.add(''.join(b.element.itertext()).strip())
        for c in getattr(b, 'children', []) or []:
            walk(c)
    for p in doc.pages:
        walk(p._page_box)
    return [h for h in HEADS if h.strip() not in seen]

def split(s, hid):
    return re.sub(rf'<(h1) id="{hid}">', rf'</main><main class="pb"><\1 class="brk" id="{hid}">', s, count=1)

bad_splits = set()
for it in range(6):
    doc = render(src)
    low = []
    for page in doc.pages:
        H_ = page._page_box.height + page._page_box.margin_top
        def walk(b):
            el = getattr(b, 'element', None)
            if el is not None and getattr(b, 'element_tag', '') == 'h1' and b.position_y > 0.75 * H_:
                low.append(el.get('id'))
            for c in getattr(b, 'children', []) or []:
                walk(c)
        walk(page._page_box)
    low = [x for x in dict.fromkeys(low) if x and x not in bad_splits and f'class="brk" id="{x}"' not in src]
    print('pass', it, len(doc.pages), 'pages; low chapter headings:', low)
    if not low:
        break
    for hid in low:
        trial = split(src, hid)
        if missing(render(trial)):
            bad_splits.add(hid); print('  skipped split before', hid, '(would drop content)')
        else:
            src = trial
miss = missing(doc)
assert not miss, ('content dropped', miss[:5])
open('book_final.html', 'w').write(src)
doc.write_pdf('Syrrhexis_Rulebook.pdf')
print('ok', len(doc.pages), 'pages')
