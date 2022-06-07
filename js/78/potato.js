(function () {
  'use strict';

  const partsElem = $('#parts');
  const NUM_PARTS = 23;
  const PART_MARGIN = 100;
  let maxZindex = 0;
  let x = 0;
  let y = 0;
  const maxWidth = partsElem.innerWidth() - 100;
  for (let i = 1; i < NUM_PARTS; i++) {
    $(`<img class="part" src="images/${i}.png">`)
      .appendTo(partsElem)
      .css({ top: y, left: x });
    x += PART_MARGIN;
    if (x >= maxWidth) {
      x = 0;
      y += PART_MARGIN;
    }
  }

  // place potato
  $(`<img class="part potato" src="images/23.png">`)
    .appendTo(partsElem)
    .css({ top: 320, left: 1200 });

  const parts = $('.part');

  function saveState() {
    const partsInfo = [];
    parts.each((i, p) => {
      const part = $(p);
      partsInfo.push({
        src: part.attr('src'),
        top: part.css('top'),
        left: part.css('left'),
        zIndex: part.css('zIndex')
      });
    });
    localStorage.setItem('potato', JSON.stringify(partsInfo));
  }

  /*let dragging = null;
  let offset;
  $(document)
    .on('mousedown', '.part', e => {
      dragging = $(e.target);
      offset = { x: e.offsetX, y: e.offsetY };
      // dragging.css({position: 'relative'});
      if(!dragging.hasClass('potato')) {
        dragging.css({zIndex: ++maxZindex});
      }
    })
    .mousemove(e => {
      if (dragging) {
        e.preventDefault(); // prevent weird occasional no drag cursor
        dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
      }
    })
    .mouseup(() => {
      if (dragging) {
        dragging = null;
        saveState();
      }
    });*/

  parts.draggable({
    stack: ".part",
    stop: saveState
  });

  if (localStorage.potato) {
    const partsInfo = JSON.parse(localStorage.potato);
    partsInfo.forEach(partInfo => {
      $(`img[src="${partInfo.src}"]`).css(/*{
        top: partInfo.top,
        left: partInfo.left,
        zIndex: partInfo.zIndex
      }*/partInfo);
    });
  }
}());