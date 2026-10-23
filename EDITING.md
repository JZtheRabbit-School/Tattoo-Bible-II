# Editing your website

## 1. Change text
Open `index.html` for the homepage, or the matching file under `styles/` for a style page. The visible words live directly in HTML.

## 2. Change the creamy background
At the top of `css/style.css`, change `--cream: #f7f1e6;`.

## 3. Add an approved picture
1. Put the picture in the correct folder, for example `images/new-school/cartoon-dragon.jpg`.
2. Open `styles/new-school.html`.
3. Replace the entire `<div class="empty-gallery ...">...</div>` block with this example:

```html
<div class="photo-grid">
  <figure>
    <a href="../images/new-school/cartoon-dragon.jpg" target="_blank" rel="noopener">
      <img
        src="../images/new-school/cartoon-dragon.jpg"
        alt="Colorful cartoon dragon tattoo"
        loading="lazy"
      >
    </a>
    <figcaption>Cartoon dragon · Artist credit here</figcaption>
  </figure>
</div>
```

Use JPG, PNG, or WebP. Filenames and extensions must match exactly, including capitalization. Use descriptive lowercase names with hyphens. Add more complete `<figure>...</figure>` blocks inside the photo grid.

## 4. Reorder pictures
Move whole `<figure>...</figure>` blocks up or down in that page. Their order in the HTML is their display order. File Explorer sorting does not affect it.

## 5. Move a picture to another style
Move its file to the correct `images/<style>/` folder. Move its whole `<figure>` block to that style's HTML page, then update both `href` and `src` to the new path. Record the source and artist in that image folder's README.

## 6. Set a homepage cover
In `index.html`, find the style's `cover-placeholder` div and replace it with:

```html
<img class="cover-photo" src="images/new-school/cartoon-dragon.jpg" alt="Colorful cartoon dragon tattoo">
```

Add this rule to `css/style.css`:

```css
.cover-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 110px 110px 4px 4px;
}
```

## 7. Publish changes
Commit and push to `main`. With GitHub Pages set to deploy from main / root, GitHub updates the website automatically. Reload after the deployment finishes. For local edits, save and refresh your browser.
