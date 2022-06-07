import './BlogInfo.css';
import React from 'react';

export default function BlogInfo(props) {
  const { blog: { id, name, website, company: { name: companyName, catchPhrase, bs } }, setSelectedBlog } = props;

  return (
    <div className="blog" onClick={() => setSelectedBlog(id)}>
      <div className="title">{name}</div>
      <div className="website">{website}</div>
      <div className="company">
        <div>{companyName}</div>
        <div>{catchPhrase}</div>
        <div>{bs}</div>
      </div>
    </div>
  )
}
