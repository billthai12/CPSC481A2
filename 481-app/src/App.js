import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={COC_Logo} alt="react logo" className="COCLogo"/>
      </header>
      
      <h1>
        Select Language
        
      </h1>

    </div>
  );
}

export default App;
