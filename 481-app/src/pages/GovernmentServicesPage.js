import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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
                                onClick={handleServiceOpen} // Open the dialog
                                style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
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
                            Information regarding Immigration services.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Legal Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Details about Legal Services go here.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Modal for Services Canada */}
            <Dialog open={openServiceDialog} onClose={handleServiceClose}>
                <DialogTitle>
                    Services Canada
                    <Button onClick={handleServiceClose} style={{ float: 'right' }}>
                        X
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <Typography>
                     GET EMBEDDED POP UP TO OPEN herE
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleServiceClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Modal for Map */}
            <Dialog open={openMapDialog} onClose={handleMapClose}>
                <DialogTitle>
                    Open Map
                    <Button onClick={handleMapClose} style={{ float: 'right' }}>
                        X
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        You can view the map at this link: 
                        <a 
                            href="https://www.google.com/maps" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Google Maps
                        </a>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleMapClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <footer className="footer-bar">
                <Button onClick={handleEndClick} variant="contained" color="primary">End</Button>
                <Button onClick={handleHomeClick} variant="contained" color="primary">Home</Button>
                <Button onClick={handleBackClick} variant="contained" color="primary">Back</Button>
            </footer>
        </div>
    );
}

export default GovernmentServicesPage;
