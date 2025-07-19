document.addEventListener('DOMContentLoaded', () => {
  const roseContainer = document.querySelector('.rose-container');
  const yesBtn = document.querySelector('.yes-btn');

  function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');

    rose.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 4 + 3;
    rose.style.animationDuration = `${duration}s`;

    const delay = Math.random() * 2;
    rose.style.animationDelay = `${delay}s`;

    roseContainer.appendChild(rose);

    rose.addEventListener('animationend', () => {
      rose.remove();
    })
  }

  const roseInterval = setInterval(createRose, 2000);

  
  yesBtn.addEventListener('click', () => {
    clearInterval(roseInterval);
    setTimeout(() => {
      window.location.href = 'index.html'
    }, 100);
  });
});