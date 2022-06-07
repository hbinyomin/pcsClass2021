import $ from 'jquery';

const subtitleElem = $('#subtitle');
const contentElem = $('#content');

export default function setPage(page) {
  subtitleElem.text(page.subtitle);
  contentElem.html(page.content);
}

/*setPage({
  subtitle: 'Blog List',
  content: '<h1>blog 1</h1><h1>blog 2</h1>',
});*/