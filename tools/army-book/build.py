"""Build the Syrrhēxis Army Book PDF (8x10 in) straight from the list builder's data (data/armies.js).

Layout: one section per army (era intro, unit profiles, that army's own Command cards), then the
generic Command cards, then the Supplemental Mercenaries. Unit profiles use the same card style as
the sample profile in the rulebook.

Run from the repo root:  python3 tools/army-book/build.py [army_id ...]
(no ids = every army). Needs node and weasyprint; fonts come from tools/fonts.
"""
import html, json, os, re, subprocess, sys, logging, tempfile
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from torn_paper import torn  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
FONTS = os.environ.get('SYRRHEXIS_FONTS', os.path.join(ROOT, 'tools', 'fonts'))
OUT = os.path.join(ROOT, 'rulebook', 'Syrrhexis_Army_Book.pdf')
esc = lambda s: html.escape(str(s), quote=False)


def load_data():
    js = ("global.window={};require(%r);process.stdout.write(JSON.stringify(window.NHB_DATA))"
          % os.path.join(ROOT, 'data', 'armies.js'))
    return json.loads(subprocess.check_output(['node', '-e', js]))


D = load_data()
# Playtest armies not yet in the list builder: drafts/<id>.json = {"draft": true, "army": {...}, "labels": {...}}
# Add "skipBook": true for starter lists that should be kept but not printed yet.
_DRAFTS = os.path.join(HERE, 'drafts')
for _f in (sorted(os.listdir(_DRAFTS)) if os.path.isdir(_DRAFTS) else []):
    if _f.endswith('.json'):
        _d = json.load(open(os.path.join(HERE, 'drafts', _f), encoding='utf8'))
        if _d.get('skipBook'):   # starter lists kept for later, not printed yet
            continue
        _d['army']['draft'] = True
        D['armies'].append(_d['army'])
        D.setdefault('labels', {}).update(_d.get('labels', {}))
        D['commands'].extend(_d.get('commands', []))
LABELS = D.get('labels', {})

NOUN = {'Chariot': ('Chariot', 'Chariots'), 'Elephant': ('Elephant', 'Elephants')}


def noun(u, n):
    t = u['type']
    if t in NOUN:
        return NOUN[t][0 if n == 1 else 1]
    if 'Cavalry' in t:
        return 'Cavalry'
    if 'Warmachine' in t:
        return 'Engineer' if n == 1 else 'Engineers'
    return 'Warrior' if n == 1 else 'Warriors'


def named(w):
    """'Aršti' -> 'Aršti short spear' using the builder's plain-English labels."""
    lab = LABELS.get(w)
    if lab and lab.split()[0].split('-')[0].lower() in w.lower():
        lab = None                                # e.g. "Scorpiō Bolt" + "bolt-thrower"
    return f'<i>{esc(w)}</i> {esc(lab)}' if lab else esc(w)


def pts(c):
    return '(free)' if not c else f"({c} {'pt' if c == 1 else 'pts'})"


def per_model(c, u=None):
    t = (u or {}).get('type', '')
    each = 'Elephant' if t == 'Elephant' else 'Chariot' if t == 'Chariot' else 'model'
    return '(free)' if not c else f"(+{c} {'pt' if c == 1 else 'pts'} per {each})"


def title(s):
    """Cinzel draws lower case as small capitals but has no θ; use a small EB Garamond capital Θ instead."""
    return esc(s).replace('θ', '<span class="th">Θ</span>')


def join_or(xs):
    xs = list(xs)
    return xs[0] if len(xs) == 1 else ', '.join(xs[:-1]) + ' or ' + xs[-1]


def join_and(xs):
    xs = [x for x in xs if x]
    return xs[0] if len(xs) == 1 else ', '.join(xs[:-1]) + ' and ' + xs[-1] if xs else 'None'


