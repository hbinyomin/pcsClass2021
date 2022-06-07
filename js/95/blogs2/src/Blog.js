import React, { useEffect, useState } from 'react';
import Post from './Post';

export default function Blog({ selectedBlog}) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedBlog}`);
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const posts = await r.json();
        setPosts(posts);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedBlog]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <>
      {posts.map(post => (<Post key={post.id} post={post} />))}
    </>
  )
}
