import { THING_SIZE } from './constants.js';
import crunch from '../media/crunch.mp3';
import crash from '../media/crash.mp3';
const crunchSound = new Audio(crunch);
const crashSound = new Audio(crash);

export default class Snake {
  constructor(canvas, snakeImg, apple, gameOverCb, ateAppleCb) {
    this.canvas = canvas;
    this.snakeHead = snakeImg;
    this.apple = apple;
    this.gameOverCb = gameOverCb;
    this.ateAppleCb = ateAppleCb;
    this.context = canvas.getContext('2d');
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
    this.context.drawImage(this.snakeHead, this.segments[0].x, this.segments[0].y, THING_SIZE, THING_SIZE);

    for (let i = 1; i < this.segments.length; i++) {
      this.context.fillStyle = '#00ff00';
      this.context.fillRect(this.segments[i].x, this.segments[i].y, THING_SIZE, THING_SIZE);
    }
  }

  move() {
    let gameOver = false;
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

    if (x < 0 || x > this.canvas.width - THING_SIZE || y < 0 || y > this.canvas.height - THING_SIZE) {
      gameOver = true;
    }

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

      crashSound.currentTime = 0; // in case it was playing
      crashSound.play();

      this.gameOverCb();
    }

    if (this.apple) {
      if (head.x === this.apple.x && head.y === this.apple.y) {
        this.segments.push({ x: oldTailX, y: oldTailY });

        do {
          this.apple.move();
        } while (this.isOnTopOf(this.x, this.y));

        crunchSound.currentTime = 0;
        crunchSound.play();

        this.ateAppleCb();
      }
    }

    this.draw();
  }

  isOnTopOf(x, y, startIndex = 0, endIndex = this.segments.length - 1) {
    for (let i = startIndex; i < endIndex; i++) {
      if (this.segments[i].x === x && this.segments[i].y === y) {
        return true;
      }
    }
    return false;
  }
}

//export default Snake;