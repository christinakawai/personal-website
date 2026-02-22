// Create the cursor glow element
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

// Update glow position on mouse move
document.addEventListener('mousemove', function(e) {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// Hide glow when mouse leaves window
document.addEventListener('mouseleave', function() {
  cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', function() {
  cursorGlow.style.opacity = '1';
});
