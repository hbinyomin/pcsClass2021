(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function addEventListener(element, eventType, callback) {
    // browser sniffing
    /*if(navigator.userAgent.indexOf('Internet Explorer')) {
      element.attachEvent(eventType, callback)
    } else {
      element.addEventListener(eventType, callback);
    }*/

    // feature detection
    if (element.addEventListener) {
      element.addEventListener(eventType, callback);
    } else if (element.attachEvent) {
      element.attachEvent(eventType, callback);
    }
  }

  const startButton = get('start');
  // const colors = ['red', 'white', 'blue'];
  // let i = 0;
  let interval;

  // console.log(this);

  /*
  addEventListener(get('start')/*startButton* /, 'click', function () {
    console.log(this);

    if (interval) {
      clearInterval(interval);
      interval = null;
      /*startButton* /this.innerText = 'start';
    } else {
      interval = setInterval(() => {
        setCss(document.body, 'color', colors[i++]);
        if (i === colors.length) {
          i = 0;
        }
        setCss(document.body, 'backgroundColor', colors[i]);
      }, 1000);
      /*startButton* /this.innerText = 'stop';
    }
  }*/

  function getRandomColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r}, ${g}, ${b})`;
  }

  function stopColors() {
    clearInterval(interval);
    interval = null;
    startButton.innerText = 'start';
  }

  /*const INCREMENT = 50;
  let r = 0;
  let g = 0;
  let b = -1;*/
  function startColors() {
    interval = setInterval(() => {
      /*setCss(document.body, 'color', colors[i++]);
      if (i === colors.length) {
        i = 0;
      }
      setCss(document.body, 'backgroundColor', colors[i]);*/

      const color = getRandomColor();
      const backgroundColor = getRandomColor();
      //setCss(document.body, 'color', color);
      //setCss(document.body, 'backgroundColor', backgroundColor);
      setColors(color, backgroundColor);

      addToTable(color, backgroundColor);
      /*for (let r = 0; r < 256; r++) {
        for (let g = 0; g < 256; g++) {
          for (let b = 0; b < 256; b++) {
            setCss(document.body, 'color', `rgb(${r}, ${g}, ${b})`);
            setCss(document.body, 'backgroundColor', `rgb(${r}, ${g}, ${b})`);
          }
        }
      }*/

      /*
      //b++;
      b += INCREMENT;
      if (b > 255) {
        b = 0;

        //g++;
        g += INCREMENT;
        if (g > 255) {
          g = 0;

          r += INCREMENT;
          if (r > 255) {
            r = 0;
          }
        }
      }

      setCss(document.body, 'color', `rgb(${r}, ${g}, ${b})`);
      setCss(document.body, 'backgroundColor', `rgb(${b}, ${g}, ${r})`);
      */
    }, 1000);
    startButton.innerText = 'stop';
  }

  function setColors(color, backgroundColor) {
    setCss(document.body, 'color', color);
    setCss(document.body, 'backgroundColor', backgroundColor);
  }

  const colorTable = get('colorTable');
  function addToTable(color, backgroundColor) {
    const row = colorTable.insertRow();
    const timeCell = row.insertCell();
    const colorCell = row.insertCell();
    const backgroundColorCell = row.insertCell();
    timeCell.innerText = new Date().toLocaleTimeString();
    colorCell.innerText = color;
    setCss(colorCell, 'color', color);
    backgroundColorCell.innerText = backgroundColor;
    setCss(backgroundColorCell, 'color', backgroundColor);

    addEventListener(row, 'click', () => {
      stopColors();
      setColors(color, backgroundColor);
    });
  }

  addEventListener(startButton, 'click', () => {
    if (interval) {
      stopColors();
    } else {
      startColors();
    }
  });
}());