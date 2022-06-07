'use strict';

/*
const months = ['January', 'February', 'March'];

function getMonth(index) {
  return months[index - 1];
}

function getIndex(monthName) {
  return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
}

console.log('getMonth(2)', getMonth(2));
console.log('getIndex("FEBRUARY")', getIndex('FEBRUARY'));
*/

/*
const monthUtils = {
  months: ['January', 'February', 'March'],
  getMonth: function (index) {
    return this.months[index - 1];
  },
  getIndex: function getIndex(monthName) {
    return this.months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
  }
};*/

/*
function monthUtils() {
  const months = ['January', 'February', 'March'];

  /*function getMonth(index) {
    return months[index - 1];
  }* /

  function getIndex(monthName) {
    return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
  }

  return {
    //getMonth: getMonth,
    getMonth: (index) => months[index - 1],
    getIndex: getIndex
  };
}

const mu = monthUtils();
console.log('mu.getIndex("january")', mu.getIndex('january'));
*/

// IIFE - Immediately invoked function expression
const mu = (function () {
  const months = ['January', 'February', 'March'];

  /*function getMonth(index) {
    return months[index - 1];
  }*/

  function getIndex(monthName) {
    return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
  }

  return {
    //getMonth: getMonth,
    getMonth: (index) => months[index - 1],
    getIndex: getIndex
  };
}());

console.log('mu.getIndex("january")', mu.getIndex('january'));
