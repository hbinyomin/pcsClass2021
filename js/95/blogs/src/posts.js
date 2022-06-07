import './posts.css';
import $ from 'jquery';
import setPage from "./page";
import loadComments from './comments';

function createPostEntry(post) {
  const postElem = $(`<div class="post">
            <div class="title">${post.title}</div>
            <div class="body">${post.body}</div>
            <div class="comments-area">
              <div class="comments"></div>
              <button>show comments</button>
            </div>
          </div>`);

  const button = postElem.find('button');
  const commentsElem = postElem.find('.comments');

  let showingComments = false;
  let comments;
  button.on('click', async () => {
    if (!showingComments) {
      if (!comments) {
        comments = await loadComments(post.id);
        commentsElem.html(comments);
      }
      commentsElem.slideDown();
    } else {
      commentsElem.slideUp();
    }
    showingComments = !showingComments;
    button.text(`${showingComments ? 'hide' : 'show'} comments`);
  });

  return postElem;
}

export default async function loadPosts(blog) {
  try {
    const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }
    const posts = await r.json();
    setPage({
      subtitle: blog.name,
      content: posts.map(post => createPostEntry(post))
    });
  } catch (e) {
    console.error(e);
  }
}
