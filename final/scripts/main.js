import { loadMenu } from './menu.js';
import { loadFooter } from './footer.js';
import { loadQuote } from './inspiration.js';

document.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  loadFooter();
  loadQuote(); // ← Adds random inspirational quote
});
