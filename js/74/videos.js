(async function () {
  'use strict';

  async function loadVideos() {
    try {
      const r = await fetch('videos.json');
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      return await r.json();
    } catch (e) {
      console.error(e);
    }
  }

  function populateVideoList(videos) {
    const videoElem = $('#video');
    const videoList = $('#sidebar ul');
    //let activeVideo;

    videos.forEach(video => {
     const theLi = $(`<li>
        <span>${video.title}</span>
        <img src="${video.img}" alt="${video.title}">
      </li>`)
      .appendTo(videoList)
      .click(function () {
        videoElem.attr('src', video.url);
        //videoElem[0].play();
        videoElem.attr('controls', true);

        //this.style = 'color: gray; font-style: italic;';
        /*$(this)*//*theLi.css({color: 'gray', fontStyle: 'italic'});*/
        //this.className = 'watched active';

        $('.active').removeClass('active');
        $(this).addClass('watched active');

        /*if (activeVideo) {
          activeVideo.style = 'background-color: white';
        }
        activeVideo = this;
        this.style = 'background-color: yellow';*/
      });
    });
  }

  const videos = await loadVideos();
  populateVideoList(videos);
}());