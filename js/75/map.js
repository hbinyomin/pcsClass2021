/* global google */
(function () {
  'use strict';

  const bmgLoc = new google.maps.LatLng({ lat: 40.09572118344493, lng: -74.22206599308187 });
  const pcsLoc = { lat: 40.108847085561855, lng: -74.21764970472604 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: bmgLoc,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  const infoWindow = new google.maps.InfoWindow(/*{
    content: `
      Beth Medrash Govoha (Hebrew: בית מדרש גבוה‎, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.
      <br>
      <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha#cite_ref-NJHE_5-0">more info</a>
    `
  }*/);

  const marker = new google.maps.Marker({
    position: bmgLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'BMG',
    icon: {
      url: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0/1519906416652?e=2159024400&v=beta&t=NJaKReb9PuQDF1_aAt7O9mJ09zo1ijrivt-9PQWOKvk',
      scaledSize: new google.maps.Size(50, 50)
    }
  });

  marker.addListener('click', () => {
    infoWindow.setContent(`
      Beth Medrash Govoha (Hebrew: בית מדרש גבוה‎, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.
      <br>
      <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha#cite_ref-NJHE_5-0">more info</a>
    `);
    infoWindow.open(map, marker);
  });

  const marker2 = new google.maps.Marker({
    position: pcsLoc,
    map: map,
    title: 'PCS',
    animation: google.maps.Animation.BOUNCE
  });

  marker2.addListener('click', () => {
    infoWindow.setContent(`
      PCS is a great place to study.
      <br>
      <a target="_blank" href="https://pcsnynj.org">more info</a>
    `);
    infoWindow.open(map, marker2);
  });

  const panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
    position: bmgLoc/*,
    pov: {
      heading: 180,
      pitch: 100
    }*/
  });

  map.addListener('center_changed', () => {
    const center = map.getCenter();
    console.log('center changed', center.lat(), center.lng());
    panorama.setPosition(center);
  });

  const bounds = new google.maps.LatLngBounds();
  bounds.extend(bmgLoc);
  bounds.extend(pcsLoc);
  ///bounds.extend({ lat: 40.104011104866764, lng: -74.26506998930437});
  map.fitBounds(bounds);


  setTimeout(() => {
    //map.panTo(bmgLoc)
    map.setCenter(bmgLoc);
  }, 5000);

}());