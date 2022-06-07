(function () {
  'use strict';

  const clockElem = document.createElement('div');

  /*clockElem.style.border = '3px solid blue';
  clockElem.style.display = 'inline-block';
  clockElem.style.padding = '1em';
  clockElem.style.fontSize = '2em';
  clockElem.style.fontWeight = 'bold';
  clockElem.style.color = 'yellow';
  clockElem.style.backgroundColor = 'black';*/

  clockElem.className = 'clock';

  document.body.appendChild(clockElem);

  function updateClock() {
    clockElem.innerText = new Date().toLocaleTimeString();
  }

  setInterval(updateClock, 1000);
  updateClock();
}());