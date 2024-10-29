import * as React from 'react';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';
// import LanguageButton from './components/LanguageButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Banking from './pages/Banking';
import Transportation from './pages/Transportation';
import LanguagePage from './pages/LanguagePage';
import EmergencyServices from './pages/EmergencyServices';
import Checklist from './pages/Checklist';
import Map from './pages/Map';
import Internet from './pages/Internet';
import GovServices from './pages/GovServices';
import Resources from './pages/Resources';
import Shopping from './pages/Shopping';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={COC_Logo} alt="react logo" className="COCLogo" />
        </header>
        
        <Routes>
          <Route path="/" element={<LanguagePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/emergencyservices" element={<EmergencyServices />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/map" element={<Map />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/govservices" element={<GovServices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
