import React, { useEffect } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateData } from '../states/shared/action';

function HomePage({ onSingOut }) {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateData());
  }, [dispatch]);

  const treadlist = threads.map((tread) => ({
    ...tread,
    user: users.find((user) => user.id === tread.ownerId),
  }));

  console.log('Treads in HomePage:', threads);
  return (
    <div className='home-wrapper'>
      <Header />
      <Main threads={treadlist} users={users} authUser={authUser} />
      <Footer authUser={authUser} onSingOut={onSingOut} />
    </div>
  );
}

HomePage.propTypes = {
  onSingOut: PropTypes.func.isRequired,
};

export default HomePage;