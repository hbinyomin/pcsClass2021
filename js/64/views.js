window.app = window.app || {};
window.app.views = (function (theModule) {
  'use strict';
  theModule.viewFunction1 = () => console.log('view function 1');
  theModule.a = () => console.log('views a');
  return theModule;
}(window.app.views || {}));