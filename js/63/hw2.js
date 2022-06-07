/* globals calculator*/

/*jshint -W132*/
var x;

/*const*/ /*var*/ window.calculator = (function interestCalculator() {
  'use strict';
  let years;
  let rate;

  /*function setYears(y) {
    years = y;
  }

  function setRate(r) {
    rate = r;
  }*/

  function calculateRate(principle) {
    let p = principle;
    for (let i = 0; i < years; i++) {
      p += p * rate;
    }
    return p - principle;
  }

  return {
    //setYears: setYears,
    //setRate: setRate,
    setYears: function (y) {
      years = y;
      return this;
    },
    setRate: function (r) {
      rate = r;
      return this;
    },
    calculateRate: calculateRate
  };
}());

calculator.setYears(2);
calculator.setRate(0.1);
console.log(calculator.calculateRate(100));

console.log(
  calculator.setYears(3).setRate(0.05).calculateRate(100)
);