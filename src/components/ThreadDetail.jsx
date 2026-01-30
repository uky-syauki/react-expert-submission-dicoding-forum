import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import postedAt from '../utils/postedAt';

function ThreadDetail({ id, title, body, category, upVotesBy, downVotesBy, createdAt, owner, }) {
  console.log('ThreadDetail props:', { id, title, body, category, upVotesBy, downVotesBy, createdAt, owner });
  return (
    <div className='glass-card discussion-card'>
      <h2 className='discussion-title'>{title}</h2>
      <p className='discussion-tag'>Category: {category}</p>
      <p className='discussion-desc'>{body}</p>
      <div className='discussion-meta'>
        <span>By: {owner.name}</span>
        <span> | Posted: {postedAt(createdAt)}</span>
      </div>
      <div className='disscussion-footer'>
        <div className='discussion-stats'>
          <span><FaThumbsUp /> {upVotesBy.length}</span>
          <span><FaThumbsDown /> {downVotesBy.length}</span>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default ThreadDetail;