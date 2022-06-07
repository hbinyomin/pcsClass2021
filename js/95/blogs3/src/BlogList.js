import React, {useEffect, useState} from 'react';
import BlogInfo from './BlogInfo';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const r = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText || ' - failed to load'}`);
        }
        const blogs = await r.json();
        setBlogs(blogs);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{color:'red'}}>{error}</h2>;
  }

  return (
    <>
      {blogs.map(blog => (
        <BlogInfo key={blog.id} blog={blog} />
      ))}
    </>
  );
}
