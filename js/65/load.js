
(function () {
  'use strict';

  const oldOnLoad = onload;

  onload = function () {
    if (oldOnLoad) {
      oldOnLoad();
    }

    const theButton = document.getElementById('theButton');
    theButton.addEventListener('click', () => {
      console.log('button was clicked');
    });
  };

  /*window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const theButton = document.getElementById('theButton');
    theButton.addEventListener('click', () => {
      console.log('button was clicked');
    });
  });*/
}());