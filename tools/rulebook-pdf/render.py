import weasyprint, logging, re, sys
logging.getLogger('weasyprint').setLevel(logging.ERROR)
src = open('book.html').read()
for it in range(4):
    doc = weasyprint.HTML(string=src, base_url='.').render()
    bad = []
    for page in doc.pages:
        H = page._page_box.height + page._page_box.margin_top
        def walk(b):
            el = getattr(b, 'element', None)
            lim = {'h1': 0.75}.get(getattr(b, 'element_tag', ''), 9)
            if el is not None and el.tag in ('h1', 'h2') and b.position_y > lim * H:
                bad.append(el.get('id'))
            for c in getattr(b, 'children', []) or []:
                walk(c)
        walk(page._page_box)
    bad = [x for x in dict.fromkeys(bad) if x and f'class="brk" id="{x}"' not in src]
    print('pass', it, len(doc.pages), 'pages; low headings:', bad)
    if not bad:
        break
    for hid in bad:
        src = re.sub(rf'<(h1) id="{hid}">', rf'</main><main class="pb"><\1 class="brk" id="{hid}">', src, count=1)
open('book_final.html','w').write(src)
doc.write_pdf('Syrrhexis_Rulebook.pdf')
