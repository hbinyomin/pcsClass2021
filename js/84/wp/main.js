//(function () {
  'use strict';

  const resultElem = document.getElementById('result');
  const datePicker = document.getElementById('date');
  let clickCount = 0;
  datePicker.addEventListener('change', () => {
    resultElem.innerHTML = `You picked ${moment(datePicker.value).fromNow()}. This is your ${++clickCount} change.`;
  });
//}());