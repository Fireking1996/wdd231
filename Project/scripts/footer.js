export function loadFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Dracollum. All rights reserved.</p>
    <p><a href="attributions.html">Attributions</a> | <a href="https://yourvideo.link" target="_blank">Demo Video</a></p>
  `;
  document.body.appendChild(footer);
}
