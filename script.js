const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble) => {
  const randomFloat = () => (Math.random() * 10 - 5).toFixed(2); // Random float between -5 and 5

  // Animate bubble movement
  setInterval(() => {
    const randomX = randomFloat(); // Random horizontal movement
    const randomY = randomFloat(); // Random vertical movement
    bubble.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }, 2000);
});
