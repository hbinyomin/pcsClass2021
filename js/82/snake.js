(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  //const img = document.getElementById('img');
  const snakeHead = new Image();
  snakeHead.src = 'images/snakehead.png';

  const SNAKE_SIZE = 64;

  let snakeDirection = 'ArrowRight';
  let score = 27;

  snakeHead.onload = () => {
    let x = 0;
    let y = 0;
    setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.font = 'bold 30px Arial';
      context.fillText(`Score: ${score}`, canvas.width - 160, 40);

      switch (snakeDirection) {
        case 'ArrowRight':
          x += SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          x -= SNAKE_SIZE;
          break;
        case 'ArrowUp':
          y -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          y += SNAKE_SIZE;
          break;
      }

      context.drawImage(snakeHead, x, y, SNAKE_SIZE, SNAKE_SIZE);
    }, 1000);
  };

  document.addEventListener('keydown', event => {
    console.log(event.key);

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        snakeDirection = event.key;
    }
  });

}());