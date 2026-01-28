import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaCommentAlt, FaEye } from 'react-icons/fa';

function DiscussionCard({ category, title, body, likes, comments, views, daysAgo, author }) {
  return (
    <div className='glass-card discussion-card'>
      <span className='discussion-tag'>#{category}</span>
      <h3 className='discussion-title'>{title}</h3>
      <p className='discussion-desc'>{body}</p>

      <div className='discussion-footer'>
        <div className='discussion-stats'>
          <span><FaThumbsUp /> {likes}</span>
          <span><FaCommentAlt /> {comments}</span>
          <span><FaEye /> {views}</span>
        </div>

        <div className='discussion-meta'>
          {daysAgo} . <strong>{author}</strong>
        </div>
      </div>
    </div>
  );
}

DiscussionCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  daysAgo: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default DiscussionCard;