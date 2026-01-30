import React, { useEffect } from 'react';
import ThreadList from '../components/ThreadList';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateData } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateData());
  }, [dispatch]);

  console.log('HomePage threads:', threads);

  const treadlist = threads.map((tread) => ({
    ...tread,
    user: users.find((user) => user.id === tread.ownerId),
  }));

  return (
    <div className='home-wrapper'>
      <ThreadList threads={treadlist} users={users} authUser={authUser} />
    </div>
  );
}

HomePage.propTypes = {
  onSingOut: PropTypes.func.isRequired,
};

export default HomePage;