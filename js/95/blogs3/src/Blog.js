import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Post from './Post';

export default function Blog() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`);
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
  }, [blogId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <>
      {posts.map(post => (<Post key={post.id} post={post} />))}
      <Link to={`/blogs/blog/1`}>Have you seen Blog #1 ???</Link>
    </>
  )
}
