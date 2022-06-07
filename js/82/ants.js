//(function () {
'use strict';

const canvas = document.getElementById('theCanvas');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const context = canvas.getContext('2d');

class Ant {
  static ANT_SIZE = 3;

  constructor(color = '#000000') {
    this.color = color;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.brains = 0;
    this.draw();
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, Ant.ANT_SIZE, Ant.ANT_SIZE * 2);
  }

  move(deltaTime) {
    if (--this.brains < 0) {
      this.brains = this.getRandomNumber(1, 100);
      this.deltaX = this.getRandomNumber(-1, 1);
      this.deltaY = this.getRandomNumber(-1, 1);
    }

    //this.x += this.getRandomNumber(-1, 1) * (0.00003 * deltaTime);
    //this.y += this.getRandomNumber(-1, 1) * (0.00003 * deltaTime);

    this.x += this.deltaX * (0.00003 * deltaTime);
    this.y += this.deltaY * (0.00003 * deltaTime);

    if (this.x < Ant.ANT_SIZE) {
      this.x = Ant.ANT_SIZE;
    }
    else if (this.x > canvas.width - Ant.ANT_SIZE) {
      this.x = canvas.width - Ant.ANT_SIZE;
    }

    if (this.y < (Ant.ANT_SIZE * 2)) {
      this.y = Ant.ANT_SIZE * 2;
    }
    else if (this.y > canvas.height - (Ant.ANT_SIZE * 2)) {
      this.y = canvas.height - (Ant.ANT_SIZE * 2);
    }
    this.draw();
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//const ant = new Ant();
const ants = [];
for(let i = 0; i < 1000; i++) {
  ants.push(new Ant());
}

/*
setInterval(() => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  //ant.move();
  ants.forEach(ant => ant.move());
}, 100);
*/

let lastTimestamp;
function drawAnts(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }
  const deltaTime = timestamp - lastTimestamp;

  context.clearRect(0, 0, canvas.width, canvas.height);
  ants.forEach(ant => ant.move(deltaTime));

  requestAnimationFrame(drawAnts);
}

requestAnimationFrame(drawAnts);

const numAnts = document.getElementById('amount');
const antColor = document.getElementById('color');
document.getElementById('addAnts').addEventListener('submit', e => {
  e.preventDefault();

  for(let i = 0; i < Number(numAnts.value); i++) {
    ants.push(new Ant(antColor.value));
  }
});

//}());