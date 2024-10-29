import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/emergency.css'; 
import CoCQR from '../images/uberQR.png'; // change qr code

function EmergencyServices() {
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const accordionItems = [
        { title: 'Ambulance', eventKey: '0' },
        { title: 'Police', eventKey: '1' },
        { title: 'Fire Department', eventKey: '2' },
        { title: 'All City of Calgary Emergency Services', eventKey: '3' }
    ];

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const openAmbulanceWebsite = () => {
        window.open("https://www.alberta.ca/ambulance-and-emergency-health-services", "Ambulance", "width=800,height=600");
    };

    const openPoliceWebsite = () => {
        window.open("https://www.calgary.ca/cps.html", "Police", "width=800,height=600");
    };

    const openFireDeptWebsite = () => {
        window.open("https://www.calgary.ca/categories/subcategory-calgaryfiredepartment-grid.html", "Fire Department", "width=800,height=600");
    };

    const openCoCWebsite = () => {
        window.open("https://www.calgary.ca/our-services/911.html", "City of Calgary Emergency Services", "width=800,height=600");
    };

    return (
        <div className="EmergencyServices">
            <h1>Emergency Services</h1>
            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    {accordionItems.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Ambulance' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Emergency Line: 9-1-1</b></strong>
                                                <strong><b>HealthLink Line: 8-1-1.</b> For general health information or advice.</strong>
                                                <strong><b>Non-Emergency Mental Health Line: 2-1-1.</b> For mental health and addiction support, connection to food and basic needs, or access to community and social resources.</strong>
                                                <Button variant="primary" onClick={() => openAmbulanceWebsite()}>Open Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Police' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Emergency Line: 9-1-1</b></strong>
                                                <strong><b>Non-Emergency Line: 403-266-1234.</b> All public safety matters and reports of crime not in progress.</strong>
                                                <Button variant="primary" onClick={() => openPoliceWebsite()}>Open Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Fire Department' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Emergency Line: 9-1-1</b></strong>
                                                <strong><b>Non-Emergency Line: 3-1-1</b></strong>
                                                <Button variant="primary" onClick={() => openFireDeptWebsite()}>Open Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'All City of Calgary Emergency Services' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <Button variant="primary" onClick={() => openCoCWebsite()}>Open Website</Button>
                                                <Button variant="primary" onClick={() => handleShow(CoCQR)}>Website QR Code</Button>
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
                    <Modal.Title>Website QR Code</Modal.Title>
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

export default EmergencyServices;
