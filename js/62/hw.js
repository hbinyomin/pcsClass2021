'use strict';

function ourEvery(anArray, callback) {
  /*let allPassed = true;
  anArray.forEach(function (element) {
    const passed = callback(element);
    if (!passed) {
      allPassed = false;
    }
  });
  return allPassed;*/

  for(let i = 0; i < anArray.length; i++) {
    /*const passed = callback(anArray[i]);
    if (!passed) {
      return false;
    }*/
    if (!callback(anArray[i])) {
      return false;
    }
  }

  return true;
}

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['A', 'b', 'C'];

function isUpper(char) {
  return char === char.toUpperCase();
}

const isUpper2 = char => char === char.toUpperCase();


let result = ourEvery(upper, isUpper);
console.log('ourEvery(upper, isUpper)', result);

console.log('ourEvery(lower, isUpper)', ourEvery(lower, isUpper));
console.log('ourEvery(mixed, isUpper)', ourEvery(mixed, isUpper2));

console.log('ourEvery(mixed, isUpper)', ourEvery(mixed, char => char === char.toUpperCase()));

// compare to built in

console.log('upper.every(isUpper)', upper.every(isUpper));
console.log('lower.every(isUpper)', lower.every(isUpper));
console.log('mixed.every(isUpper)', mixed.every(char => char === char.toUpperCase()));


function ourSome(anArray, callback) {
  /*let someonePassed = false;
  anArray.forEach(element => {
    if (callback(element)) {
      someonePassed = true;
    }
  });

  return someonePassed;*/
  for (let i = 0; i < anArray.length; i++) {
    if(callback(anArray[i])) {
      return true;
    }
  }

  return false;
}

result = ourSome(upper, isUpper);
console.log('ourSome(upper, isUpper)', result);

console.log('ourSome(lower, isUpper)', ourSome(lower, isUpper));
console.log('ourSome(mixed, isUpper)', ourSome(mixed, isUpper2));

console.log('ourSome(mixed, isUpper)', ourSome(mixed, char => char === char.toUpperCase()));

// compare to built in

console.log('upper.some(isUpper)', upper.some(isUpper));
console.log('lower.some(isUpper)', lower.some(isUpper));
console.log('mixed.some(isUpper)', mixed.some(char => char === char.toUpperCase()));



function onlyIf(anArray, test, action) {
  anArray.forEach(element => {
    if(test(element)) {
      action(element);
    }
  });
}

console.log('onlyIf(upper, isUpper, console.log)');
onlyIf(upper, isUpper, console.log);
console.log('onlyIf(lower, isUpper, console.log)');
onlyIf(lower, isUpper, console.log);
console.log('onlyIf(mixed, isUpper, console.log)');
onlyIf(mixed, isUpper, console.log);

//const uppers = mixed.filter(isUpper);
//uppers.forEach(e => console.log(e));

mixed.filter(isUpper).forEach(e => console.log(e));

////////////////////////

function multiply(a, b) {
  return a * b;
}

console.log('multiply(2, 2)', multiply(2,2));


function getMultiplier() {
  return function(a, b) {
    return a * b;
  };

  //return multiply;
}

//const multiplier = getMultiplier();
//console.log('multiplier(3, 3)', multiplier(3, 3));
console.log('multiplier(3, 3)', getMultiplier()(3, 3));

/*
function brokenMultiply(b) {
  return a * b;
}*/

function getMultiplier2(a) {
  return function (b) {
    return a * b;
  };
  // return brokenMultiply;
}

const multiplyBy5 = getMultiplier2(5);
console.log('multiplyBy5(2)', multiplyBy5(2));

console.log('getMultiplier2(5)(2)', getMultiplier2(5)(2));

const multiplyBy6 = getMultiplier2(6);
console.log('multiplyBy6(2)', multiplyBy6(2));

