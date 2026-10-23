const app = document.querySelector("#app");
let styles = {};
let currentImages = [],
  currentIndex = 0;
const dlg = document.querySelector("#lightbox");
const lbImg = document.querySelector("#lightbox-img");
const count = document.querySelector("#lightbox-count");
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
function home() {
  document.title = "Tattoo Bible — Visual Style Guide";
  app.innerHTML = `<section class="intro"><div class="eyebrow">AN EXPLORATION OF INK & FORM <span>— 001</span></div><h1>Every style<br>tells a <em>story.</em></h1><div class="intro-bottom"><p>A visual reference library exploring the distinctive language of tattoo art. Find a style. Explore its details. Follow your curiosity.</p><a class="text-link" href="#gallery">EXPLORE THE COLLECTION <span aria-hidden="true">↗</span></a></div></section><section id="gallery" class="collection"><div class="section-heading"><div><span class="eyebrow">THE COLLECTION</span><h2>Explore by style<span class="count">06</span></h2></div><p>SELECT A STYLE TO DISCOVER MORE</p></div><div class="cards">${Object.entries(
    styles,
  )
    .map(
      ([slug, s], i) =>
        `<a class="style-card" href="#style/${slug}"><div class="card-photo"><img src="${s.cover}" alt="${esc(s.name)} tattoo" ${i > 2 ? 'loading="lazy"' : ""}><span class="arrow" aria-hidden="true">↗</span></div><div class="card-meta"><h3>${esc(s.name)}</h3><span>0${i + 1} / 06</span></div><div class="card-sub">${esc(s.tag)}</div></a>`,
    )
    .join("")}</div></section>`;
}
function detail(slug) {
  let s = styles[slug];
  if (!s) {
    home();
    return;
  }
  document.title = s.name + " — Tattoo Bible";
  app.innerHTML = `<section class="detail"><a class="back" href="#gallery">← BACK TO ALL STYLES</a><div class="detail-head"><div><span class="eyebrow">THE STYLE GUIDE / ${esc(s.tag.toUpperCase())}</span><h1>${esc(s.name)}</h1></div><div><p class="detail-description">${esc(s.desc)}</p><div class="trait-list">${s.traits.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div></div><img class="detail-feature" src="${s.cover}" alt="Featured ${esc(s.name)} tattoo"><div class="gallery-title"><h2>Image gallery</h2><span>${s.images.length} REFERENCES · CLICK TO EXPAND</span></div><div class="image-grid">${s.images.map((im, i) => `<button data-image="${i}" aria-label="View ${esc(im.alt)}"><img loading="lazy" src="${im.src}" alt="${esc(im.alt)}"></button>`).join("")}</div></section>`;
  currentImages = s.images;
  app
    .querySelectorAll("[data-image]")
    .forEach((b) =>
      b.addEventListener("click", () => openImage(Number(b.dataset.image))),
    );
}
function route() {
  let hash = decodeURIComponent(location.hash.slice(1));
  if (hash.startsWith("style/")) detail(hash.slice(6));
  else home();
  if (hash === "gallery")
    requestAnimationFrame(() => document.getElementById("gallery")?.scrollIntoView());
  else window.scrollTo(0, 0);
}
function openImage(i) {
  currentIndex = i;
  updateImage();
  dlg.showModal();
}
function updateImage() {
  lbImg.src = currentImages[currentIndex].src;
  lbImg.alt = currentImages[currentIndex].alt;
  count.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}
function move(n) {
  currentIndex = (currentIndex + n + currentImages.length) % currentImages.length;
  updateImage();
}
document.querySelector("#close-lightbox").addEventListener("click", () => dlg.close());
document.querySelector("#prev-image").addEventListener("click", () => move(-1));
document.querySelector("#next-image").addEventListener("click", () => move(1));
document.addEventListener("keydown", (e) => {
  if (!dlg.open) return;
  if (e.key === "ArrowLeft") move(-1);
  if (e.key === "ArrowRight") move(1);
});
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
fetch("data/styles.json")
  .then((r) => r.json())
  .then((data) => {
    styles = data;
    route();
    window.addEventListener("hashchange", route);
  })
  .catch(() => {
    app.innerHTML =
      '<section class="detail"><h1>Open using a local server</h1><p>From this folder, run <code>python -m http.server 8000</code> and visit <code>http://localhost:8000</code>.</p></section>';
  });
