import React from 'react';
import COC_Logo from '../images/logo-cityofcalgary.png';
import './Header.css'; // Optional: Add styling specific to the header


function Header() {
  return (
    <header className="App-header">
      <img src={COC_Logo} alt="City of Calgary logo" className="COCLogo" />
    </header>
  );
}

export default Header;
