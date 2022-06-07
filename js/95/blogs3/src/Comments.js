import React, { useEffect, useState } from 'react';
import Comment from './Comment';

export default function Comments({ postId }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const comments = await r.json();
        setComments(comments);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [postId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <>
      {comments.map(comment => (<Comment key={comment.id} comment={comment} />))}
    </>
  )
}
