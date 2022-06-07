//(function () {
  'use strict';

  const parent = {
    first: 'Joe',
    last: 'Biden',
    print() {/*: function () {*/
      console.log(`${this.first} ${this.last}`);
    }
  };

  const child = Object.create(parent);
  child.age = 105;

  Object.defineProperty(child, 'email', {
    value: 'jbiden@whitehouse.gov', enumerable: false
  });

  console.log('parent', parent);
  for(let prop in parent) {
    if(parent.hasOwnProperty(prop) && typeof parent[prop] !== 'function') {
      console.log(`${prop} is ${parent[prop]}`);
    }
  }

  console.log('child', child);
  for (let prop in child) {
    if (child.hasOwnProperty(prop) && typeof child[prop] !== 'function') {
      console.log(`${prop} is ${child[prop]}`);
    }
  }

  /////
  console.log('keys - parent', parent);
  let keys = Object.keys(parent);
  keys.forEach(key => {
    console.log(`${key} is ${parent[key]}`);
  });

  console.log('keys - child', child);
  keys = Object.keys(child);
  keys.forEach(key => {
    console.log(`${key} is ${child[key]}`);
  });

  const entries = Object.entries(child);
  entries.forEach(entry => {
    console.log(`${entry[0]} is ${entry[1]}`);
  });

  const copy = {};
  /*for (let prop in child) {
    if (child.hasOwnProperty(prop)) {
      copy[prop] = child[prop];
    }
  }*/
  Object.assign(copy, child);
  console.log('copy', copy);

  //////

  /// destructuring
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const a = numbers[0];
  //const b = numbers[1];
  const [, , b, , , e] = numbers;
  console.log(b, e);

  //const first = parent.first;
  //const last = parent.last;
  let {first, last} = parent;
  console.log(first, last);

  function print(a,b,c,d,e,f) {
    console.log(arguments);
    console.log(a,b,c,d,e,f);
  }

  // spread operator
  //print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
  print(...numbers);

  console.log(`Max number is ${Math.max(...numbers)}`);

  /// rest
  /*function sum(/*a, b* /) {
    //return a + b;
    //console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }*/

  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  console.log(sum(...numbers));

  let [one, , three, ...rest] = numbers;
  console.log(one, three, rest);

  ({first, ...rest} = parent);
  console.log(first, rest);
//}());