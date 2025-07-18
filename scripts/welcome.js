document.addEventListener('DOMContentLoaded', () => {

  const heartsContainer = document.querySelector('.hearts-container')

  function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      // Set random horizontal position
      heart.style.left = `${Math.random() * 100}vw`;

      // Randomize animation duration for variety (e.g., 3 to 7 seconds)
      const duration = Math.random() * 4 + 3;
      heart.style.animationDuration = `${duration}s`;

      // Randomize initial delay slightly (e.g., 0 to 2 seconds)
      const delay = Math.random() * 2;
      heart.style.animationDelay = `${delay}s`;

      heartsContainer.appendChild(heart);

      // Remove heart after its animation ends to clean up DOM
      heart.addEventListener('animationend', () => {
          heart.remove();
      });
  }

  const heartInterval = setInterval(createHeart, 500);
})

