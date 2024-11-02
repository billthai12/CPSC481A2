// GovernmentServicesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import the new Footer component
import '../style/GovernmentServicesPage.css';

function GovernmentServicesPage() {
    const navigate = useNavigate();
    const [openMapDialog, setOpenMapDialog] = useState(false);

    const handleMapOpen = (url) => {
        window.open(url, 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };
    
    const openPopup = (url) => {
        window.open(url, 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    return (
        <div className="page-container">
            <Header />
            <div className="title-container">
                <h1 className="title">Government Services</h1>
            </div>
            <div className="accordion-container">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Service Canada</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography style={{ flexGrow: 1 }}>
                            Service Canada provides a range of services and benefits for Canadians, including:
                            <ul style={{ listStylePosition: 'inside' }}>
                                <li>Employment Insurance</li>
                                <li>Canada Pension Plan</li>
                                <li>Old Age Security</li>
                                <li>Social Insurance Number applications</li>
                            </ul>
                            For more information, you can visit the official website:
                            <br />
                            <Button
                                onClick={() => openPopup("https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html")}
                                style={{ color: 'blue', textDecoration: 'underline' }}
                            >
                                Learn more about Service Canada
                            </Button>
                        </Typography>
                        <IconButton
                            onClick={() => openPopup("https://www.google.ca/maps/preview")}
                            color="primary"
                            aria-label="Open Map"
                            style={{ marginLeft: 'auto' }}
                        >
                            <LocationOnIcon />
                        </IconButton>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Immigration</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography style={{ flexGrow: 1 }}>
                            Immigration, Refugees and Citizenship Canada (IRCC) offers a range of services for those looking to travel, study, work, or immigrate to Canada. The key areas include:
                            <ul style={{ listStylePosition: 'inside' }}>
                                <li>Travel: Apply for a visitor visa or electronic travel authorization (eTA).</li>
                                <li>Immigration: Apply for permanent residence through various programs.</li>
                                <li>Work: Obtain or extend a work permit and learn about hiring foreign workers.</li>
                                <li>Study: Apply for study permits and student work permits.</li>
                                <li>Citizenship: Apply for Canadian citizenship and find information on citizenship tests.</li>
                                <li>Refugees: Claim refugee protection and find support services.</li>
                            </ul>
                            For more information regarding these services, visit the official government website:
                            <br />
                            <Button
                                onClick={() => openPopup("https://www.canada.ca/en/services/immigration-citizenship.html")}
                                style={{ color: 'blue', textDecoration: 'underline' }}
                            >
                                Learn more about Immigration services
                            </Button>
                        </Typography>
                        <IconButton
                            onClick={() => openPopup("https://www.google.ca/maps/preview")}
                            color="primary"
                            aria-label="Open Map"
                            style={{ marginLeft: 'auto' }}
                        >
                            <LocationOnIcon />
                        </IconButton>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Legal Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography style={{ flexGrow: 1 }}>
                            Calgary Legal Guidance (CLG) offers free legal advice and resources to vulnerable Albertans, including those experiencing family violence, homelessness, or health issues. While we don't represent clients in court, our volunteer lawyers provide assistance in preparing for legal matters.
                            <br />
                            For more details, visit:
                            <Button
                                onClick={() => openPopup("https://clg.ab.ca/")}
                                style={{ color: 'blue', textDecoration: 'underline' }}
                            >
                                Community Legal Guidance
                            </Button>
                        </Typography>
                        <IconButton
                            onClick={() => openPopup("https://www.google.ca/maps/preview")}
                            color="primary"
                            aria-label="Open Map"
                            style={{ marginLeft: 'auto' }}
                        >
                            <LocationOnIcon />
                        </IconButton>
                    </AccordionDetails>
                </Accordion>

            </div>
            <Footer /> {/* Use the new Footer component here */}
        </div>
    );
}

export default GovernmentServicesPage;
