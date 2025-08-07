export function loadMenu() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="inspiration.html">Inspiration</a>
    <a href="namegen.html">Name Generator</a>
    <a href="submit.html">Submit Story</a>
  `;
  document.body.prepend(nav);
}
