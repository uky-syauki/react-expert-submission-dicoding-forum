import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function ThreadItem({ category, title, body, likes, comments, daysAgo, author }) {
  console.log('ThreadItem props:', { category, title, body, likes, comments, daysAgo, author });
  return (
    <div className='glass-card discussion-card'>
      <span className='discussion-tag'>#{category}</span>
      <h3 className='discussion-title'>{title}</h3>
      <p className='discussion-desc'>{body}</p>

      <div className='discussion-footer'>
        <div className='discussion-stats'>
          <span><FaThumbsUp /> {likes}</span>
          <span><FaThumbsDown /> {comments}</span>
        </div>

        <div className='discussion-meta'>
          {daysAgo} . <strong>{author}</strong>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  daysAgo: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default ThreadItem;