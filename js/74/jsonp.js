let theData;
function doSomething(data) {
  console.log(typeof data, data);
  theData = data;
}

(function () {
  'use strict';

  //doSomething({first: 'Joe', last: 'Biden'});
  //const script = document.createElement('script');
  //script.src = 'someData';
  //document.head.appendChild(script);

  //setTimeout(() => {console.log('theData is ', theData);}, 5000);

  //$.getScript('someData')
    //.then(x => console.log('getScript', x));

  $.ajax({
    //url: 'someData?callback=?',
    url: 'https://api.openweathermap.org/data/2.5/weather?zip=08701&appid=<your key here>&units=imperial&lang=he&callback=?',
    dataType: 'jsonp',
    //jsonpCallback: 'doSomething',
  }).then(x => console.log('ajax got', x));

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?zip=08701&appid=<your key here>&units=imperial&lang=he&callback=?')
    .then(x => console.log('ajax got', x));
}());