# Rulebook PDF generator

Builds the 8×10 two-column rulebook PDF from the Google Doc.

1. Export the rulebook doc as JSON (`documents.get`) to `doc.json`, and as a zipped HTML export unpacked into `export/` (that supplies the images that aren't in `diagrams/png`).
2. `imgmap.json` maps each inline image id to a `diagrams/png` file or an `export/images/...` file.
3. Fonts come from `tools/fonts` (set `SYRRHEXIS_FONTS` to use another folder).
4. `pip install weasyprint`, then `python3 build.py && python3 render.py` produces `Syrrhexis_Rulebook.pdf`.

`render.py` re-renders up to four times, pushing any chapter heading that lands in the bottom quarter of a page onto the next page.

After rebuilding, copy the PDF to `rulebook/Syrrhexis_Rulebook.pdf` so the public link stays current.
