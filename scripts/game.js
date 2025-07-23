document.addEventListener('DOMContentLoaded', () => {
  const roseContainer = document.querySelector('.roseContainer');
  const yesBtn = document.querySelector('.yesBtn');

  const upButton = document.querySelector('.upButton');
  const rightButton = document.querySelector('.rightButton');
  const leftButton = document.querySelector('.leftButton');
  const downButton = document.querySelector('.downButton')

  const sabCharacter = document.querySelector('.sab');
  const ishaCharacter = document.querySelector('.isha');
  
  const finishScene = document.querySelector('.finishScene');
  let finishTexts = document.querySelector('.finish'); 
  const nextButton = document.querySelector('.nextButton');

  let gameAudio = new Audio('../audio/game-audio.mp3');
  let finishAudio = new Audio('../audio/finish-audio.mp3');
  gameAudio.volume = 1.0;
  gameAudio.loop = true;
  gameAudio.play();

  const sabStand = document.querySelector('.sabStand')
  const giveRose = document.querySelector('.giveRose')

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

  const maze = document.querySelector('.mazeScene');
  const controls = document.querySelector('.controls');

  // THE MAZE GAME APPEARS WHEN THE YES BUTTON WAS CLICKED
  yesBtn.addEventListener('click', () => {

    const dialogue = document.querySelector('.dialogueContainer');
    

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
      sabCharacter.style.width = `${2}rem`;
    }
  }

  function winChecker() {
    let currentLeft = parseInt(getComputedStyle(sabCharacter).left);
    let currentTop = parseInt(getComputedStyle(sabCharacter).top);
    
    if (currentLeft === 560 && currentTop === 360 || currentLeft === 560 && currentTop === 380) {

        gameAudio.pause();
        finishAudio.play();

        sabCharacter.style.height = `${4}rem`;
        sabCharacter.style.width = `${4}rem`;
        sabCharacter.style.top = `${348}px`;

        maze.style.display = 'none';
        controls.style.display = 'none';

        finishScene.style.display = 'flex';

        let nextLine = 0;
        nextButton.addEventListener('click', () => {
          nextLine++;
          if (nextLine === 1) {
            document.querySelector('.firstLine').style.opacity = 0;
            document.querySelector('.secondLine').style.opacity = 1;
          } else if (nextLine === 2) {
            document.querySelector('.secondLine').style.opacity = 0;
            document.querySelector('.thirdLine').style.opacity = 1;
          } else if (nextLine === 3) {
            document.querySelector('.thirdLine').style.opacity = 0;
            document.querySelector('.fourthLine').style.opacity = 1;
          } else if (nextLine === 4) {
            document.querySelector('.fourthLine').style.opacity = 0;
            document.querySelector('.fifthLine').style.opacity = 1;
          } else if (nextLine === 5) {
            document.querySelector('.fifthLine').style.opacity = 0;
            document.querySelector('.sixthLine').style.opacity = 1;
            sabStand.style.display = 'none';
            giveRose.style.display = 'block';
          } else if (nextLine === 6) {
            document.querySelector('.sixthLine').style.opacity = 0;
            document.querySelector('.seventhLine').style.opacity = 1;
          } else {
             clearInterval(roseInterval);
             setTimeout(() => {
                window.location.href = 'index.html'
              }, 400);
          }
        })
      };

  }


  // CONTROL BUTTONS
  function moveUp() {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).top || 0);
    let newLocation = currentLocation - moveStep;
    sabCharacter.style.top = newLocation + 'px';
    winChecker();
    upButton.classList.add('active');
    setTimeout(function() { 
      upButton.classList.remove("active"); 
    }, 100); 
  }

  function moveRight() {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).left || 0);
    let newLocation = currentLocation + moveStep;
    sabCharacter.style.left = newLocation + 'px';
    winChecker()
    rightButton.classList.add('active');
    setTimeout(function() { 
      rightButton.classList.remove("active"); 
    }, 100); 
  }

  function moveLeft() {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).left || 0);
    let newLocation = currentLocation - moveStep;
    sabCharacter.style.left = newLocation + 'px';
    winChecker();
    leftButton.classList.add('active');
    setTimeout(function() { 
      leftButton.classList.remove("active"); 
    }, 100); 
  }

  function moveDown() {
    isClicked = true;
    smallCharacter();
    let currentLocation = parseInt(getComputedStyle(sabCharacter).top || 0);
    let newLocation = currentLocation + moveStep;
    sabCharacter.style.top = newLocation + 'px';
    winChecker();
    downButtons.classList.add('active');
    setTimeout(function() { 
      downButton.classList.remove("active"); 
    }, 100); 
  }

  upButton.addEventListener('click', moveUp);
  rightButton.addEventListener('click', moveRight);
  leftButton.addEventListener('click', moveLeft); 
  downButton.addEventListener('click', moveDown);

  document.addEventListener("keydown", function(event) {
    moveButtons(event.key);
  })

    function moveButtons(key) {
    switch(key) {

      case 'ArrowUp':
        moveUp();
        break;

      case 'ArrowRight':
        moveRight();
        break; 

      case 'ArrowLeft':
        moveLeft();
        break;
      
      case 'ArrowDown':
        moveDown();
        break;
    }
  }

  
});