window.app = window.app || {};
window.app.utils = (function(module) {
  'use strict';

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  module.getDayIndex = function (day) {
    const dow = day.toLowerCase();
    return days.findIndex(day => dow === day.toLowerCase()) + 1;
  };

  module.getDay = function(index) {
    return days[index - 1];
  };

  return module;
}(window.app.utils || {}));

//console.log(window.app.getDayIndex('Tuesday'));
//console.log(window.app.getDay('3'));