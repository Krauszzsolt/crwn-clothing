import React from 'react';
import './homepage.style.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='subtitle'>Show Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Shoes</h1>
            <span className='subtitle'>Show Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Woman</h1>
            <span className='subtitle'>Show Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Man</h1>
            <span className='subtitle'>Show Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
