import './blogList.css';
import $ from 'jquery';
import setPage from "./page";
import loadPosts from './posts';

function createBlogEntry(blogInfo) {
  return $(`<div class="blog">
            <div class="title">${blogInfo.name}</div>
            <div class="website">${blogInfo.website}</div>
            <div class="company">
              <div>${blogInfo.company.name}</div>
              <div>${blogInfo.company.catchPhrase}</div>
              <div>${blogInfo.company.bs}</div>
            </div>
          </div>`).on('click', () => loadPosts(blogInfo));
}

let blogs;
export default async function loadBlogs() {
  try {
    if (! blogs) {
      const r = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      blogs = await r.json();
    }
    setPage({
      subtitle: 'Blog List',
      content: blogs.map(blog => createBlogEntry(blog))
    });
  } catch (e) {
    console.error(e);
  }
}
