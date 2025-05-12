// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggleBtn.classList.toggle('bx-sun');
  toggleBtn.classList.toggle('bx-moon');
});

// Animated Name Reveal from Center
const nameContainer = document.getElementById('Pritheesh-name');
const nameText = "Pritheesh";
const middle = Math.floor(nameText.length / 2);

[...nameText].forEach((letter, i) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.animationDelay = `${Math.abs(i - middle) * 0.1}s`;
  nameContainer.appendChild(span);
});
