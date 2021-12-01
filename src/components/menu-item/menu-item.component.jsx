import React from 'react';
import './menu-item.style.scss';
import { useNavigate } from 'react-router-dom';
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let nav = useNavigate();

  const doRoute = () => {
    nav(`../${linkUrl}`, { replace: true });
  };
  return (
    <div className={`${size} menu-item`} onClick={() => doRoute()}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Show Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
