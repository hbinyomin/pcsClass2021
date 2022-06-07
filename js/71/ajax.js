(function () {
  'use strict';

  const request = new XMLHttpRequest();
  console.log('after create', request.readyState);

  request.open('GET', 'file://c:\\hw.js');
  console.log('after get', request.readyState);

  request.send();
  console.log('after send', request.readyState);
  console.log('request.responseText', request.responseText);

  /*setTimeout(() => {
    console.log('in timeout', request.readyState);
    console.log('request.responseText', request.responseText);
  }, 2000);*/

  /*request.onreadystatechange = e => {
    console.log('in onreadystatechange', request.readyState);
    if (request.readyState === 4) {
      if (request.status < 400) {
        console.log('request.responseText', request.responseText);
      } else {
        console.error('FAILED', request.status, request.statusText);
      }
    }
  };*/

  request.onload = () => {
    if (request.status < 400) {
      console.log('request.responseText', request.responseText);
    } else {
      console.error('FAILED', request.status, request.statusText);
    }
  };

  request.onerror = e => {
    console.error('really bad error', e);
  };

  console.log('file end');
}());