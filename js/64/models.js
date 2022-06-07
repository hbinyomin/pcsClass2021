window.app = window.app || {}; //{models: {}};
// window.app.models = window.app.models || {};

window.app.models = (function(theModule) {
  'use strict';

  theModule.modelFunction = () => console.log('a model function');
  theModule.a = () => console.log('models a');
  return theModule;
}(window.app.models || {}));