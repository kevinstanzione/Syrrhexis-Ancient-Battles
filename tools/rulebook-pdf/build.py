"""Build the Syrrhēxis rulebook PDF (8x10, two-column) from the Google Docs JSON."""
import json, re, html, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
REPO_PNG = '/home/claude/syrrhexis-ancient-battles/diagrams/png'
d = json.load(open(os.path.join(HERE, 'doc.json')))['content']
dt = d['tabs'][0]['documentTab']
body = dt['body']['content']
LISTS = dt['lists']
OBJS = dt['inlineObjects']
IMGMAP = json.load(open(os.path.join(HERE, 'imgmap.json')))
esc = lambda s: html.escape(s, quote=False)

# chapters whose short text shouldn't force a fresh page
WIDE_TABLE_COLS = 5
FULL_IMGS = {'order_tokens.png', 'action_tokens.png', 'break_tokens.png', 'musician.png', 'commander.png', 'skirmish_captain.png', 'feign.png', 'run_them_down.png', 'images/image13.png', 'images/image6.png', 'images/image15.png',
             'images/image7.png', 'images/image22.png'}


def img_src(oid):
    if oid not in IMGMAP:
        uri = OBJS[oid]['inlineObjectProperties']['embeddedObject'].get('imageProperties', {}).get('sourceUri', '')
        IMGMAP[oid] = uri.split('/')[-1]
    m = IMGMAP[oid]
    if m.startswith('images/'):
        return os.path.join(HERE, 'export', m), m
    return os.path.join(REPO_PNG, m), m


def run_html(x):
    tr = x.get('textRun')
    if not tr:
        return ''
    t = tr['content'].replace('\n', '').replace('\u000b', '<br>')
    if not t:
        return ''
    t = esc(t).replace('&lt;br&gt;', '<br>')
    s = tr.get('textStyle', {})
    link = s.get('link')
    if s.get('bold'): t = f'<b>{t}</b>'
    if s.get('italic'): t = f'<i>{t}</i>'
    if link:
        if 'heading' in link or 'headingId' in link:
            hid = link.get('heading', {}).get('id') or link.get('headingId')
            t = f'<a class="xref" href="#{hid}">{t}</a>'
        elif 'url' in link:
            t = f'<a href="{esc(link["url"])}">{t}</a>'
    return t


def para_text(p):
    return ''.join(x.get('textRun', {}).get('content', '') for x in p['elements'])


def merge_tags(h):
    # collapse adjacent identical tags produced run by run
    for tag in ('b', 'i'):
        h = re.sub(rf'</{tag}>(\s*)<{tag}>', r'\1', h)
    return h


def inline_html(p):
    return merge_tags(''.join(run_html(x) for x in p['elements'])).strip()


def images_in(p):
    return [x['inlineObjectElement']['inlineObjectId'] for x in p['elements'] if 'inlineObjectElement' in x]


def list_kind(bullet):
    lvl = LISTS[bullet['listId']]['listProperties']['nestingLevels'][bullet.get('nestingLevel', 0)]
    return 'ol' if lvl.get('glyphType') in ('DECIMAL', 'ALPHA', 'UPPER_ALPHA', 'ROMAN', 'UPPER_ROMAN', 'ZERO_DECIMAL') else 'ul'


def cell_html(cell):
    parts = []
    for e in cell['content']:
        if 'paragraph' in e:
            h = inline_html(e['paragraph'])
            for oid in images_in(e['paragraph']):
                src, _ = img_src(oid)
                h += f'<img class="cellimg" src="file://{src}">'
            if h:
                parts.append(h)
    return '<br>'.join(parts)


def table_html(t):
    rows = t['tableRows']
    ncol = t['columns']
    eff = max(sum(1 for c in r['tableCells'] if c.get('tableCellStyle', {}).get('columnSpan', 1) >= 1) - sum(c.get('tableCellStyle', {}).get('columnSpan', 1) - 1 for c in r['tableCells']) for r in rows)
    ncol = eff
    cls = 'wide' if ncol >= WIDE_TABLE_COLS else 'narrow'
    out = [f'<table class="{cls} c{ncol}">']
    covered = set()
    for ri, r in enumerate(rows):
        tag = 'th' if ri == 0 else 'td'
        out.append('<tr>')
        for ci, cell in enumerate(r['tableCells']):
            if (ri, ci) in covered:
                continue
            st = cell.get('tableCellStyle', {})
            cs, rs = st.get('columnSpan', 1), st.get('rowSpan', 1)
            for a in range(rs):
                for b in range(cs):
                    if a or b: covered.add((ri + a, ci + b))
            attrs = (f' colspan="{cs}"' if cs > 1 else '') + (f' rowspan="{rs}"' if rs > 1 else '')
            out.append(f'<{tag}{attrs}>{cell_html(cell)}</{tag}>')
        out.append('</tr>')
    out.append('</table>')
    return ''.join(out), cls


