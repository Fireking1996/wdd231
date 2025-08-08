window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('mapCanvas');
  const ctx = canvas.getContext('2d');
  const clearBtn = document.getElementById('clearBtn');
  const saveBtn = document.getElementById('saveBtn');

  let drawing = false;

  // Start drawing
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  // Draw line
  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = '#ffd29d'; // light parchment color
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Stop drawing
  canvas.addEventListener('mouseup', () => {
    drawing = false;
  });

  canvas.addEventListener('mouseleave', () => {
    drawing = false;
  });

  // Clear canvas
  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Save image
  saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'dracollum_map.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});
