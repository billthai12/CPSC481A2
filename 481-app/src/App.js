import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';
import LanguageButton from './components/LanguageButton';
import HomePage from './pages/HomePage'; 
import GovernmentServicesPage from './pages/GovernmentServicesPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route - includes the logo, welcome message, etc. */}
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={COC_Logo} alt="react logo" className="COCLogo"/>
            </header>

            <h1 className='WelcomeContainer'>
              Welcome to Calgary!
            </h1>

            <h2 className='SelectLanguage'>
              Select Language
              <div className="LanguageButton"> 
                <LanguageButton/>
              </div>
            </h2>
          </div>
        } />

        <Route path="/government-services" element={<GovernmentServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
