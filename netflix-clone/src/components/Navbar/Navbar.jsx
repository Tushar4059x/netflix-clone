import React from 'react';
import './Navbar.css';
import netflixLogo from "../../assets/Netflix-Logo.wine.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navbar content goes here */}
        <div>
            <ul>
                <li><img src={netflixLogo} alt="netflix logo" height={40}  style={{ marginTop: '20px' }} /></li>
            </ul>
        </div>
        <div>
          <ul>
          <li className='list'><button className='text-button'>Home</button></li>
          <li className='list'><button className='text-button'>TV Shows</button></li>
          <li className='list'><button className='text-button'>Movies</button></li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
