import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAIL:
	  return action.payload.threadDetail;
  case ActionType.CLEAR_THREAD_DETAIL:
	  return null;
  case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL: {
	  const { userId } = action.payload;
	  const isUpvoted = threadDetail.upVotesBy.includes(userId);
	  const isDownvoted = threadDetail.downVotesBy.includes(userId);

	  return {
      ...threadDetail,
      upVotesBy: isUpvoted
		  ? threadDetail.upVotesBy.filter((id) => id !== userId)
		  : [...threadDetail.upVotesBy, userId],
      downVotesBy: isDownvoted
		  ? threadDetail.downVotesBy
		  : threadDetail.downVotesBy.filter((id) => id !== userId),
	  };
  }
  case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL: {
	  const { userId } = action.payload;
	  const isDownvoted = threadDetail.downVotesBy.includes(userId);
	  const isUpvoted = threadDetail.upVotesBy.includes(userId);

	  return {
      ...threadDetail,
      downVotesBy: isDownvoted
		  ? threadDetail.downVotesBy.filter((id) => id !== userId)
		  : [...threadDetail.downVotesBy, userId],
      upVotesBy: isUpvoted
		  ? threadDetail.upVotesBy
		  : threadDetail.upVotesBy.filter((id) => id !== userId),
	  };
  }
  case ActionType.TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL: {
	  const { userId } = action.payload;

	  return {
      ...threadDetail,
      upVotesBy: threadDetail.upVotesBy.filter((id) => id !== userId),
      downVotesBy: threadDetail.downVotesBy.filter((id) => id !== userId),
	  };
  }
  default:
	  return threadDetail;
  }
}

export default threadDetailReducer;