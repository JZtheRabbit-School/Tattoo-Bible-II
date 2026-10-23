// The pages and navigation work without JavaScript.
// This small enhancement marks the current style in any matching links.
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    const destination = new URL(link.getAttribute("href"), window.location.href);

    if (destination.pathname === currentPath && !destination.hash) {
      link.setAttribute("aria-current", "page");
    }
  });
});