def composition(u):
    if u.get('engine'):
        lo, hi = u['range']
        return f"1 War Machine &amp; {lo}–{hi} Engineers"
    if u.get('range'):
        lo, hi = u['range']
        return f"{lo}–{hi} {noun(u, 2)}"
    parts = []
    for r, f in u['comps']:
        parts.append(f"{r} {'Rank' if r == 1 else 'Ranks'} of {f} {noun(u, f)}")
    s = ', or '.join(parts)
    c = u.get('crew')
    if c:
        bits = []
        if c.get('driver'):
            bits.append(f"{c['driver']} Driver")
        if c.get('mahout'):
            bits.append(f"{c['mahout']} Mahout")
        if c.get('crew'):
            bits.append(f"{c['crew']} Crewman" if c['crew'] == 1 else f"{c['crew']} Crewmen")
        if c.get('horses'):
            bits.append(f"{c['horses']} {'Kunga' if 'Kunga' in u.get('equip', []) else 'Horses'}")
        per = 'Chariot' if u['type'] == 'Chariot' else 'Elephant'
        s += f". {join_and(bits)} per {per}"
    return s


def natives(u):
    """Native-language names on this unit (weapons, armour, shields): always set in italics."""
    ns = set(LABELS) | set(u.get('weapons', {})) | set(u.get('armors') or {})
    return sorted((n for n in ns if n not in ENGLISH), key=len, reverse=True)


ENGLISH = {'Horses', 'Elephant', 'Light Armor', 'Medium Armor', 'Heavy Armor', 'Shield', 'Heavy Shield', 'Barding'}


def ital(text, u):
    """Escape text and italicise every native name in it."""
    t = esc(text)
    ns = natives(u)
    if not ns:
        return t
    pat = re.compile(r'(?<![\w>])(' + '|'.join(re.escape(esc(n)) for n in ns) + r')(?![\w<])')
    return pat.sub(r'<i>\1</i>', t)


def lines(rows):
    """Several labelled sub-lines inside one profile entry (e.g. per rank)."""
    return '<br>'.join(f'<span class="rk">{esc(k)}:</span> {v}' for k, v in rows)


def equipment(u):
    if u.get('mixed'):
        rows = []
        for part in ('front', 'rest'):
            m = u['mixed'][part]
            items = [named(w) for w in m['w']] + ([named(m['shield'])] if m.get('shield') else [])
            rows.append((m['label'].replace('ranks', 'Ranks'), join_and(items)))
        tail = [named(x) if x in LABELS else esc(x) for x in (u.get('body'), u.get('shield')) if x]
        if tail:
            rows.append(('All Ranks', join_and(tail)))
        return lines(rows)
    items = [named(w) for w in u['equip'] if w != 'Horses']
    items += [named(x) if x in LABELS else esc(x) for x in (u.get('body'), u.get('shield'), u.get('barding')) if x]
    return join_and(items)


def options(u):
    out = []
    for o in u.get('opts', []):
        k = o['kind']
        if k == 'swap':
            ch = o['choices']
            alts = [f"{ital(c['name'], u)} {per_model(c['c'], u)}" for c in ch[1:]]
            if ch[0]['name'].lower().startswith('no '):
                out.append(f"{ital(o['label'], u)}: may take {join_or(alts)}")
            else:
                out.append(f"{ital(o['label'], u)}: replace {ital(ch[0]['name'], u)} with {join_or(alts)}")
        elif k == 'count':
            out.append(f"Any model may take {ital(o['label'], u)} {per_model(o['c'], u)}")
        elif k == 'add':
            if o.get('unlessWeapon'):
                out.append(f"If the unit does not carry {ital(o['unlessWeapon'], u)}, it may take {ital(o['label'], u)} {per_model(o['c'], u)}")
            else:
                out.append(f"{ital(o['label'], u)} {per_model(o['c'], u)}")
    return '. '.join(out) + '.' if out else 'None'


def char_group(g):
    names = [f"{esc(n.strip())} {pts(c)}" for n, c in g['one']]
    return ('Must take ' if g.get('req') else '') + join_or(names)


def characters(u):
    groups = u.get('chars', [])
    if not groups:
        return 'None'
    if any(g.get('note') for g in groups):        # characters tied to particular ranks
        by = {}
        for g in groups:
            by.setdefault(g.get('note') or 'Any rank', []).append(char_group(g))
        return lines((k, '. '.join(v) + '.') for k, v in by.items())
    return '. '.join(char_group(g) for g in groups) + '.'


def special_rules(u):
    names = list(u.get('rules', [])) + list((u.get('custom') or {}).keys())
    return ', '.join(f'<b>{esc(n)}</b>' for n in names) if names else 'None'


