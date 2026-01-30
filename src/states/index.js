import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threads: threadsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
