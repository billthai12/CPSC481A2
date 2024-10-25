import * as React from 'react';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';
import LanguageButton from './components/LanguageButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={COC_Logo} alt="react logo" className="COCLogo"/>
      </header>
      
      <h1 classname = 'WelcomeContainer'>
        Welcome to Calgary!
      </h1>

      <h2 className='SelectLanguage'>
        Select Language
        <div className="LanguageButton"> 
        <LanguageButton/>
        </div>
      </h2>
    </div>

  );
}

export default App;
