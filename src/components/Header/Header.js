import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <nav>
                    <div className='header-img'><img className='logo' src={logo} alt="" /></div>
                    <div className='navlink'>
                        <a href="/shop">Shop</a>
                        <a href="/order">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;