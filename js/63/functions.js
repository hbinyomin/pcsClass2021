(function () {
  'use strict';

  const functions = [];

  for(/*let*/var i = 0; i < 5; i++) {
    console.log('creating function for ', i);
    /*functions[i] = function () {
      console.log(i);
    };*/

    //functions[i] = createFunction(i);

    functions[i] = (function(x) {
      return function () {
        console.log(x);
      };
    }(i));

    // functions[i] = (x => () => console.log(x))(i);

    console.log('invoking ', i);
    functions[i]();
  }

  functions.forEach(f => f());

  /*function createFunction(x) {
    return function () {
      console.log(x);
    };
  }*/

}());