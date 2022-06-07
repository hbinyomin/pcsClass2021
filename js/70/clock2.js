(function () {
  'use strict';

  let ticks = 0;
  /*let seconds = 0;
  let minutes = 0;
  let hours = 0;*/

  const clockElem = document.createElement('div');
  clockElem.className = 'clock';
  document.body.appendChild(clockElem);

  /*function padLeft(n, length, padding = ' ') {
    let paddedString = n ? n.toString() : '';
    while (paddedString.length < length) {
      paddedString = `${padding}${paddedString}`;
    }
    return paddedString;
  }*/

  function ensureTwoDigits(n) {
    // return n < 10 ? `0${n}` : n;
    // return padLeft(n, 2, '0');
    return n.toString().padStart(2, '0');
  }

  function tick() {
    ticks++;
  }

  function updateClock() {
    /*if (++seconds === 60) {
      seconds = 0;
      if (++minutes === 60) {
        minutes = 0;
        if (++hours === 24) {
          hours = 0;
        }
      }
    }*/
    // ticks++;
    const seconds = ticks % 60;
    const minutes = Math.floor(ticks / 60) % 60;
    let hours = Math.floor((ticks / 60) / 60) % 12;
    if (hours === 0) {
      hours = 12;
    }

    clockElem.innerText = `${ensureTwoDigits(hours)}:${ensureTwoDigits(minutes)}:${ensureTwoDigits(seconds)}`;
  }

  //setInterval(updateClock, 1000);
  setInterval(() => {
    tick();
    updateClock();
  }, 1000);
  updateClock();
}());