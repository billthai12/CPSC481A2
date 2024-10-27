import React, { useState } from 'react';
import '../style/banking.css';
import tdLogo from '../images/td.png';
import rbcLogo from '../images/rbc.png';
import scotiabankLogo from '../images/scotiabank.png';
import bmoLogo from '../images/bmo.png';
import cibcLogo from '../images/cibc.png';
import atbLogo from '../images/atb.png';
import { Card, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banking() {
    const [sortCriteria, setSortCriteria] = useState('distance');

    const banks = [
        { name: 'TD', logo: tdLogo, website: 'https://www.td.com', distance: 2.3, rating: 4.5 },
        { name: 'RBC', logo: rbcLogo, website: 'https://www.rbc.com', distance: 1.7, rating: 4.2 },
        { name: 'Scotiabank', logo: scotiabankLogo, website: 'https://www.scotiabank.com', distance: 3.1, rating: 4.7 },
        { name: 'BMO', logo: bmoLogo, website: 'https://www.bmo.com', distance: 2.8, rating: 4.0 },
        { name: 'CIBC', logo: cibcLogo, website: 'https://www.cibc.com', distance: 1.9, rating: 4.3 },
        { name: 'ATB Financial', logo: atbLogo, website: 'https://www.atb.com', distance: 3.5, rating: 3.9 },
    ];

    const sortedBanks = [...banks].sort((a, b) => {
        if (sortCriteria === 'distance') return a.distance - b.distance;
        if (sortCriteria === 'rating') return b.rating - a.rating;
        return 0;
    });

    const openBankPopup = (url) => {
        window.open(url, 'BankPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    const openMapPopup = (bankName) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(bankName)}&origin=${latitude},${longitude}`;
                window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
            }, (error) => {
                console.error('Error getting location: ', error);
                alert('Unable to retrieve your location. Please enable location services or try again.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="Banking">
            <h1>Banking</h1>

            <div className="sort-container">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="sort-dropdown">
                        Sort by: {sortCriteria === 'distance' ? 'Distance' : 'Rating'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortCriteria('distance')}>Distance</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortCriteria('rating')}>Rating</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="banks-container">
                {sortedBanks.map((bank, index) => (
                    <Card key={index} className="bank-card">
                        <Card.Body>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    openBankPopup(bank.website);
                                }} 
                                className="bank-link"
                                href={bank.website}
                            >
                                <Card.Img variant="top" src={bank.logo} alt={`${bank.name} logo`} className="bank-logo" />
                                <Card.Title>{bank.name}</Card.Title>
                                <Card.Text>
                                    Distance: {bank.distance} km
                                </Card.Text>
                                <Card.Text>
                                    Rating: {bank.rating} ⭐
                                </Card.Text>
                            </a>
                            <div className="action-buttons">
                                <Button variant="outline-primary" onClick={() => openMapPopup(bank.name)}>📍</Button>
                                <Button variant="outline-secondary" onClick={() => openBankPopup(bank.website)}>🔗</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Banking;
