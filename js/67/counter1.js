window.app = window.app || {};

window.app.counter1 = (function (/*m*/) {
  'use strict';

  let i = 0;

  /*function increment() {
    i++;
  }

  function getCount() {
    return i;
  }

  return {
    increment: increment,
    getCount: getCount
  }*/

  return {
    increment: () => i++,
    getCount: () => i
  };

  /*m.increment = () => i++;
  m.getCount = () => i;

  return m;*/
}(/*window.app.counter1 || {}*/));