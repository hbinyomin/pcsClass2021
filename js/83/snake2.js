(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  const THING_SIZE = 64;

  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const crashSound = document.getElementById('crash');
  const crunchSound = document.getElementById('crunch');

  let gameOver = false;
  let score = 0;
  let speed = 500;

  class Snake {
    constructor() {
      this.segments = [{ x: 0, y: 0 }];
      this.direction = 'ArrowRight';

      document.addEventListener('keydown', event => {
        switch (event.key) {
          case 'ArrowUp':
            if (this.segments.length === 1 || this.direction !== 'ArrowDown') {
              this.direction = event.key;
            }
            break;
          case 'ArrowDown':
            if (this.segments.length === 1 || this.direction !== 'ArrowUp') {
              this.direction = event.key;
            }
            break;
          case 'ArrowLeft':
            if (this.segments.length === 1 || this.direction !== 'ArrowRight') {
              this.direction = event.key;
            }
            break;
          case 'ArrowRight':
            if (this.segments.length === 1 || this.direction !== 'ArrowLeft') {
              this.direction = event.key;
            }
            break;
        }
      });

      this.draw();
    }

    draw() {
      context.drawImage(snakeHead, this.segments[0].x, this.segments[0].y, THING_SIZE, THING_SIZE);

      for (let i = 1; i < this.segments.length; i++) {
        context.fillStyle = '#00ff00';
        context.fillRect(this.segments[i].x, this.segments[i].y, THING_SIZE, THING_SIZE);
      }
    }

    move() {
      let head = this.segments[0];
      let segmentFormerlyKnownAsTail = this.segments.pop();
      let oldTailX = segmentFormerlyKnownAsTail.x;
      let oldTailY = segmentFormerlyKnownAsTail.y;

      let x = head.x;
      let y = head.y;

      switch (this.direction) {
        case 'ArrowRight':
          x += THING_SIZE;
          break;
        case 'ArrowLeft':
          x -= THING_SIZE;
          break;
        case 'ArrowUp':
          y -= THING_SIZE;
          break;
        case 'ArrowDown':
          y += THING_SIZE;
          break;
      }

      if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE) {
        gameOver = true;
      }

      /*for(let i = 3; i < this.segments.length - 1; i++) {
        if (this.segments[i].x === x && this.segments[i].y === y) {
          gameOver = true;
        }
      }*/
      if (this.isOnTopOf(x, y, 3)) {
        gameOver = true;
      }

      if (!gameOver) {
        segmentFormerlyKnownAsTail.x = x;
        segmentFormerlyKnownAsTail.y = y;
        this.segments.unshift(segmentFormerlyKnownAsTail);
      } else {
        // not going to move so put the tail back
        this.segments.push(segmentFormerlyKnownAsTail);
      }

      if (apple) {
        if (head.x === apple.x && head.y === apple.y) {
          this.segments.push({ x: oldTailX, y: oldTailY });
          score++;
          speed = speed * 0.9;
          crunchSound.currentTime = 0;
          crunchSound.play();
          apple.move();
        }
      }

      this.draw();
    }

    isOnTopOf(x, y, startIndex = 0, endIndex = this.segments.length - 1) {
      for(let i = startIndex; i < endIndex; i++) {
        if (this.segments[i].x === x && this.segments[i].y === y) {
          return true;
        }
      }
      return false;
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
    }

    move() {
      do {
        this.x = this.getRandomNumber(0, canvas.width - 1);//THING_SIZE);
        this.y = this.getRandomNumber(0, canvas.height - 1);//THING_SIZE);
      } while(snake.isOnTopOf(this.x, this.y));
      this.draw();
    }

    getRandomNumber(min, max) {
      let r = Math.floor(Math.random() * (max - min + 1)) + min;
      r = r - r % THING_SIZE;
      return r;
    }
  }

  let snake;
  let apple;

  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ff0000';
    context.font = 'bold 30px Arial';
    context.fillText(`Score: ${score}`, canvas.width - 160, 40);

    if (apple) {
      apple.draw();
    }

    snake.move();

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      context.fillStyle = '#0000ff';
      context.font = 'bold 30px Arial';
      context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
      crashSound.currentTime = 0; // in case it was playing
      crashSound.play();
    }
  }

  const snakeHead = new Image();
  snakeHead.src = 'images/snakehead.png';
  snakeHead.onload = () => {
    snake = new Snake();
    setTimeout(gameLoop, speed);
  };

  const appleImg = new Image();
  appleImg.src = 'images/redapple.png';
  appleImg.onload = () => {
    apple = new Apple();
  };
}());


//00xxxxxxxxxx00
//000xxxxxxxxxx0
