window.pcs = window.pcs || {};

window.pcs.tools = (function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(elem, prop, value) {
    elem.style[prop] = value;
  }

  function getCss(elem, prop) {
    return getComputedStyle(elem)[prop];
  }

  /*function css(elem, prop, value) {
    if (!value) {
      return getComputedStyle(elem)[prop];
    }
    elem.style[prop] = value;
  }*/

  return {
    /*get: get,
    setCss: setCss*/

    wrap: function (id) {
      const theElem = get(id);

      return {
        /*setCss: (prop, value) => setCss(theElem, prop, value),
        getCss: (prop) => getCss(theElem, prop)*/
        css: function (prop, value) {
          if (arguments.length === 1) {
            return getCss(theElem, prop);
          }
          setCss(theElem, prop, value);
          return this;
        },
        click: function (callback) {
          theElem.addEventListener('click', callback);
          return this;
        },
        hide: function () {
          setCss(theElem, 'display', 'none');
          return this;
        },
        show: function () {
          setCss(theElem, 'display', 'block');
          return this;
        }
      };
    }
  };
}());