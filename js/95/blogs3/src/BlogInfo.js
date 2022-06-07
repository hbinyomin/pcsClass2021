import './BlogInfo.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogInfo(props) {
  const { blog: { id, name, website, company: { name: companyName, catchPhrase, bs } } } = props;

  return (
    <Link to={`/blogs/blog/${id}`} className="blog">
      <div className="title">{name}</div>
      <div className="website">{website}</div>
      <div className="company">
        <div>{companyName}</div>
        <div>{catchPhrase}</div>
        <div>{bs}</div>
      </div>
    </Link>
  )
}
