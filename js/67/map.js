(function () {
  'use strict';

  function ourMap(theArray, callback) {
    const result = [];

    theArray.forEach(v => {
      result.push(callback(v));
    });

    return result;
  }

  const numbers = [2, 4, 6];
  const doubledNumbers = ourMap(numbers, function (n) {
    return n * 2;
  });

  const tripledNumbers = ourMap(numbers,n => n * 3);

  function timesFour(n) {
    return n * 4;
  }

  const fourpledNumbers = ourMap(numbers, timesFour);

  console.log(numbers, doubledNumbers, tripledNumbers, fourpledNumbers);

  const people = [
    { first: 'Joe', last: 'Biden', age: 100 },
    { first: 'Kamala', last: 'Harris', age: 55},
    { first: 'Tony', last: 'Blinken', age: 60}
  ];

  console.log(ourMap(people, p => `${p.first} ${p.last}`));

  console.log(people.map(p => `${p.first} ${p.last}`));
}());