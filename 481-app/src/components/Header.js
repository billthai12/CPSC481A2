import React from 'react';
import COC_Logo from '../images/logo-cityofcalgary.png';
import './Header.css';


function Header() {
  return (
    <header className="App-header">
      <img src={COC_Logo} alt="City of Calgary logo" className="COCLogo" />
    </header>
  );
}

export default Header;
