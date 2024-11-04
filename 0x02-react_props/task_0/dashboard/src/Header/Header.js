import HolbertonLogo from '../assets/Holberton-logo.jpg';
import './Header.css';
import React from 'react';



function Header() {
  return (
    <div className="Header">
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo"/>
        <h1>
        School dashboard
        </h1>
      </div>      
    </div>    
  );
}

export default Header;
