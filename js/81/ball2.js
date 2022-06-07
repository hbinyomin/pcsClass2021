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

  class Ball {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;

      this.x = radius;
      this.y = radius;
      this.dx = 10;
      this.dy = 10;
    }

    draw(/*timestamp*/) {
      /*if (!oldTimestamp) {
        oldTimestamp = timestamp;
      }
      const timeDelta = timestamp - oldTimestamp;
      console.log(timestamp, timeDelta);
      oldTimestamp = timestamp;

      x += dx * (timeDelta * 0.01);
      y += dy * (timeDelta * 0.01);*/

      this.x += this.dx;
      this.y += this.dy;

      if (this.y < this.radius || this.y > canvas.height - this.radius) {
        this.dy = -this.dy;
      }

      if (this.x < this.radius || this.x > canvas.width - this.radius) {
        this.dx = -this.dx;
      }

      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.fill();

      //requestAnimationFrame(drawBall);
    }
  }

  //const ball = new Ball(30, 'red');
  //ball.draw();
  const balls = [];
  balls.push(new Ball(30, 'red'));

  // const theBallDraw = ball.draw.bind(ball);
  // 60hz = 1000 frames per second
  //setInterval(theBallDraw, 16.6666);
  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.draw());
  }, 16.6666);
  //requestAnimationFrame(drawBall);

  const ballColorInput = document.getElementById('color');
  const ballRadiusInput = document.getElementById('radius');
  document.getElementById('addBall').addEventListener('submit', e => {
    e.preventDefault();
    balls.push(new Ball(Number(ballRadiusInput.value), ballColorInput.value));
  });
}());