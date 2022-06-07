const du = (function() {
  'use strict';

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function getDayIndex(day) {
    /*for(let i = 0; i < days.length; i++) {
      if (days[i] === day) {
        return i + 1;
      }
    }*/
    // return days.indexOf(day) + 1;
    const dow = day.toLowerCase();
    /*return days.findIndex(function (dayOfWeek) {
      return /*dayOfWeek.toLowerCase()* /dow === day.toLowerCase();
    }) + 1;*/
    return days.findIndex(day => dow === day.toLowerCase()) + 1;
  }

  function getDay(index) {
    return days[index - 1];
  }

  return {
    getDayIndex: getDayIndex,
    getDay: getDay
  };
}());

//const du = dayUtils();
console.log(du.getDayIndex('monday'));
console.log(du.getDay(2));