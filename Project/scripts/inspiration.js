// inspiration.js
export function loadQuote() {
  const quotes = [
    "Within every shadow lies a spark of story waiting to ignite.",
    "The pen is your wand — cast your world with purpose.",
    "Legends aren’t found, they’re forged in ink.",
    "Write what only your world remembers.",
    "Even dragons began as dreams.",
    "In every quiet moment, a world waits to be written.",
    "Fantasy isn’t an escape — it’s an arrival.",
    "You hold a quill and the power of a thousand stars."
  ];

  const quoteBox = document.getElementById("quote-box");
  if (quoteBox) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
  }
}
