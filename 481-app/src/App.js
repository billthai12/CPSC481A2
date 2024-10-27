import * as React from 'react';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';
import LanguageButton from './components/LanguageButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Banking from './pages/Banking';
import Transportation from './pages/Transportation';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={COC_Logo} alt="react logo" className="COCLogo" />
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/transportation" element={<Transportation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
