(function () {
  'use strict';

  let licenseAccepted = false;

  const theLicenseButton = document.getElementById('licenseButton');
  theLicenseButton.addEventListener('click', () => {
    console.log('button was clicked');
    licenseAccepted = true;

    theLicenseButton.disabled = true;
  });

  const theLink = document.getElementById('theLink');
  theLink.addEventListener('click', event => {
    console.log('link was clicked');

    if (!licenseAccepted) {
      event.preventDefault();
    }
  });

}());