def convert():
    out = []
    toc = []
    open_lists = []  # stack of (kind)
    title = ''

    def close_lists(level=-1):
        while len(open_lists) > level + 1:
            out.append(f'</li></{open_lists.pop()}>')

    i = 0
    while i < len(body):
        e = body[i]; i += 1
        if 'table' in e:
            close_lists()
            # a 2x3 table immediately after "example of what a Unit profile" is the profile header
            th, cls = table_html(e['table'])
            out.append(th)
            continue
        if 'paragraph' not in e:
            continue
        p = e['paragraph']
        st = p['paragraphStyle'].get('namedStyleType', 'NORMAL_TEXT')
        raw = para_text(p)
        text = raw.strip()
        imgs = images_in(p)
        if st == 'TITLE':
            title = text
            continue
        if st == 'SUBTITLE':
            continue
        if st.startswith('HEADING'):
            close_lists()
            if not text:
                continue
            lvl = int(st[-1])
            hid = p['paragraphStyle'].get('headingId', '')
            out.append(f'<h{lvl} id="{hid}">{esc(text)}</h{lvl}>')
            if lvl <= 2:
                toc.append((lvl, hid, text))
            continue
        if imgs:
            close_lists()
            for oid in imgs:
                src, key = img_src(oid)
                from PIL import Image as _I
                _w, _h = _I.open(src).size
                cls = 'full' if (key in FULL_IMGS or _w / _h >= 1.65) else ('col tall' if _h > _w else 'col')
                out.append(f'<figure class="{cls}"><img src="file://{src}"></figure>')
            if not text:
                continue
        if not text:
            continue
        h = inline_html(p)
        bl = p.get('bullet')
        if bl:
            lvl = bl.get('nestingLevel', 0)
            kind = list_kind(bl)
            if len(open_lists) > lvl + 1:
                close_lists(lvl)
                out.append('</li><li>')
            elif len(open_lists) == lvl + 1:
                if open_lists[-1] != kind:
                    close_lists(lvl - 1)
                    open_lists.append(kind); out.append(f'<{kind}><li>')
                else:
                    out.append('</li><li>')
            else:
                while len(open_lists) < lvl + 1:
                    open_lists.append(kind); out.append(f'<{kind}><li>')
            out.append(h)
            continue
        close_lists()
        m = re.match(r'^([A-Z][A-Za-z ]+:)\s*\t+(.*)$', raw.rstrip('\n'), re.S)
        if m:
            # profile-style "Label:<tab>value" line
            lab = esc(m.group(1))
            val = inline_html(p)
            val = re.sub(r'^(<b>)?' + re.escape(lab[:-1]) + r'(</b>)?:?(</b>)?\s*', '', val).strip()
            out.append(f'<p class="kv"><span class="k">{lab}</span> {val}</p>')
            continue
        out.append(f'<p>{h}</p>')
    close_lists()
    return title, toc, '\n'.join(out)


title, toc, content = convert()

# post-process: wrap the example unit profile (from "Hoplîtai" through the stat table) as a card
content = re.sub(r'(<table class="narrow c3">(?:(?!</table>).)*?</table>\s*<p><i><b>Hoplîtai</b></i></p>.*?<table class="wide c\d">.*?</table>)',
                 r'<div class="profile">\1</div>', content, count=1, flags=re.S)

faces = [('Cinzel','Cinzel',400,'normal'),('Cinzel','Cinzel',600,'normal'),('Cinzel','Cinzel',700,'normal'),
 ('EB Garamond','EBGaramond',400,'normal'),('EB Garamond','EBGaramond',600,'normal'),('EB Garamond','EBGaramond',700,'normal'),
 ('EB Garamond','EBGaramond-Italic',400,'italic'),('EB Garamond','EBGaramond-Italic',600,'italic'),
 ('Source Sans 3','SourceSans3',400,'normal'),('Source Sans 3','SourceSans3',600,'normal'),('Source Sans 3','SourceSans3',700,'normal')]
# appendix: single-column, full width
k = content.find('Appendix I: Combat Diagrams</h1>')
if k > 0:
    k = content.find('</h1>', k) + 5
    tail = content[k:].replace('<p>', '<p class="span">').replace('<figure class="col">', '<figure class="full apx">').replace('<figure class="full">', '<figure class="full apx">')
    content = content[:k] + tail

FONTS = '<style>' + ''.join(
    f"@font-face{{font-family:'{fam}';src:url('file://{HERE}/ttf/{fn}-{w}.ttf');font-weight:{w};font-style:{sty}}}"
    for fam, fn, w, sty in faces) + '</style>'

toc_html = ''.join(
    f'<li class="t{l}"><a href="#{h}">{esc(t)}</a></li>' for l, h, t in toc if t not in ('Update History',))

doc = f'''<!doctype html><html><head><meta charset="utf-8">{FONTS}
<link rel="stylesheet" href="file://{HERE}/book.css"><title>{esc(title)}</title></head><body>
<section class="cover">
  <div class="frame">
    <div class="kicker">Rules for Wargaming in 1/72 Scale</div>
    <div class="ctitle">Syrrhēxis</div>
    <div class="csub">Ancient Battles</div>
    <div class="cgreek">σύρρηξις · the clash of battle lines</div>
    <div class="cera">From the Bronze Age to the end of Classical Antiquity</div>
    <div class="cauth">by Kevin Stanzione</div>
    <div class="cver">Core Rules · Version 0.1.0 · October 2026</div>
  </div>
</section>
<section class="toc"><h1 class="toch">Contents</h1><ul>{toc_html}</ul></section>
<main>{content}</main>
</body></html>'''
open(os.path.join(HERE, 'book.html'), 'w').write(doc)
print('toc entries', len(toc), 'chars', len(doc))
