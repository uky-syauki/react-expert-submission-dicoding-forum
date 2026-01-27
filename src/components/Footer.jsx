import React from 'react';
import { HiOutlineChatAlt2,HiOutlineChartBar,HiOutlineLogin } from 'react-icons/hi';

function Footer() {
  return (
    <footer className='home-footer'>
      <nav className='footer-nav'>
        <a href="#" className='footer-item'>
          <HiOutlineChatAlt2 size={20} />
          <span>Threads</span>
        </a>

        <a href="#" className='footer-item'>
          <HiOutlineChartBar size={20} />
          <span>Leaderboards</span>
        </a>

        <a href="#" className='footer-item'>
          <HiOutlineLogin size={20} />
          <span>Logout</span>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;