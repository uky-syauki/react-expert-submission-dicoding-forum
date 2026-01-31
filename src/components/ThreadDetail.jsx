import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import postedAt from '../utils/postedAt';
import CommentItem from './CommentItem';

function ThreadDetail({ id, title, body, category, upVotesBy, downVotesBy, createdAt, owner, comments, authUser }) {
  console.log('ThreadDetail id:', id);
  let hasUpvoted = false;
  let hasDownvoted = false;

  if (authUser) {
    hasUpvoted = upVotesBy.includes(authUser.id);
    hasDownvoted = downVotesBy.includes(authUser.id);
  }

  const onUpvote = () => {
    hasUpvoted = true;
  };

  const onDownvote = () => {
    hasDownvoted = true;
  };

  return (
    <div className='glass-card discussion-card'>
      <p className='discussion-tag'>#{category}</p>
      <h2 className='discussion-title'>{title}</h2>
      <p className='discussion-desc' dangerouslySetInnerHTML={{ __html: body }}></p>

      <div className='disscussion-footer'>
        <div className='discussion-stats'>
          <span className='vote' onClick={onUpvote}>{hasUpvoted ? <FaThumbsUp className="upvoted" /> : <FaRegThumbsUp />} {upVotesBy.length}</span>
          <span className='vote' onClick={onDownvote}>{hasDownvoted ? <FaThumbsDown className="downvoted" /> : <FaRegThumbsDown />} {downVotesBy.length}</span>
        </div>
        <span>Dibuat oleh</span>
        <img src={owner.avatar} alt={owner.name} className='detail-avatar' />
        <span className='owner-name'> {owner.name} </span>
        <span> {postedAt(createdAt)}</span>
      </div>
      <div className='comments-section'>
        <h3>Beri Komentar</h3>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} authUser={authUser} />
        ))}
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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default ThreadDetail;