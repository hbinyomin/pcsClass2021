//(function () {
//'use strict';

import './css/index.css';
import snakeHead from '../images/snakehead.png';
import redapple from '../images/redapple.png';
import $ from 'jquery';

let clickCount = 0;
//const results = $('#results');
$('#theButton').click(() => {
  $('#results').text(`I was really clicked ${++clickCount} times`);

  const snake = new Image();
  //snake.src= "images/snakehead.png";
  snake.src = snakeHead;
  document.body.appendChild(snake);

  const apple = new Image();
  //apple.src= "images/redapple.png";
  apple.src = redapple;
  document.body.appendChild(apple);
});

import joe from '../potus.json';
console.log(typeof joe, joe.first, joe.last, joe.email, joe);

import joeWithComments from '../potus.json5';
console.log(typeof joeWithComments, joeWithComments.first, joeWithComments.last, joeWithComments.email, joeWithComments);

import spreadSheetData from '../data.csv';
console.log(typeof spreadSheetData, spreadSheetData);

//import { first, last, email } from '../potus.json';
//console.log(first, last, email);

/*import sayHello, { sayGoodbye, foo } from './sayHello';
sayHello('Joe');
sayGoodbye('Joe');
console.log(foo);*/

import foobar, { sayGoodbye as sg, foo as bar } from './sayHello';
foobar('Joe');
sg('Joe');
console.log(bar);

import foo2, { sayGoodbye, foo } from './sayHello';
foo2('Joe');
sayGoodbye('Joe');
console.log(foo);
//}());