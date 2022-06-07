(function () {
  'use strict';

  const appId = '<your key here>';

  const locationElem = $('#location');
  const detailsElem = $('#details');
  const iconElem = $('#icon');

  const noWeatherElems = $('.noWeather');
  const weatherElems = $('.hasWeather').hide();
  const errorElem = $('#error');

  // shouldnt be a form if we are listening for change...
  $('form').submit(e => e.preventDefault());

  const zipInput = $('#zip');
  zipInput.change(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.val()}&appid=${appId}&units=imperial&lang=he`)
      .then(r => {
        if (! r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        noWeatherElems.hide();
        weatherElems.slideDown('slow');

        console.log(weatherData);
        locationElem.text(weatherData.name);
        iconElem.attr('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
        detailsElem.text(`${weatherData.main.temp} and ${weatherData.weather[0].description}`);
      })
      .catch(e => {
        noWeatherElems.show();
        weatherElems.hide();
        errorElem.text(e.message);
      });
  });


}());