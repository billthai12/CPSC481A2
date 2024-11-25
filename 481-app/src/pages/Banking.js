import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../style/banking.css';
import tdLogo from '../images/td.png';
import rbcLogo from '../images/rbc.png';
import scotiabankLogo from '../images/scotiabank.png';
import scotiabankQR from '../images/bankingQR/scotiabankQR.png';
import tdQR from '../images/bankingQR/tdQR.png';
import rbcQR from '../images/bankingQR/rbcQR.png';
import bmoQR from '../images/bankingQR/bmoQR.png';
import cibcQR from '../images/bankingQR/cibcQR.png';
import atbQR from '../images/bankingQR/atbQR.png';
import bmoLogo from '../images/bmo.png';
import cibcLogo from '../images/cibc.png';
import atbLogo from '../images/atb.png';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import phoneWebsiteLogo from '../images/phoneWebsite.png';
import NavigationBar from '../components/NavigationBar';

function Banking() {
    const [sortCriteria, setSortCriteria] = useState('distanceLowToHigh');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const banks = [
        { name: 'TD', logo: tdLogo, website: 'https://www.td.com', distance: 2.3, rating: 4.5, image: tdQR },
        { name: 'RBC', logo: rbcLogo, website: 'https://www.rbc.com', distance: 1.7, rating: 4.2, image: rbcQR },
        { name: 'Scotiabank', logo: scotiabankLogo, website: 'https://www.scotiabank.com', distance: 3.1, rating: 4.7, image: scotiabankQR },
        { name: 'BMO', logo: bmoLogo, website: 'https://www.bmo.com', distance: 2.8, rating: 4.0, image: bmoQR },
        { name: 'CIBC', logo: cibcLogo, website: 'https://www.cibc.com', distance: 1.9, rating: 4.3, image: cibcQR },
        { name: 'ATB Financial', logo: atbLogo, website: 'https://www.atb.com', distance: 3.5, rating: 3.9, image: atbQR },
    ];

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const sortedBanks = [...banks].sort((a, b) => {
        if (sortCriteria === 'distanceLowToHigh') return a.distance - b.distance;
        if (sortCriteria === 'ratingHighToLow') return b.rating - a.rating; // Sort from high to low for rating
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

    const openImagePopup = (imageUrl) => {
        const imagePopup = window.open('', 'ImagePopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
        imagePopup.document.write(`
            <html>
            <head>
                <title>Bank Branch Image</title>
            </head>
            <body style="margin:0; display:flex; justify-content:center; align-items:center; background-color:#f4f4f4;">
                <img src="${imageUrl}" alt="Bank Branch" style="max-width:100%; max-height:100%;">
            </body>
            </html>
        `);
        imagePopup.document.close();
    };

    return (
        <>
            <NavigationBar />
            <div className="Banking">
                <div className="header-container">
                    <h1>Banking</h1>
                    <div className="sort-container">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                            <option value="distanceLowToHigh">Distance</option>
                            <option value="ratingHighToLow">Rating</option>
                        </select>
                    </div>
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
                                    <Button variant="outline-info" onClick={() => handleShow(bank.image)}>
                                        <img src={phoneWebsiteLogo} alt="phone website logo" style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Mobile Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="view QR code" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Banking;
