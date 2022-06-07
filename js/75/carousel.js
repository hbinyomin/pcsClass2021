(function () {
  'use strict';

  //const picturesDiv = $('#pictures');
  const pictureImg = $('#picture img');
  const pictureTitle = $('#picture h2');
  const tagInput = $('#tag');

  let pictures;
  let index = 0;

  function refreshPicture() {
    //pictureImg.attr('src', pictures[index].media.m.replace('_m', ''));
    pictureImg.attr('src', pictures[index].src);
    pictureImg.attr('alt', pictures[index].title);
    pictureTitle.text(pictures[index].title);
  }

  $('#go').click(() => {
    $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?`, { tags: tagInput.val() })
      .then(data => {
        console.log(data);
        /*data.items.forEach(picture => {
          picturesDiv.append(`<figure>
                                <img src="${picture.media.m.replace('_m', '')}" alt="${picture.title}">
                                <figcaption><h2>${picture.title}</h2></figcaption>
                              </figure>`);
        });*/

        //pictures = data.items;
        pictures = data.items.map(picture => {
          return {
            src: picture.media.m.replace('_m', ''),
            title: picture.title
          };
        });

        console.log(pictures);
        
        $('.control').show();
        refreshPicture();
      });

    $('#left').click(() => {
      if(--index < 0) {
        index = pictures.length - 1;
      }
      refreshPicture();
    });

    $('#right').click(() => {
      if(++index >= pictures.length) {
        index = 0;
      }
      refreshPicture();
    });
  });
}());