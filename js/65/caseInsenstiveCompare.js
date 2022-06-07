window.app = window.app || {};
window.app.utils = (function (module, theAlert) {
  'use strict';

  module.caseInsensitiveCompare = (a, b) => a.toLowerCase() === b.toLowerCase();
  module.notify = msg => theAlert(msg);

  return module;
}(window.app.utils || {}, /*alert*/ m => console.error(m)));

//console.log("window.app.caseInsensitiveCompare('Joe', 'JOE')", window.app.caseInsensitiveCompare('Joe', 'JOE'));