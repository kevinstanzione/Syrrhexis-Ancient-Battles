# Rulebook PDF generator

The rulebook's source lives in this repo, in `rulebook/src`. The Google Doc that used to hold it was retired on 2026-11-04 and is no longer updated.

- One HTML fragment per chapter, read in file-name order (`01-introduction.html`, `02-golden-rules.html`, ...). Each starts with its `<h1>`. To move a chapter, rename its file.
- Headings carry readable ids (`id="feign-retreat"`); cross-references are `<a class="xref" href="#feign-retreat">`. The build warns about any link to a missing heading and stops on duplicate ids.
- Diagrams are referenced as `../../diagrams/<name>.svg`; regenerate them with the scripts in `diagrams/`.
- `book.css` holds the page layout (8×10, two columns). Fonts come from `tools/fonts` (set `SYRRHEXIS_FONTS` to use another folder).

Build:

    pip install weasyprint
    python3 tools/rulebook-pdf/build.py

This writes `rulebook/Syrrhexis_Rulebook.pdf` directly. The build re-renders a few times, pushing any chapter heading that lands in the bottom quarter of a page onto the next page, and stops if any heading would be dropped.
