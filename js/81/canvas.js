(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  context.fillRect(50, 50, 100, 100);

  context.fillStyle = 'red';
  context.fillRect(150, 150, 100, 100);

  context.lineWidth = 15;
  context.strokeStyle = 'green';
  context.strokeRect(50, 50, 100, 100);

  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(175, 50);
  context.lineTo(200, 75);
  context.lineTo(200, 25);
  context.lineTo(175, 50);
  context.stroke();

  context.beginPath();
  context.moveTo(225, 50);
  context.lineTo(200, 75);
  context.lineTo(200, 25);
  context.fill();

  context.beginPath();
  context.lineWidth = 5;
  context.moveTo(375, 50);
  context.lineTo(400, 75);
  context.lineTo(400, 25);
  context.lineTo(375, 50);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(75, 375, 50, 0, Math.PI, false);
  context.stroke();
  context.fill();
}());