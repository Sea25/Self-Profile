// Custom Cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Particle.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#64ffda" },
    shape: { type: "circle" },
    opacity: { random: true, value: 0.5 },
    size: { random: true, value: 3 },
    line_linked: { enable: true, distance: 150, color: "#64ffda", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true }
  }
});

// Confetti Button
const confettiBtn = document.getElementById('confetti-btn');
confettiBtn.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});