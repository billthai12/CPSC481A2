import * as React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useNavigate } from "react-router-dom";

function LanguagePage(){
const navigate = useNavigate();

 return (
<>
  <h1 className='Welcome'> Welcome to Calgary!</h1>

    <div className="LanguageSelect">
      <h2> Select a Language</h2>

      <div className="button-container">
        <Button variant="info" size="lg" onClick={() => navigate('/home')}>English</Button>
        <Button variant="info" size="lg" onClick={() => navigate('/home/french')}>Français</Button>
        <Button variant="info" size="lg">中文</Button>
        <Button variant="info"size="lg">ਪੰਜਾਬੀ</Button>
        <Button variant="info"size="lg">Tagalog</Button>
        <Button variant="info"size="lg">Español</Button>
      </div>

    </div>

</>

  );
}

export default LanguagePage;
