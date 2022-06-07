window.app = window.app || {};
window.app.views = (function (theModule) {
  'use strict';
  theModule.viewFunction2 = () => console.log('view function 2');
  return theModule;
}(window.app.views || {}));