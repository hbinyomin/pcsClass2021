import './Comment.css';
import React from 'react';

export default function Comment({comment: {body, email}}) {
  return (
    <div className="comment">
      <div className="body">{body}</div>
      <div className="author">{email}</div>
    </div>
    )
}
