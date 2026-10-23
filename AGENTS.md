# Tattoo Bible — Agent Notes

## Goal
Build a minimal, responsive visual reference for tattoo styles, with a grid homepage and per-style image galleries.

## Current prototype
- Six styles: Japanese Traditional, Old School, New School, Neo Traditional, Realism, Sacred Geometry.
- Each style has a homepage cover, description, traits, and expandable gallery.
- Content and asset paths are kept in `data/styles.json`, independent from the visual CSS/JS.
- No backend or frameworks.

## Conventions
- Keep image assets local; optimize for the web.
- Do not hardcode descriptions or image lists in layout code.
- Maintain responsive and keyboard-accessible interactions.
- Confirm photo usage rights and credits before publication.

## Next steps
- Review cover-photo selections and captions with collaborators.
- Add attribution metadata and licensing status.
- Test on mobile and deploy to GitHub Pages when approved.

## Source formatting and review
- Use two-space indentation for HTML, CSS, JavaScript, and JSON.
- Keep `index.html`, `css/style.css`, `js/app.js`, and `data/styles.json` as separate readable files.
- Keep the background `#EFF1C5` unless the user requests a change.
- Gallery grouping follows `data/styles.json`; some original image filenames do not match their corrected style.
- The user reviewed the restored prototype and approved replacing Tattoo-Bible-II with this version. Preserve readable formatting in future changes.
