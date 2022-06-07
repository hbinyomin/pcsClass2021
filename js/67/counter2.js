window.app.counter2 = (function () {
  'use strict';

  let numberOfCounters = 0;

  /* simple - return a counter
  return function () {
    numberOfCounters++;
    console.log(numberOfCounters);

    let i = 0;

    return {
      increment: () => i++,
      getCount: () => i,
      getNumberOfCounters: () => numberOfCounters // this is a little wierd - why would this be on each counter instance (its more like a "static")...
    };
  };*/

  // more complicated - move everything down one level - return an object that can be used create counters, as well as get count. Each counter instance doesnt have it anymore
  return {
    createCounter: function () {
      numberOfCounters++;
      let i = 0;

      return {
        increment: () => i++,
        getCount: () => i
      };
    },
    getNumberOfCounters: () => numberOfCounters
  };
}());