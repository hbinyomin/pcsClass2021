//(function () {
  'use strict';

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    new google.maps.Marker({
      position: {lat: -34.397, lng: 150.644},
      map,
      title: "Australia!",
    });
  }
//}());