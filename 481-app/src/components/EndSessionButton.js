import React from 'react';
import '../App.js';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';


function EndSessionButton() {
    const navigate = useNavigate();
    return (
        <Button 
        className="BackButton"
        variant="danger"
        size="lg"
        onClick={() => navigate('/')}><i class="bi bi-x-lg"></i> End Session</Button>
    );
}

export default EndSessionButton;