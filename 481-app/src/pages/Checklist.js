import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/checklist.css'; 
import clientSupportQR from '../images/uberQR.png'; // change qr code
import SINQR from '../images/uberQR.png'; // change qr code
import AHCIPQR from '../images/uberQR.png'; // change qr code

function Checklist() {
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const navigate = useNavigate();

    const accordion1Items = [
        { title: 'Visit/Call Immigration, Refugees and Citizenship Canada (IRCC)', eventKey: '0' },
        { title: 'Apply for SIN Card', eventKey: '1' },
        { title: 'Get Health Insurance Card', eventKey: '2' },
        { title: 'Open Bank Account', eventKey: '3' },
        { title: 'Get Access to Internet and Phone Calls', eventKey: '4' },
        { title: 'Memorize Emergency Numbers', eventKey: '5' },
        { title: 'Find Childcare & Schools', eventKey: '6' },
        { title: 'Get Credentials Accredited', eventKey: '7' },
        { title: 'Find Employment', eventKey: '8' }
    ];

    const accordion2Items = [
        { title: 'Improve your English/French', eventKey: '0' },
        { title: 'Apply for Canada Child Tax Benefit', eventKey: '1' },
        { title: 'Apply for Driver\'s License', eventKey: '2' },
        { title: 'Learn about Canadian Laws and your Rights and Responsibilities', eventKey: '3' },
        { title: 'Search for a Home to Rent or Buy, Learn your Rights as a Tenant', eventKey: '4' },
        { title: 'Search and Apply for Jobs, Learn your Rights as an Employee', eventKey: '5' },
        { title: 'Find Family Doctor', eventKey: '6' },
        { title: 'Make Sure you Receive Permanent Resident card from IRCC within 2 months of Date of Arrival, if not contact ircc office', eventKey: '7' },
        { title: 'Find Post-Secondary Education', eventKey: '8' },
        { title: 'Find Mental Health Support', eventKey: '9' }
    ];

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const openIRCCClientSupportCenterWebsite = () => {
        window.open("https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html", "Client Support Center", "width=800,height=600");
    };

    const openSINWebsite = () => {
        window.open("https://www.canada.ca/en/employment-social-development/services/sin/apply.html", "SIN Card", "width=800,height=600");
    };

    const openAHCIPWebsite = () => {
        window.open("https://www.alberta.ca/ahcip-how-to-apply", "AHCIP", "width=800,height=600");
    };



    return (
        <div className="Checklist">
            <h1>Newcomer's To-Do List</h1>
            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <h3>1. PRIMARY TASKS</h3>
                    {accordion1Items.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Visit/Call Immigration, Refugees and Citizenship Canada (IRCC)' && (
                                    <>
                                        <p><strong>IRCC Client Support Center: 1-888-242-2100</strong></p>
                                        <p>Monday to Friday, 8 a.m. to 4 p.m. (your local time)</p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => openIRCCClientSupportCenterWebsite()}>Open IRCC Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(clientSupportQR)}>Website QR Code</Button></p>
                                        </div>
                                        <p>*Unfortunately the closest IRCC center is in <strong>Edmonton</strong>*</p>
                                    </>
                                )}
                                {item.title === 'Apply for SIN Card' && (
                                    <>
                                        <p><strong>Read about the required documents for a Social Insurance Number (SIN) and apply</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => openSINWebsite()}>Open Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(SINQR)}>Website QR Code</Button></p>
                                            {/* find on map button */}
                                        </div>
                                        <p>If you are a Canadian citizen, a permanent resident or a temporary resident, you need a Social Insurance Number (SIN) to work in Canada or to receive benefits and services from government programs. Children 12 years of age or older may apply for their SIN.</p>
                                    </>
                                )}
                                {item.title === 'Get Health Insurance Card' && (
                                    <>
                                        <p><strong>Read about how to apply for an Alberta Health Care Insurance Plan (AHCIP)</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => openAHCIPWebsite()}>Open Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(AHCIPQR)}>Website QR Code</Button></p>
                                            {/* find on map button */}
                                        </div>
                                        <p>All new and returning Alberta residents must register for Alberta Health Care Insurance Plan (AHCIP) coverage to receive insured hospital and physician services.</p>
                                    </>
                                )}
                                {item.title === 'Open Bank Account' && (
                                    <>
                                        <p><strong>The Banking page should provide you with details of the popular/closest banks in the area.</strong></p>
                                        <p><Button className="button" onClick={() => navigate("/banking")}>Open Banking Page</Button></p>
                                        <p>Building your Canadian life begins by building good credit history. Lenders look at your credit history score to approve you for loans. The first step is to open a bank account, after which you can apply for a credit card to ease payments and build your credit history.</p>
                                    </>
                                )}
                                {item.title === 'Get Access to Internet and Phone Calls' && (
                                    <>
                                        <p><strong>Your nearest library should provide you with temporary internet access and allow you to make phone calls.</strong></p>
                                        <p>Another option is to <strong>find internet and phone plans for your home</strong>. The Internet and Cellular page should provide you with details of the popular/closest providers in the area.</p>
                                        {/* find on map button */}
                                        <p><Button className="button" onClick={() => navigate("/internet")}>Open Internet and Cellular Page</Button></p>
                                        <p>Staying connected with loved ones, searching for job opportunities, and settling into your new life in Canada requires dependable mobile phone and internet services. Canada's phone and internet industries are newcomer friendly, but can be difficult to navigate as you begin a new life in a new country.</p>
                                    </>
                                )}
                                {item.title === 'Memorize Emergency Numbers' && (
                                    <>
                                        <p><strong>The Emergency Services page has a link to a list of all emergency and non-emergency numbers you should know.</strong></p>
                                        <p><Button className="button" onClick={() => navigate("/emergencyservices")}>Open Emergency Services Page</Button></p>
                                        <p>Emergency helpline numbers are essential for everyone to know in case of any emergencies such as medical emergencies, criminal activity, calamity, or natural disasters. In case of such unfortunate emergencies, we should not be running around scouting for help or trying to figure out who to call for help.</p>
                                    </>
                                )}
                                {item.title === 'Find Childcare & Schools' && (
                                    <>
                                        <p><strong>Your children, if any, should go to school??????</strong></p>
                                        {/* website with all public schools in calgary??? */}
                                        {/* find on map button */}
                                    </>
                                )}
                                {item.title === 'Get Credentials Accredited' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>You should get your credentials accredited, if any?????</b></strong>
                                                {/* link to website with what type of credentials need to be accredited in calgary??? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Find Employment' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Finding a job is essential for living here lol??????</b></strong>
                                                {/* popular job board websites??? */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>

            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <h3>2. SECONDARY TASKS</h3>
                    {accordion2Items.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Improve your English/French' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Improve your language skills by enrolling in (tax-payer funded) language classes.</b></strong>
                                                {/* link to classes info???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Apply for Canada Child Tax Benefit' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>If you have a dependent under 18, you should apply for the Canadian Child Tax Benefit</b></strong>
                                                {/* link to child tax benefit info */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Apply for Driver\'s License' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Navigating around Calgary would be much easier with a car. ????</b></strong>
                                                {/* link to drivers license info???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Learn about Canadian Laws and your Rights and Responsibilities' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to info idk???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Search for a Home to Rent or Buy, Learn your Rights as a Tenant' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to info idk???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Search and Apply for Jobs, Learn your Rights as an Employee' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to info idk???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Find Family Doctor' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to info idk???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Make Sure you Receive your Permanent Resident Card from IRCC' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>Within 2 months of your Date of Arrival, you should receive your Permanent Resident Card from the IRCC. If you have not, contact the IRCC office.</b></strong>
                                                {/* link to ircc contact info ???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Find Post-Secondary Education' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to uni/college info???? */}
                                                {/* find on map button */}
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Find Mental Health Support' && (
                                    <>
                                        <ul>
                                            <li className="info">
                                                <strong><b>?????</b></strong>
                                                {/* link to mental health info & emergency number???? */}
                                                {/* find on map button */}
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
            </Modal>
        </div>
    );
}

export default Checklist;
