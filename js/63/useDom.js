(function() {
  'use strict';

  const theButton = document.getElementById('theButton');
  const numClicksElement = document.getElementById('numClicks');

  let clicks = 0;
  theButton.addEventListener('click', () => {
    numClicksElement.innerText = ++clicks;
  });
}());



