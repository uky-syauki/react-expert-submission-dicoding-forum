import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncToggleUpvoteThread, asyncToggleDownvoteThread, asyncToggleNeutralVoteThread } from '../states/threads/action';

function ThreadItem({ id, category, title, body, upVoteBy, downVoteBy, daysAgo, author }) {
  const { authUser } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  let isUpvoted = false;
  let isDownvoted = false;

  if (authUser) {
    isUpvoted = upVoteBy.includes(authUser.id);
    isDownvoted = downVoteBy.includes(authUser.id);
  }

  const neutralVote = () => {
    dispatch(asyncToggleNeutralVoteThread(id));
    isUpvoted = false;
    isDownvoted = false;
  };

  const upVoteHandler = () => {
    if (isUpvoted) {
      neutralVote();
    } else {
      dispatch(asyncToggleUpvoteThread(id));
      isUpvoted = true;
    }
  };

  const downVoteHandler = () => {
    if (isDownvoted) {
      neutralVote();
    } else {
      dispatch(asyncToggleDownvoteThread(id));
      isDownvoted = true;
    }
  };

  return (
    <div className='glass-card discussion-card'>
      <span className='discussion-tag'>#{category}</span>
      <h3 className='discussion-title discussion-title-detail' role='button' tabIndex={0} onClick={handleThreadClick} onKeyDown={onKeyDown}>{title}</h3>
      <p className='discussion-desc-paragraph' dangerouslySetInnerHTML={{ __html: body }}></p>


      <div className='discussion-footer'>
        <div className='discussion-stats'>
          <span className='vote' onClick={upVoteHandler}>{isUpvoted ?<FaThumbsUp className="upvoted" /> : <FaRegThumbsUp />} {upVoteBy.length}</span>
          <span className='vote' onClick={downVoteHandler}>{isDownvoted ? <FaThumbsDown className="downvoted" /> : <FaRegThumbsDown />} {downVoteBy.length}</span>
        </div>

        <div className='discussion-meta'>
          {daysAgo} . <strong>{author}</strong>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVoteBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVoteBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  daysAgo: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

export default ThreadItem;