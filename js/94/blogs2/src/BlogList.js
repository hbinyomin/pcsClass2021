import './BlogList.css';
import React, { useEffect, useState } from 'react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!blogs.length) {
          const r = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!r.ok) {
            throw new Error(`${r.status} ${r.statusText}`);
          }
          const theBlogs = await r.json();
          setBlogs(theBlogs);
        }

      } catch (e) {
        console.error(e);
      }
    })();
  }, []); // add dependency array

  // fixed brackets... should probably make a BlogInfo component to make this cleaner
  return blogs.map(blogInfo => {
    return (
      <div className="blog">
        <div className="title">${blogInfo.name}</div>
        <div className="website">${blogInfo.website}</div>
        <div className="company">
          <div>${blogInfo.company.name}</div>
          <div>${blogInfo.company.catchPhrase}</div>
          <div>${blogInfo.company.bs}</div>
        </div>
      </div>
    );
  });
}
