document.addEventListener('DOMContentLoaded', () => {

  const heartsContainer = document.querySelector('.hearts-container') // grabs the hearts-container
  const playButton = document.querySelector('.play-btn');

  function createHeart() {
      const heart = document.createElement('div');    // creates new div element
      heart.classList.add('heart');                   // adds the heart css

      // Set random horizontal position
      heart.style.left = `${Math.random() * 100}vw`;

      // Randomize animation duration for variety (e.g., 3 to 7 seconds)
      const duration = Math.random() * 4 + 3;                             // Each heart will fall at a slightly different speed
      heart.style.animationDuration = `${duration}s`;

      // Randomize initial delay slightly (e.g., 0 to 2 seconds)
      const delay = Math.random() * 2;
      heart.style.animationDelay = `${delay}s`;

      heartsContainer.appendChild(heart);   // It takes the heart element you've just created and styled, and inserts it as a child inside the heartsContainer HTML element. 

      // Remove heart after its animation ends to clean up DOM
      heart.addEventListener('animationend', () => {
          heart.remove();
      });
  }

  const heartInterval = setInterval(createHeart, 500);    // the function will be called every 0.5s

    playButton.addEventListener('click', () => {
    clearInterval(heartInterval);
    setTimeout(() => {
      window.location.href = 'game.html'
    }, 400)
  })
})


