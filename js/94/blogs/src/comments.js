import './comments.css';

function createComment(comment) {
  return `<div class="comment">
            <div class="body">${comment.body}</div>
            <div class="author">${comment.email}</div>
          </div>`;
}

export default async function loadComments(postId) {
  try {
    const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }
    const comments = await r.json();
    return comments.map(comment => createComment(comment)).join('');
  } catch (e) {
    console.error(e);
  }
}
