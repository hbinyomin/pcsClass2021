/*global google*/
(function () {
  'use strict';

  /*const markers = [];
  const circles = [];*/
  //let drawings;

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -25.363882,
      lng: 131.044922
    }
  });

  const options = {
    markerOptions: {
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      draggable: true
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: .5,
      strokeWeight: 5,
      editable: true
    }
  };

  const drawingManager = new google.maps.drawing.DrawingManager(options);
  drawingManager.setMap(map);

  /*const mfs = JSON.parse(localStorage.getItem('markers'));
  if (mfs) {
    mfs.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: markerData,
        map: map
      });
    });
  }

  const cfs = JSON.parse(localStorage.getItem('circles'));
  if (cfs) {
    cfs.forEach(circleData => {
      const circle = new google.maps.Circle({
        center: circleData.center,
        radius: circleData.radius,
        map: map
      });
    });
  }*/

  function handleMarkerEdit(marker, markerData){
    marker.addListener('dragend', () => {
      markerData.position = marker.getPosition();
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });
  }

  const drawings = JSON.parse(localStorage.getItem('drawings')) || [];
  drawings.forEach(drawingData => {
    switch (drawingData.type) {
      case 'marker':
        const marker = new google.maps.Marker({
          position: drawingData.position,
          icon: options.markerOptions.icon,
          draggable: options.markerOptions.draggable,
          map: map
        });
        /*marker.addListener('dragend', () => {
          drawingData.position = marker.getPosition();
          localStorage.setItem('drawings', JSON.stringify(drawings));
        });*/
        handleMarkerEdit(marker, drawingData);
        break;
      case 'circle':
        new google.maps.Circle({
          center: drawingData.center,
          radius: drawingData.radius,
          fillColor: options.circleOptions.fillColor,
          fillOpacity: options.circleOptions.fillOpacity,
          strokeWeight: options.circleOptions.strokeWeight,
          map: map
        });
        break;
      case 'rectangle':
        new google.maps.Rectangle({
          bounds: drawingData.bounds,
          map: map
        });
        break;
      case 'polyline':
        new google.maps.Polyline({
          path: drawingData.path,
          map: map
        });
        break;
      case 'polygon':
        new google.maps.Polygon({
          path: drawingData.path,
          map: map
        });
        break;
      default:
        console.error('Unknown drawing type: ', drawingData.type);
    }
  });

  /*google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
    console.log(event);
    if (event.type === 'marker') {
      markers.push(event.overlay.getPosition());
      //localStorage.setItem('marker', JSON.stringify(event.overlay.getPosition()));
      localStorage.setItem('markers', JSON.stringify(markers));
    } else if(event.type === 'circle') {
      console.log(event);
    }
  });*/

  //google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
  drawingManager.addListener('markercomplete', marker => {
    //markers.push(marker.getPosition());
    //localStorage.setItem('markers', JSON.stringify(markers));
    const markerData = { type: 'marker', position: marker.getPosition() };
    drawings.push(markerData);
    localStorage.setItem('drawings', JSON.stringify(drawings));

    //google.maps.event.addListener(marker, 'dragend', () => {
    /*marker.addListener('dragend', () => {
      markerData.position = marker.getPosition();
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });*/
    handleMarkerEdit(marker, markerData);
  });

  google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
    //circles.push({center: circle.getCenter(), radius: circle.getRadius()});
    //localStorage.setItem('circles', JSON.stringify(circles));
    drawings.push({ type: 'circle', center: circle.getCenter(), radius: circle.getRadius() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
    drawings.push({ type: 'rectangle', bounds: rectangle.getBounds() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  google.maps.event.addListener(drawingManager, 'polylinecomplete', poly => {
    drawings.push({ type: 'polyline', path: poly.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  google.maps.event.addListener(drawingManager, 'polygoncomplete', poly => {
    drawings.push({ type: 'polygon', path: poly.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });
}());