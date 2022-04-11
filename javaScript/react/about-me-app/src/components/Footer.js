import React from 'react';
import Logo from './Logo.js'

const Footer = () => {
  return (
    <footer className="footer">
      <Logo/>
      <div className='footer-content'>    
        <h1 className='footer-text'>Wanna work together?</h1>
        <button className="footer-button">Let's Talk</button>
      </div>
    </footer>

  );
}

export default Footer;

// const restaurants = ['Cosmic Stones Wings', 'BK', 'Rye of Agamotto']
