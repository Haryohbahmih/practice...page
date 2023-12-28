import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div>
          <h3 className="header-title">Plan your meals</h3>
        </div>
        <div className='line-list'>
            <div className='line-list-item'>Plan Selection</div>
            <div className='line-list-item'>Select Meals</div>
            <div className='line-list-item'>Address</div>
            <div className='line-list-item'>Checkout</div>
        </div>
      </header>
    </div>
  );
};

export default Header;

