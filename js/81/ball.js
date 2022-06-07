(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');

  const context = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = 'blue';
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const BALL_RADIUS = 20;
  let x = BALL_RADIUS;
  let y = BALL_RADIUS;
  let dx = 10;
  let dy = 10;
  let oldTimestamp;
  function drawBall(timestamp) {
    if (!oldTimestamp) {
      oldTimestamp = timestamp;
    }
    const timeDelta = timestamp - oldTimestamp;
    console.log(timestamp, timeDelta);
    oldTimestamp = timestamp;

    x += dx * (timeDelta * 0.01);
    y += dy * (timeDelta * 0.01);

    if (y < BALL_RADIUS || y > canvas.height - BALL_RADIUS) {
      dy = -dy;
    }

    if (x < BALL_RADIUS || x > canvas.width - BALL_RADIUS) {
      dx = -dx;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, BALL_RADIUS, 0, 2 * Math.PI);
    context.fill();

    requestAnimationFrame(drawBall);
  }

  // 60hz = 1000 frames per second
  //setInterval(drawBall, 16.6666);
  requestAnimationFrame(drawBall);

  setInterval(() => context.fillStyle = getRandomColor(), 1000);
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}());