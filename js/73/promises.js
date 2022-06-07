(async function () {
  'use strict';

  function doSomethingOne(n, callback, failureCallback) {
    setTimeout(() => callback(n + 1), 1000);
  }

  function doSomethingTwo(n, callback, failureCallback) {
    setTimeout(() => callback(n + 2), 1000);
  }

  function doSomethingThree(n, callback, failureCallback) {
    setTimeout(() => /*callback*/failureCallback(n + 3), 1000);
  }

  function onFailure(e) {
    console.error('OOPS', e);
  }

  doSomethingOne(2, r => {
    doSomethingTwo(r, r2 => {
      doSomethingThree(r2, r3 => {
        console.log(r3);
      }, onFailure);
    }, onFailure);
  }, onFailure);

  /*
  doSomethingOne(2)
    .then(r => doSomethingTwo(r))
    .then(r => doSomethingThree(r))
    .then(r => console.log(r))
    .catch(e => console.error(e));
  */

  //////
  function thirdPartyFunction(callback) {
    //callback('hello');
    setTimeout(() => callback('hello'), 1000);
  }
  /////

  console.log('Before calling 3rd party function');
  thirdPartyFunction(result => console.log('back from 3rd party function with', result));
  console.log('after calling 3rd party function');

  const promise = new Promise((resolve, reject) => {
    //setTimeout(() => {
      const succeeded = 1 + 1 === 3; // do some work

      if (succeeded) {
        resolve('succeeded');
      } else {
        reject('failed');
      }
    //}, 1000);
  });

  console.log('Before calling promise');
  promise
    .then(r => console.log('then got', r))
    .catch(e => console.error('catch got', e));
  console.log('after calling promise');


  /////

  function doSomethingOneP(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(n + 1), 1000);
    });
  }

  function doSomethingTwoP(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(n + 2), 1000);
    });
  }

  function doSomethingThreeP(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(n + 3), 1000);
    });
  }

  doSomethingOneP(2)
    .then(r => doSomethingTwoP(r))
    .then(r => doSomethingThreeP(r))
    .then(r => console.log('as promises success', r))
    .catch(e => console.error('as promises error', e));

  const p1 = doSomethingOneP(2);
  const p2 = doSomethingTwoP(2);
  const p3 = doSomethingThreeP(2);
  //Promise.all([p1, p2, p3])
   // .then(results => console.log(results))
  //  .catch(e => console.error(e));
   try {
     const results = await Promise.all([p1, p2, p3]);
     console.log(results);
   } catch(e) {
     console.error(e);
   }

}());