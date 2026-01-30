import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpvoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownvoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralVoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  console.log('asyncReceiveThreadDetail threadId:', threadId);
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      console.log('Fetched thread detail:', threadDetail);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpvoteThreadDetailActionCreator({ userId: authUser.id }));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownvoteThreadDetailActionCreator({ userId: authUser.id }));

    try {
      await api.downvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleNeutralVoteThreadDetailActionCreator({ userId: authUser.id }));

    try {
      await api.neutralizeVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpvoteThreadDetailActionCreator,
  toggleDownvoteThreadDetailActionCreator,
  toggleNeutralVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpvoteThreadDetail,
  asyncToggleDownvoteThreadDetail,
  asyncToggleNeutralVoteThreadDetail,
};