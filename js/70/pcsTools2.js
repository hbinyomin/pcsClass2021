window.pcs = (function () {
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

  function getRandomColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r}, ${g}, ${b})`;
  }

  const speeds = {
    slow: 1000,
    medium: 500,
    fast: 100
  };

  function getSpeed(speed) {
    if (typeof(speed) === 'number') {
      return speed;
    }
    return speeds[speed];
  }

  const data = {};

  return function (id) {
    const theElem = get(id);
    //const data = {};

    return {
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
      },
      flash: function (duration = 2000, speed = speeds.medium) {
        console.log(getSpeed(speed));

        const originalColor = getCss(theElem, 'color');
        const theInterval = setInterval(() => setCss(theElem, 'color', getRandomColor()), getSpeed(speed));
        setTimeout(() => {
          clearInterval(theInterval);
          setCss(theElem, 'color', originalColor);
        }, duration);
        return this;
      },
      data: function (key, value) {
        //console.log(data);

        //theElem.data = theElem.data || {};
        const thisElemsData = data[id] = data[id] || {};

        if (arguments.length === 1) {
          //return data[key];
          //return theElem.data[key];
          return thisElemsData[key];
        }
        //data[key] = value;
        //theElem.data[key] = value;
        thisElemsData[key] = value;
        return this;
      }
    };
  };
}());