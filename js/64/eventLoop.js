(function () {
  'use strict';

  const theButton = document.getElementById('theButton');
  theButton.style.color = 'red';
  theButton.style.backgroundColor = 'black';
  theButton.style.fontWeight = 'bold';
  theButton.style.padding = '1em';
  theButton.style.fontSize = '2em';
  theButton.style.position = 'absolute';
  theButton.style.top = '0';
  //theButton.className = 'theButtonStyle';

  console.log(theButton.style.top);

  /*for(let i = 0; i < 100; i++) {
    theButton.style.top = `${parseInt(theButton.style.top) + 1}px`;
  }*/

  function moveIt() {
    theButton.style.top = `${parseInt(theButton.style.top) + 10}px`;
    //setTimeout(moveIt, 100);
  }

  //setTimeout(moveIt, 100);
  //moveIt();
  //setInterval(moveIt, 100);

  //const moveItButton = document.getElementById('moveIt');
  /*moveItButton.addEventListener('click', () => {
    theButton.style.top = `${parseInt(theButton.style.top) + 1}px`;
  });*/
  //moveItButton.addEventListener('click', moveIt);

  let theIntervalId;
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', () => {
    if (!theIntervalId) {
      theIntervalId = setInterval(moveIt, 100);
      startButton.innerText = 'Stop';
    } else {
      clearInterval(theIntervalId);
      theIntervalId = undefined;
      startButton.innerText = 'Start';
    }
  });
}());