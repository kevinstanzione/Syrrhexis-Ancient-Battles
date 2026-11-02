# Fonts

Static instances of the fonts used by the rulebook PDF, the Army Book and the art spreads. All three families are under the SIL Open Font License 1.1 (see the OFL files).

- Cinzel 400/600/700: headings. It has no θ or Ḫ, so the builders fall back to EB Garamond for those letters.
- EB Garamond 400/600/700 and Italic 400/600: body text.
- Source Sans 3 400/600/700 and Italic 400/600/700: tables. The italics were made by merging the latin, latin-ext and greek subsets from @fontsource/source-sans-3.

Every builder looks here by default; set `SYRRHEXIS_FONTS` to use another folder.
