import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_THREAD:
    return [action.payload.thread, ...threads];
  case ActionType.UPVOTE_THREAD: {
    const { threadId, userId } = action.payload;

    return threads.map((thread) => {
      if (thread.id === threadId) {
        const isUpvoted = thread.upVotesBy.includes(userId);
        const isDownvoted = thread.downVotesBy.includes(userId);

        return {
          ...thread,
          upVotesBy: isUpvoted
            ? thread.upVotesBy.filter((id) => id !== userId)
            : [...thread.upVotesBy, userId],
          downVotesBy: isDownvoted
            ? thread.downVotesBy
            : thread.downVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }
  case ActionType.DOWNVOTE_THREAD: {
    const { threadId, userId } = action.payload;

    return threads.map((thread) => {
      if (thread.id === threadId) {
        const isDownvoted = thread.downVotesBy.includes(userId);
        const isUpvoted = thread.upVotesBy.includes(userId);

        return {
          ...thread,
          downVotesBy: isDownvoted
            ? thread.downVotesBy.filter((id) => id !== userId)
            : [...thread.downVotesBy, userId],
          upVotesBy: isUpvoted
            ? thread.upVotesBy
            : thread.upVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }
  case ActionType.NEUTRAL_VOTE_THREAD: {
    const { threadId, userId } = action.payload;

    return threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== userId),
          downVotesBy: thread.downVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }
  default:
    return threads;
  }
}

export default threadsReducer;