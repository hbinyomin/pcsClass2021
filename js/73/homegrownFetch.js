(async function () {
  'use strict';

  function get(url, successCallback, failureCallback) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.onload = () => {
      if (request.status < 400) {
        successCallback(request.responseText);
      } else {
        failureCallback(new Error(`${request.status} ${request.statusText}`));
      }
    };

    request.onerror = e => {
      failureCallback(new Error(`${request.status} ${request.statusText}`));
    };
  }

  /*get('xrecipes.json',
    result => console.log('success', result),
    e => console.error('oops', e)
  );*/

  function get2(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.send();

      request.onload = () => {
        if (request.status < 400) {
          resolve(request.responseText);
        } else {
          reject(new Error(`${request.status} ${request.statusText}`));
        }
      };

      request.onerror = e => {
        reject(new Error(`${request.status} ${request.statusText}`));
      };
    });
  }

  /*get2('xrecipes.json')
    .then(recipes => console.log('succcess', recipes))
    .catch(e => console.error('failure', e));*/

  try {
    const recipes = await get2('recipes.json');
    console.log('succeeded', recipes);
  } catch(e) {
    console.error('failed', e);
  }

}());