KEYWORDS = ['Cleaving Blade', 'Cumbersome', 'Direct Fire', 'Massive Suppression', 'Melee Suppression', 'Parrying Blade',
            'Pavise', 'Piercing Shot', 'Reach', 'Recurve Bow', 'Sunder', 'Throwing Weapon', 'Thrusting Blade', 'Unwieldy']
KW = re.compile(r'\b(' + '|'.join(KEYWORDS) + r')(?: \(\d+\))?')
ATTACK = re.compile(r'^(\d+ (extra )?attacks?\b|can only (be )?use|cannot be used on charge|only while)', re.I)


def ability(text, u, extra_keywords=()):
    """Weapon/armour ability in a fixed order: attack-related text, then keywords (bold), then other rules.
    The builder's 'Note: increased accuracy' style remarks are dropped."""
    attacks, kws, other = [], list(extra_keywords), []
    for sent in re.split(r'\.\s+', (text or '').strip().rstrip('.')):
        if not sent or sent.lower().startswith('note:'):
            continue
        parts = [x.strip() for x in sent.split(',')]
        if all(KW.fullmatch(x) for x in parts):
            kws += parts
        elif ATTACK.match(sent):
            attacks.append(sent)
        else:
            other.append(sent)
    def bold(t):
        return KW.sub(lambda m: f'<b>{m.group(0)}</b>', ital(t, u))
    out = [bold(x) for x in attacks]
    if kws:
        out.append(', '.join(f'<b>{esc(k)}</b>' for k in kws))
    out += [bold(x) for x in other]
    return '. '.join(out)


def weapon_table(u):
    rows = ''.join(
        f"<tr><td><b>{ital(n, u)}</b></td><td>{esc(v[0])}</td><td>{esc(v[1])}</td><td>{esc(v[2])}</td><td>{ability(v[3], u)}</td></tr>"
        for n, v in u['weapons'].items())
    return ('<table class="wtab"><tr><th>Weapon</th><th>Length/Range</th><th>Accuracy</th><th>Strength</th>'
            f'<th>Ability</th></tr>{rows}</table>')


def armor_table(u):
    a = u.get('armors')
    if not a:
        return ''
    can = {u.get('body'), u.get('shield'), u.get('barding')}
    for o in u.get('opts', []):
        can |= {o.get('body'), o.get('shield')}
        for c in o.get('choices', []):
            can |= {c.get('body'), c.get('shield')}
    if any(n in can for n in a):
        a = {n: v for n, v in a.items() if n in can}
    rows = []
    for n, v in a.items():
        mv = v.get('move', 0)
        abil = ability(v.get('text', ''), u, v.get('grants') or [])
        rows.append(f"<tr><td><b>{ital(n, u)}</b></td><td>+{v.get('v', 0)}</td><td>{mv if mv else '0'}</td><td>{abil}</td></tr>")
    return ('<table class="atab"><tr><th>Armor</th><th>Modifier</th><th>Move</th><th>Ability</th></tr>'
            + ''.join(rows) + '</table>')


def profile(u):
    kv = lambda k, v: f'<p class="kv"><span class="k">{k}</span>{v}</p>'
    if u.get('engine'):                           # War Machine cost, then the Engineers' stats
        stats = f'''<td class="pstats wm"><table class="wmhead"><tr>
<td class="g1"><div class="glab">War Machine</div><table class="stats"><tr><th>Points</th></tr><tr><td>{u['engine']}</td></tr></table></td>
<td class="gap"></td>
<td class="g2"><div class="glab">Engineers</div><table class="stats"><tr><th>Move</th><th>Training</th><th>Points</th></tr>
<tr><td>{u['move']}</td><td>{u['training']}</td><td>{u['points']}</td></tr></table></td></tr></table></td>'''
    else:
        stats = f'''<td class="pstats"><table class="stats"><tr><th>Move</th><th>Training</th><th>Points</th></tr>
<tr><td>{u['move']}</td><td>{u['training']}</td><td>{u['points']}</td></tr></table></td>'''
    custom = ''.join(f'<p class="rule"><b>{esc(n)}.</b> {esc(t)}</p>' for n, t in (u.get('custom') or {}).items())
    custom += ''.join(f'<p class="rule"><b>{esc(n)}.</b> {esc(RULES["model"][n])}</p>' for n in u.get('rules', []) if n in PROFILE_RULES)
    return f'''<section class="profile">
<table class="phead"><tr><td class="pname"><p>{title(u['name'])}</p><p>{esc(u['type'])}</p></td>
{stats}</tr></table>
{kv('Composition:', composition(u))}
{kv('Equipment:', equipment(u))}
{kv('Options:', options(u))}
{kv('Gear:', join_and([named(g) for g in u.get('gear', [])]))}
{kv('Characters:', characters(u))}
{kv('Special Rules:', special_rules(u))}
{custom}
{weapon_table(u)}
{armor_table(u)}
</section>'''


