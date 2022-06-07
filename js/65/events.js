(function () {
  'use strict';

  const buttonOne = document.getElementById('buttonOne');
  buttonOne.style.backgroundColor = 'red';

  buttonOne.addEventListener('click', event => {
    console.log('button one clicked', event);

    event.stopPropagation();
  });

  const theDiv = document.getElementById('theDiv');
  theDiv.addEventListener('click', event => {
    console.log('the div was clicked', event);

    console.log('Do the thing for ', event.target.innerHTML);

    if (event.target.innerHTML === '2') {
      console.log('button 2 was clicked');
    } else if (event.target.innerHTML === '3') {
      console.log('button 3 was clicked');
    } else if (event.target.innerHTML === '4') {
      console.log('button 4 was clicked');
    }
  });
}());