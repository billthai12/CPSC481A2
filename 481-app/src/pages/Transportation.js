import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/transportation.css'; 
import uberQR from '../images/uberQR.png';
import lyftQR from '../images/lyftQR.png'; 
import communautoQR from '../images/communautoQR.png'; 

function Transportation() {
    const [sortCriteria, setSortCriteria] = useState('none');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const accordionItems = [
        { title: 'Rental Cars', price: '$$$', eventKey: '1' },
        { title: 'Taxis', price: '$$', eventKey: '0' },
        { title: 'Calgary Transit', price: '$', eventKey: '2' },
        { title: 'Ride Apps', price: '$$', eventKey: '3' },
    ];

    const sortAccordionItems = (items) => {
        if (sortCriteria === 'lowToHigh') {
            return [...items].sort((a, b) => a.price.localeCompare(b.price));
        } else if (sortCriteria === 'highToLow') {
            return [...items].sort((a, b) => b.price.localeCompare(a.price));
        }
        return [...items].sort((a, b) => a.price.localeCompare(b.price));
    };

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

    const openTransitWebsite = () => {
        window.open("https://www.calgarytransit.com/", "Calgary Transit", "width=800,height=600");
    };

    const openTaxiWebsite = (url) => {
        window.open(url, "Taxi Service", "width=800,height=600");
    };

    const openRentalCarWebsite = (url) => {
        window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
    };

    return (
        <div className="Transportation">
            <h1>Transportation</h1>

            <div className="sort-container">
                <label htmlFor="sort">Sort by Price:</label>
                <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>

            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    {sortAccordionItems(accordionItems).map(item => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title} - {item.price}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Rental Cars' && (
                                    <>
                                        <h5>Rental Car Companies in Calgary:</h5>
                                        <ul>
                                            <li className="ride-share-option">
                                                <strong>Enterprise</strong>
                                                <Button variant="primary" onClick={() => openRentalCarWebsite("https://www.enterprise.com/en/home.html")}>Visit Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Budget</strong>
                                                <Button variant="primary" onClick={() => openRentalCarWebsite("https://www.budget.com/en/home")}>Visit Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Hertz</strong>
                                                <Button variant="primary" onClick={() => openRentalCarWebsite("https://www.hertz.com/rentacar/reservation/")}>Visit Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>National</strong>
                                                <Button variant="primary" onClick={() => openRentalCarWebsite("https://www.nationalcar.com/en/home.html")}>Visit Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Taxis' && (
                                    <>
                                        <h5>Taxi Services in Calgary</h5>
                                        <ul>
                                            <li className="taxi-service-option">
                                                <strong>Yellow Cab</strong>
                                                <Button variant="primary" onClick={() => openTaxiWebsite("https://yellowcabcalgary.com/")}>Visit Website</Button>
                                            </li>
                                            <li className="taxi-service-option">
                                                <strong>Checker Cabs</strong>
                                                <Button variant="primary" onClick={() => openTaxiWebsite("https://www.checkercabs.ca/")}>Visit Website</Button>
                                            </li>
                                            <li className="taxi-service-option">
                                                <strong>Globe Cabs</strong>
                                                <Button variant="primary" onClick={() => openTaxiWebsite("https://www.globecab.com/")}>Visit Website</Button>
                                            </li>
                                            <li className="taxi-service-option">
                                                <strong>Airport Taxi</strong>
                                                <Button variant="primary" onClick={() => openTaxiWebsite("https://www.calgaryairporttaxi.com/")}>Visit Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Calgary Transit' && (
                                    <>
                                        <h5>Calgary Transit</h5>
                                        <p><strong>Fares:</strong> $3.50 for adults, $2.50 for youth, and $1.75 for seniors.</p>
                                        <p><strong>Hours of Service:</strong> Buses operate from 5 AM to midnight, trains run from 4 AM to 1 AM.</p>
                                        <Button variant="primary" onClick={openTransitWebsite}>Visit Official Website</Button>
                                    </>
                                )}
                                {item.title === 'Ride Apps' && (
                                    <>
                                        <h5>Popular Ride Share Apps:</h5>
                                        <ul>
                                            <li className="ride-share-option">
                                                <strong>Uber</strong> - A widely-used ride-hailing app that connects passengers with drivers for quick and convenient rides.
                                                <Button variant="primary" onClick={() => handleShow(uberQR)}>Download Uber</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Lyft</strong> - Another popular ride-sharing service known for its friendly drivers and user-friendly app experience.
                                                <Button variant="primary" onClick={() => handleShow(lyftQR)}>Download Lyft</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Communauto</strong> - A car-sharing service that allows users to rent cars for short periods, perfect for those who need a vehicle occasionally.
                                                <Button variant="primary" onClick={() => handleShow(communautoQR)}>Download Communauto</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Download App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="Download QR Code" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Transportation;