CARD_KW = re.compile(r'\b(Obstacles?|Walls?|Flammable|Weather)\b')


def card_group(c):
    """Generic card order: 0 army list (mercenary) cards, 1 terrain and Obstacles, 2 Weather, 3 everything else."""
    t, short = c.get('text', ''), c.get('short', '')
    if c.get('mercs'):
        return 0
    if t.startswith('Obstacle') or short.startswith(('Obstacle:', 'Terrain:')):
        return 1
    if t.startswith('Weather'):
        return 2
    return 3


def card_order(c):
    """Group first, then alphabetical, ignoring a leading "The"."""
    name = c['name'][4:] if c['name'].startswith('The ') else c['name']
    return (card_group(c), name.lower())


def card_text(t):
    return CARD_KW.sub(r'<b>\1</b>', esc(t))


def card(c):
    note = f'<p class="cnote">{card_text(c["note"])}</p>' if c.get('note') else ''
    return f'''<div class="ccard"><div class="chead"><span class="cname">{title(c['name'])}</span>
<span class="climit">Limit {c.get('limit', 1)}</span></div>
<p class="ctext">{card_text(c['text'])}</p>{note}<p class="cflavor">{esc(c.get('flavor', ''))}</p></div>'''


# Pencil illustration for each army's opening page: art/illustrations/<file>.png
ART = {'sumer': 'sumer_battle_wagon', 'hittite': 'hittite_lion_gate', 'persia': 'persia_volley', 'greek': 'greek_march',
       'alexander': 'alexander_phalanx', 'rome': 'rome_testudo', 'aztec': 'aztec_chinampas'}
_ART_DIR = os.path.join(ROOT, 'art', 'illustrations')
_ART_CACHE = os.path.join(tempfile.gettempdir(), 'syrrhexis-art')


# Card illustrations in the Generic Command Cards section, placed before the given card: card id -> image
CARD_ART = {'the-eclipse': 'card_the_eclipse', 'crumbled-ruins': 'card_crumbled_ruins'}
# Mercenary illustrations, placed just before the unit's profile: unit id -> image
MERC_ART = {'dong-son-axemen': 'merc_dong_son_axemen', 'nabatean-skirmishers': 'merc_arabian_camel_riders',
            'lydian-houndsmen': 'merc_lydian_houndsmen'}


def art(aid):
    """(html, portrait) for an army's illustration."""
    return art_img(ART.get(aid))


def art_img(name):
    """(html, portrait) for art/illustrations/<name>.png: torn-paper edge, downsized to a JPEG so the PDF stays small."""
    src = name and os.path.join(_ART_DIR, name + '.png')
    if not src or not os.path.exists(src):
        return '', False
    from PIL import Image
    os.makedirs(_ART_CACHE, exist_ok=True)
    out = os.path.join(_ART_CACHE, name + '.jpg')
    im = Image.open(src).convert('RGB')
    portrait = im.height > im.width
    im.thumbnail((1400, 1400))
    torn(im, name).save(out, 'JPEG', quality=84)
    cls = 'art art-tall' if portrait else 'art'
    return f'<img class="{cls}" src="file://{out}" alt="">', portrait


