import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../utils/postedAt';
import { FaThumbsUp, FaThumbsDown, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

function CommentItem({ comment, authUser }) {
  let hasUpvoted = false;
  let hasDownvoted = false;

  if (authUser) {
    hasUpvoted = comment.upVotesBy.includes(authUser.id);
    hasDownvoted = comment.downVotesBy.includes(authUser.id);
  }

  return (
    <div className='comment-card'>
      <p className='comment-body' dangerouslySetInnerHTML={{ __html: comment.content }}></p>
      <div className='discussion-footer'>
        <div className='discussion-stats'>
          <span className='vote'>{hasUpvoted ? <FaThumbsUp className="upvoted" /> : <FaRegThumbsUp />} {comment.upVotesBy.length}</span>
          <span className='vote'>{hasDownvoted ? <FaThumbsDown className="downvoted" /> : <FaRegThumbsDown />} {comment.downVotesBy.length}</span>
        </div>
        <span>Dibuat oleh</span>
        <img src={comment.owner.avatar} alt={comment.owner.name} className='detail-avatar' />
        <span className='owner-name'> {comment.owner.name} </span>
        <span> {postedAt(comment.createdAt)}</span>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default CommentItem;