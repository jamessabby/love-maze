document.addEventListener('DOMContentLoaded', () => {
  const roseContainer = document.querySelector('roseContainer');
  const yesBtn = document.querySelector('.yesBtn');

  const upButton = document.querySelector('.upButton');
  const rightButton = document.querySelector('.rightButton');
  const leftButton = document.querySelector('.leftButton');
  const downButton = document.querySelector('.downButton')

  const sabCharacter = document.querySelector('.sab');
  const ishaCharacter = document.querySelector('.isha');

  const mazeWalls = document.querySelector('.mazeWalls');

  // HANDLES THE FALLING ROSES EFFECT
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

  // THE MAZE GAME APPEARS WHEN THE YES BUTTON WAS CLICKED
  yesBtn.addEventListener('click', () => {
    const dialogue = document.querySelector('.dialogueContainer');
    const maze = document.querySelector('.mazeScene');
    const controls = document.querySelector('.controls');

    dialogue.style.display = 'none';

    maze.style.display = 'flex';
    maze.style.justifyContent = 'center';
    maze.style.alignItems = 'center';

    controls.style.display = 'grid';
  });
  
  const moveStep = 20;
  let isClicked = false;
  let hitWall = false;

  // MAZE GAME FUNCTIONS

  function smallCharacter() {
    if (isClicked) {
      sabCharacter.style.height = `${2}rem`;
    }
  }

  // CONTROL BUTTONS
  upButton.addEventListener('click', () => {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).top || 0);
    let newLocation = currentLocation - moveStep;
    sabCharacter.style.top = newLocation + 'px';
  });

  rightButton.addEventListener('click', () => {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).left || 0);
    let newLocation = currentLocation + moveStep;
    sabCharacter.style.left = newLocation + 'px';
  });

  leftButton.addEventListener('click', () => {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).left || 0);
    let newLocation = currentLocation - moveStep;
    sabCharacter.style.left = newLocation + 'px';
  });

  downButton.addEventListener('click', () => {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).top || 0);
    let newLocation = currentLocation + moveStep;
    sabCharacter.style.top = newLocation + 'px';
  });

});