def intro(aid):
    p = os.path.join(HERE, 'intros', aid + '.md')
    if not os.path.exists(p):
        return '<p class="era"><i>Era introduction to be written.</i></p>'
    paras = [x.strip() for x in open(p).read().split('\n\n') if x.strip()]
    head, body = paras[0], paras[1:]
    img, portrait = art(aid)
    # A wide picture spans the page under the dates; a tall one sits at the top of the first text column.
    wide, tall = ('', img) if portrait else (img, '')
    return (f'<p class="era-dates">{esc(head)}</p>{wide}<div class="era">{tall}'
            + ''.join(f'<p>{esc(x)}</p>' for x in body) + '</div>')


TYPE_ORDER = ['Warrior', 'Light Warrior', 'Skirmishing Warrior', 'Cavalry', 'Light Cavalry', 'Skirmishing Cavalry',
              'Chariot', 'Elephant', 'Light Warmachine', 'Warmachine']


# A Retinue whose name doesn't match its closest unit: unit id -> id of the unit it follows.
RETINUE_AFTER = {'aga-us': 'sub-lugal'}


def ordered(units):
    """Book order: by unit type (TYPE_ORDER), keeping the army list's order within a type, and each
    "X Retinue" straight after X. A Retinue with no matching unit stays at the end of its type."""
    rank = lambda u: TYPE_ORDER.index(u['type']) if u['type'] in TYPE_ORDER else len(TYPE_ORDER)
    names = {u['name'] for u in units}
    ids = {u['id'] for u in units}
    follows = lambda r: RETINUE_AFTER.get(r['id']) if RETINUE_AFTER.get(r['id']) in ids else None
    base = [u for u in units if not (u['name'].endswith(' Retinue') and u['name'][:-8] in names) and not follows(u)]
    base.sort(key=rank)                       # stable: keeps list order within a type
    out = []
    for u in base:
        out.append(u)
        out += [r for r in units if r is not u and (r['name'] == u['name'] + ' Retinue' or follows(r) == u['id'])]
    return out


def army_section(a):
    cards = [c for c in D['commands'] if a['id'] in (c.get('armies') or [])]
    cards_html = (f'<h2>{esc(a["name"])} Command Cards</h2><div class="cards">' + ''.join(card(c) for c in cards) + '</div>') if cards else ''
    draft = ('<p class="draft">Playtest draft: this army is not yet in the list builder, and its profiles and points may change.</p>'
             if a.get('draft') else '')
    return (f'<section class="army"><h1 id="{a["id"]}">{title(a["name"])}</h1>{draft}{intro(a["id"])}'
            f'<h2>Unit Profiles</h2>' + ''.join(profile(u) for u in ordered(a['units'])) + cards_html + '</section>')


# Rules that belong to a single unit: printed in full on its profile as well as in the Rules Reference.
PROFILE_RULES = {'Camel Riders'}


def load_rules():
    js = ("global.window={};process.stdout.write(JSON.stringify(require(%r), (k, v) => v instanceof RegExp ? undefined : v))"
          % os.path.join(ROOT, 'js', 'rules.js'))
    return json.loads(subprocess.check_output(['node', '-e', js]))


def glossary():
    R = RULES
    sec = lambda title, d: (f'<h2>{title}</h2><div class="gloss">' + ''.join(
        f'<p><b>{esc(k)}.</b> {esc(v)}</p>' for k, v in sorted(d.items())) + '</div>')
    return ('<section class="army"><h1 id="rules-reference">Rules Reference</h1>'
            '<p class="era">Condensed from the rulebook for use at the table. Where this summary and the rulebook differ, the rulebook applies.</p>'
            + sec('Unit Types', R['types']) + sec('Special Rules', R['model']) + sec('Weapon Keywords', R['weapon'])
            + sec('Characters', R['chars']) + '</section>')


RULES = load_rules()


def start_year(aid):
    """First year in the intro's date line (BC negative), so armies print oldest first."""
    p = os.path.join(HERE, 'intros', aid + '.md')
    if not os.path.exists(p):
        return 10 ** 6
    line = open(p).readline()
    m = re.search(r'(\d+)\s*(BC)?', line)
    if not m:
        return 10 ** 6
    y = int(m.group(1))
    return -y if (m.group(2) or ('BC' in line and 'AD' not in line.split(m.group(1))[0])) else y


