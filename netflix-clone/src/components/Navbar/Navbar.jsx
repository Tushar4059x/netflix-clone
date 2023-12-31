import React from 'react';
import './Navbar.css';
import netflixLogo from "../../assets/Netflix-Logo.wine.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navbar content goes here */}
      <ul>
        <li><img src={netflixLogo} alt="netflix logo" height={80}  style={{ marginTop: '-20px' }} /></li>
        <li><button className='text-button'>Home</button></li>
        <li><button className='text-button'>TV Shows</button></li>
        <li><button className='text-button'>Movies</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
