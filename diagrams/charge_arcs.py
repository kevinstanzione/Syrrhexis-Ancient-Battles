import math
W,H=360,300            # board area in mm (1 SVG unit = 1 mm)
cx,cy=180,165
B=3; fw,fd=5*20+2*B, 4*20+2*B
hx,hy=fw/2,fd/2
C={'ink':'#2b2b2b','paper':'#f6f1e6','blue':'#3f6fb0','bluel':'#c9d8ee','red':'#b4473a','redl':'#f0cfc9',
   'front':'#efe2bf','flank':'#e4e0d6','rear':'#d9d4c6','line':'#6b6253'}
out=[]
add=out.append
add(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H+34}" width="{W*2.4:.0f}" height="{(H+34)*2.4:.0f}" font-family="Georgia, \'Times New Roman\', serif">')
add(f'<defs><clipPath id="board"><rect x="0" y="0" width="{W}" height="{H}"/></clipPath>'
    f'<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{C["red"]}"/></marker></defs>')
add(f'<rect x="0" y="0" width="{W}" height="{H}" fill="{C["paper"]}"/>')
# arcs: extend diagonals far
R=1000
def far(dx,dy):
    L=math.hypot(dx,dy); return (cx+dx/L*R, cy+dy/L*R)
TL,TR,BR,BL=far(-hx,-hy),far(hx,-hy),far(hx,hy),far(-hx,hy)
def poly(pts,fill): add(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in pts)}" fill="{fill}" clip-path="url(#board)"/>')
poly([(cx,cy),TL,TR],C['front']); poly([(cx,cy),TR,BR],C['flank']); poly([(cx,cy),BR,BL],C['rear']); poly([(cx,cy),BL,TL],C['flank'])
for p in (TL,TR,BR,BL):
    add(f'<line x1="{cx}" y1="{cy}" x2="{p[0]:.1f}" y2="{p[1]:.1f}" stroke="{C["line"]}" stroke-width="0.6" stroke-dasharray="3 2" clip-path="url(#board)"/>')
# arc labels
def label(x,y,t,size=7,col=None,anchor='middle',style='italic'):
    add(f'<text x="{x}" y="{y}" font-size="{size}" fill="{col or C["line"]}" text-anchor="{anchor}" font-style="{style}">{t}</text>')
label(cx,18,'Front arc'); label(cx,H-8,'Rear arc'); add(f'<text x="14" y="{cy}" font-size="7" fill="{C["line"]}" text-anchor="middle" font-style="italic" transform="rotate(-90 14 {cy})">Left flank arc</text>'); add(f'<text x="{W-14}" y="{cy}" font-size="7" fill="{C["line"]}" text-anchor="middle" font-style="italic" transform="rotate(90 {W-14} {cy})">Right flank arc</text>')
# closed order tray helper
def tray(x,y,ranks,files,ang,col,coll,bw=20,bd=20,name=None):
    w,d=files*bw+2*B, ranks*bd+2*B
    g=[f'<g transform="translate({x},{y}) rotate({ang})">']
    g.append(f'<rect x="{-w/2}" y="{-d/2}" width="{w}" height="{d}" rx="1.5" fill="{coll}" stroke="{col}" stroke-width="1"/>')
    for r in range(ranks):
        for f in range(files):
            bx=-w/2+B+f*bw; by=-d/2+B+r*bd
            g.append(f'<rect x="{bx+0.6}" y="{by+0.6}" width="{bw-1.2}" height="{bd-1.2}" rx="1" fill="#fff" fill-opacity="0.55" stroke="{col}" stroke-width="0.5"/>')
            g.append(f'<line x1="{bx+3}" y1="{by+2.2}" x2="{bx+bw-3}" y2="{by+2.2}" stroke="{col}" stroke-width="1.2" stroke-linecap="round"/>')
    g.append(f'<line x1="{-w/2}" y1="{-d/2}" x2="{w/2}" y2="{-d/2}" stroke="{col}" stroke-width="2.2"/>')  # front edge
    if name: g.append(f'<text x="0" y="{d/2+8}" font-size="6.5" text-anchor="middle" fill="{col}" font-weight="bold">{name}</text>')
    g.append('</g>'); add(''.join(g))
# defender
tray(cx,cy,4,5,0,C['blue'],C['bluel'],name='Defender: Hoplîtai, 4 ranks of 5')
# red closed order attacker in the front arc
ax,ay=160,62
tray(ax,ay,2,4,180+8,C['red'],C['redl'])
label(ax+52,ay-30,'Attacker A',6.5,C['red'],'middle','normal')
label(ax+52,ay-22,'in the front arc',5.5,C['red'])
# charge arrow from A front toward defender front edge
add(f'<line x1="{ax+3:.1f}" y1="{ay+30:.1f}" x2="{ax+8:.1f}" y2="{cy-hy-4:.1f}" stroke="{C["red"]}" stroke-width="1.3" marker-end="url(#arrow)"/>')
# open order skirmishers in the right flank arc, one on the line
def model(x,y,col,coll,dashed=False,bw=20,tx=None,ty=None):
    tx=cx if tx is None else tx; ty=cy if ty is None else ty
    ang=math.degrees(math.atan2(ty-y,tx-x))+90   # turn so the front (-y) faces the target
    da=' stroke-dasharray="2 1.5"' if dashed else ''
    add(f'<g transform="translate({x:.1f},{y:.1f}) rotate({ang:.1f})">'
        f'<rect x="{-bw/2+0.6}" y="{-bw/2+0.6}" width="{bw-1.2}" height="{bw-1.2}" rx="1" fill="{coll}" stroke="{col}" stroke-width="0.9"{da}/>'
        f'<line x1="{-bw/2+3}" y1="{-bw/2+2.2}" x2="{bw/2-3}" y2="{-bw/2+2.2}" stroke="{col}" stroke-width="1.2" stroke-linecap="round"/></g>')
pts=[(280,130),(304,142),(280,162),(306,176),(278,194)]
for x,y in pts: model(x,y,C['red'],C['redl'])
# the model on the line (top-right diagonal) - find a point on it
L0=math.hypot(hx,hy); lx=cx+hx/L0*108; ly=cy-hy/L0*108
model(round(lx,1),round(ly,1),C['red'],C['redl'],dashed=True)
label(W-6,226,'Attacker B (Open Order)',6.5,C['red'],'end','normal')
label(W-6,234,'5 models in the right flank arc',5.5,C['red'],'end')
label(W-6,241,'1 on the line, not counted',5.5,C['red'],'end')
# scale bar 2 inches
sx,sy=16,H-22
add(f'<rect x="{sx}" y="{sy}" width="25.4" height="3" fill="{C["ink"]}"/><rect x="{sx+25.4}" y="{sy}" width="25.4" height="3" fill="#fff" stroke="{C["ink"]}" stroke-width="0.6"/>')
label(sx,sy-2,'0',5,C['ink'],'middle','normal'); label(sx+25.4,sy-2,'1"',5,C['ink'],'middle','normal'); label(sx+50.8,sy-2,'2"',5,C['ink'],'middle','normal')
add(f'<rect x="0.5" y="0.5" width="{W-1}" height="{H-1}" fill="none" stroke="{C["line"]}" stroke-width="1"/>')
# caption
add(f'<text x="4" y="{H+13}" font-size="8" font-weight="bold" fill="{C["ink"]}">Charge arcs</text>')
add(f'<text x="4" y="{H+22}" font-size="6" fill="{C["ink"]}">Lines through the tray’s opposite corners split the battlefield into four arcs. A unit is in the arc holding most</text>'); add(f'<text x="4" y="{H+30}" font-size="6" fill="{C["ink"]}">of its models; models on a line do not count. The thick edge on each tray and base marks its front.</text>')
add('</svg>')
open(__import__('os').path.join(__import__('os').path.dirname(__import__('os').path.abspath(__file__)),'charge_arcs.svg'),'w').write('\n'.join(out))
