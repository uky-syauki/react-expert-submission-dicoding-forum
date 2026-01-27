import React from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className='home-wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;