def build(ids):
    armies = sorted((a for a in D['armies'] if not ids or a['id'] in ids), key=lambda a: start_year(a['id']))
    parts = [army_section(a) for a in armies]
    if not ids:
        generic = sorted((c for c in D['commands'] if not c.get('armies')), key=card_order)
        parts.append('<section class="army"><h1 id="generic-cards">Generic Command Cards</h1>'
                     '<p class="era">Any army may include these cards in its Command deck.</p><div class="cards">'
                     + ''.join((f'</div>{art_img(CARD_ART[c["id"]])[0]}<div class="cards">' if c['id'] in CARD_ART else '')
                               + card(c) for c in generic) + '</div></section>')
        parts.append('<section class="army"><h1 id="mercenaries">Supplemental Mercenaries</h1>'
                     '<p class="era">Supplemental Mercenaries is not an army list and cannot be chosen as your army. '
                     'Its units can only be added to an army through Command Cards.</p><h2>Unit Profiles</h2>'
                     + ''.join(art_img(MERC_ART.get(u['id']))[0] + profile(u) for u in D['mercs']['units']) + '</section>')
    parts.append(glossary())
    quickref = open(os.path.join(HERE, 'quickref.html')).read()
    quickref += open(os.path.join(HERE, 'howto.html')).read()
    toc = '<li><a href="#quick-reference">Quick Reference</a></li><li><a href="#reading-a-profile">How to Read a Profile</a></li>' + ''.join(f'<li><a href="#{a["id"]}">{esc(a["name"])}</a></li>' for a in armies)
    if not ids:
        toc += '<li><a href="#generic-cards">Generic Command Cards</a></li><li><a href="#mercenaries">Supplemental Mercenaries</a></li>'
    toc += '<li><a href="#rules-reference">Rules Reference</a></li>'
    faces = [('Cinzel', 'Cinzel', 400, 'normal'), ('Cinzel', 'Cinzel', 700, 'normal'),
             ('EB Garamond', 'EBGaramond', 400, 'normal'), ('EB Garamond', 'EBGaramond', 600, 'normal'),
             ('EB Garamond', 'EBGaramond', 700, 'normal'), ('EB Garamond', 'EBGaramond-Italic', 400, 'italic'), ('EB Garamond', 'EBGaramond-Italic', 600, 'italic'),
             ('Source Sans 3', 'SourceSans3', 400, 'normal'), ('Source Sans 3', 'SourceSans3', 600, 'normal'),
             ('Source Sans 3', 'SourceSans3', 700, 'normal'),
             ('Source Sans 3', 'SourceSans3-Italic', 400, 'italic'), ('Source Sans 3', 'SourceSans3-Italic', 600, 'italic'),
             ('Source Sans 3', 'SourceSans3-Italic', 700, 'italic')]
    fonts = ''.join(f"@font-face{{font-family:'{f}';src:url('file://{FONTS}/{n}-{w}.ttf');font-weight:{w};font-style:{s}}}"
                    for f, n, w, s in faces)
    css = open(os.path.join(HERE, 'army.css')).read()
    version = D['meta']['version']
    return f'''<!doctype html><html><head><meta charset="utf-8"><style>{fonts}{css}</style>
<title>Syrrhēxis Army Book</title></head><body>
<section class="cover"><div class="frame"><div class="kicker">Rules for Wargaming in 1/72 Scale</div>
<div class="ctitle">Syrrhēxis</div><div class="csub">Army Book</div>
<div class="cera">Army lists, Command cards and Supplemental Mercenaries</div>
<div class="cauth">by Kevin Stanzione</div><div class="cver">Army data version {esc(version)}</div></div></section>
<section class="toc"><h1 class="toch">Contents</h1><ul>{toc}</ul></section>
{quickref}
{''.join(parts)}</body></html>'''


if __name__ == '__main__':
    import weasyprint
    logging.getLogger('weasyprint').setLevel(logging.ERROR)
    ids = sys.argv[1:]
    doc = build(ids)
    open(os.path.join(HERE, 'army_book.html'), 'w').write(doc)
    out = OUT if not ids else os.path.join(HERE, f"army_book_{'_'.join(ids)}.pdf")
    pdf = weasyprint.HTML(string=doc, base_url=HERE).render()
    pdf.write_pdf(out)
    print(out, len(pdf.pages), 'pages')
