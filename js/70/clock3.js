window.pcsClock = (function () {
  'use strict';

  return function (parent = document.body) {
    // parent = parent || document.body;

    const clockElem = document.createElement('div');
    clockElem.className = 'clock';
    parent.appendChild(clockElem);

    function updateClock() {
      clockElem.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();
  };
}());