import './index.css';
import $ from 'jquery';
import loadBlogs from './blogList';

loadBlogs();

$('#home').on('click', e => {
  e.preventDefault();
  loadBlogs();
});