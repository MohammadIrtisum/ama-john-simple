import React from 'react';
import logo from '../../images/favicon.ico';
import './Header.css'

const Header = () => {
   
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav><a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Invantroy</a></nav>
        </div>
    );
};

export default Header;