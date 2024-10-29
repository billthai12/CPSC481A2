import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from '../components/Header';
import './GovernmentServicesPage.css';

function GovernmentServicesPage() {
    const navigate = useNavigate();
    const [openMapDialog, setOpenMapDialog] = useState(false);
    const [openServiceDialog, setOpenServiceDialog] = useState(false);

    const handleEndClick = () => navigate('/');
    const handleHomeClick = () => navigate('/home');
    const handleBackClick = () => navigate(-1);

    const handleMapOpen = () => setOpenMapDialog(true);
    const handleMapClose = () => setOpenMapDialog(false);

    const handleServiceOpen = () => setOpenServiceDialog(true);
    const handleServiceClose = () => setOpenServiceDialog(false);

    return (
        <div className="page-container">
            <Header />
            <div className="title-container">
                <h1 className="title">GOVERNMENT SERVICES PAGE</h1>
            </div>
            <div className="accordion-container">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Service Canada</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ flexGrow: 1 }}>
                            Service Canada provides a range of services and benefits for Canadians, including:
                            <ul>
                                <li>Employment Insurance</li>
                                <li>Canada Pension Plan</li>
                                <li>Old Age Security</li>
                                <li>Social Insurance Number applications</li>
                            </ul>
                            For more information, you can visit the official website:
                            <br />
                            <a 
                                href="https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'blue', textDecoration: 'underline' }}
                            >
                                Learn more about Services Canada
                            </a>
                        </Typography>
                        <IconButton 
                            onClick={handleMapOpen} 
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
        <Typography>Immigration</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Immigration, Refugees and Citizenship Canada (IRCC) offers a range of services for those looking to travel, study, work, or immigrate to Canada. The key areas include:
            <ul>
                <li>**Travel:** Apply for a visitor visa or electronic travel authorization (eTA).</li>
                <li>**Immigration:** Apply for permanent residence through various programs.</li>
                <li>**Work:** Obtain or extend a work permit and learn about hiring foreign workers.</li>
                <li>**Study:** Apply for study permits and student work permits.</li>
                <li>**Citizenship:** Apply for Canadian citizenship and find information on citizenship tests.</li>
                <li>**Refugees:** Claim refugee protection and find support services.</li>
            </ul>
            For more information regarding these services, visit the official government website:
            <br />
            <a 
                href="https://www.canada.ca/en/services/immigration-citizenship.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'blue', textDecoration: 'underline' }}
            >
                Learn more about Immigration services
            </a>
        </Typography>
    </AccordionDetails>
</Accordion>


<Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Legal Services</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Calgary Legal Guidance (CLG) offers free legal advice and resources to vulnerable Albertans, including those experiencing family violence, homelessness, or health issues. While we don't represent clients in court, our volunteer lawyers provide assistance in preparing for legal matters. 
            <br />
            For more details, visit: 
            <a 
                href="https://clg.ab.ca/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'blue', textDecoration: 'underline' }}
            >
                Community Legal Guidance
            </a>
        </Typography>
    </AccordionDetails>
</Accordion>

            </div>

            <footer className="footer-bar">
                <Button onClick={handleEndClick} variant="contained" color="primary">End</Button>
                <Button onClick={handleHomeClick} variant="contained" color="primary">Home</Button>
                <Button onClick={handleBackClick} variant="contained" color="primary">Back</Button>
            </footer>
        </div>
    );
}

export default GovernmentServicesPage;
