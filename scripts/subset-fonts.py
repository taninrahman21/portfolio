# Re-cuts the three site fonts into small files in src/fonts/: Latin only, and
# only the weights the stylesheet uses. Run it again if you add a weight or
# need characters outside the range below (e.g. another script).
#   python3 -m pip install fonttools brotli
#   python3 scripts/subset-fonts.py src/fonts

import sys, os
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.varLib import instancer
out_dir=sys.argv[1]
U="U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+2010-2027,U+2030-203A,U+20AC,U+2122,U+2190-2199,U+2605"
fams={
 "bricolage-grotesque":("node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2",(500,800)),
 "geist":("node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",(400,700)),
 "jetbrains-mono":("node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",400),
}
for name,(path,w) in fams.items():
    f=TTFont(path)
    opts=subset.Options(); opts.flavor="woff2"; opts.layout_features=["kern","liga","calt","ccmp","locl","mark","mkmk"]; opts.name_IDs=["*"]; opts.notdef_outline=True; opts.hinting=False
    sub=subset.Subsetter(opts); sub.populate(unicodes=subset.parse_unicodes(U)); sub.subset(f)
    f=instancer.instantiateVariableFont(f,{"wght":w if isinstance(w,int) else tuple(w)})
    out=f"{out_dir}/{name}.woff2"; f.flavor="woff2"; f.save(out)
    print(name, os.path.getsize(path), "->", os.path.getsize(out))
