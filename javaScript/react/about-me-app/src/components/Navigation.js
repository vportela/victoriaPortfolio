import React from 'react';
import Logo from './Logo.js';

const Navigation = (props) => (
    <nav className="navbar">
        <Logo/>
        <div className='navlinks'>
        <li className='nav_item'>Home</li>
        <li className='nav_item'>Work</li>
        <li className='nav_item'>Contact</li>
        </div>
    </nav>
  );

export default Navigation;