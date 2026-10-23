# Tattoo Bible — Website Prototype

A minimal responsive HTML/CSS/JavaScript gallery of six tattoo styles.

## Live website

https://jztherabbit-school.github.io/Tattoo-Bible-II/

## Run locally

The website loads `data/styles.json` with `fetch`, so open it through a local HTTP server rather than by double-clicking `index.html`:

```bash
cd tattoo-bible-prototype
python -m http.server 8001
```

Then visit http://localhost:8001. You can also host this folder on GitHub Pages.

## Project files

- `index.html`: main HTML document.
- `AGENTS.md`: instructions for coding agents (the standard filename is plural).
- `README.md`: setup and editing guide.

HTML, CSS, JavaScript, and JSON use two-space indentation.
The website background is `#EFF1C5`, defined by `--paper` in `css/style.css`.

## Edit content

- `data/styles.json`: names, descriptions, traits, image paths, and selected cover photos.
- `assets/`: locally optimized WebP versions of the supplied images.
- `css/style.css`: layout and visual design.
- `js/app.js`: navigation, cards, galleries, and lightbox.

## Notes

- The Sacred Geometry homepage cover is an AI recreation of the selected leg-tattoo photo with no subtitles; the original subtitled reference remains in its gallery.
- Image credits and permission status should be reviewed before public deployment.
- Some style selections were mapped to the closest matching files available in the current project; verify cover images during review.
- Google Fonts are optional; fallback fonts work offline.

## Current image corrections

- The cartoon dragon is in New School. Its original asset filename is retained so existing references remain valid.
- The snake-and-flower image is in Neo Traditional. Its original asset filename is retained.
- Japanese Traditional uses `assets/japanese-traditional-26.webp` as its cover.
- Gallery placement and order come from `data/styles.json`, not the asset filenames.

## Preview versus source code

GitHub repository file pages show source code. To view the website, use a local HTTP server or a deployed GitHub Pages link. Double-clicking `index.html` may prevent the JSON galleries from loading.

- `assets/old-school-panther-and-moth-sleeve-cleaned.png`: user-supplied reference edited with AI assistance to remove a subtitle; obscured details were reconstructed.

- `assets/new-school-creature-subtitle-removed.png`: subtitle removed with AI assistance; previously obscured details reconstructed. Original retained as `assets/new-school-41.webp`.

- `assets/new-school-anime-fox-mask-cleaned.png`: user-supplied reference with subtitle removed using AI assistance; obscured details reconstructed.
