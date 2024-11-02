import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationBar from '../components/NavigationBar';
import '../style/GovernmentServicesPage.css';

const servicesData = [
    {
        title: 'Service Canada',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {/* Space above */}
                    <Typography 
                        variant="body1" 
                        component="strong" 
                        style={{ fontWeight: 'bold' }}
                    >
                        Service Canada provides a range of services and benefits for Canadians, including:
                    </Typography>
                </div>
                <ul style={{ listStylePosition: 'inside', marginBottom: '10px' }}> {/* Add space below the list */}
                    <li>Employment Insurance</li>
                    <li>Canada Pension Plan</li>
                    <li>Old Age Security</li>
                    <li>Social Insurance Number applications</li>
                </ul>
                For more information, you can visit the official website:
                <br />
                <Button
                    onClick={() => window.open("https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                    style={{ color: 'blue', textDecoration: 'underline' }}>
                    Learn more about Service Canada
                </Button>
            </>
        )
    },
    {
        title: 'Immigration',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {/* Space above */}
                    <Typography 
                        variant="body1" 
                        component="strong" 
                        style={{ fontWeight: 'bold' }}
                    >
                        Immigration, Refugees and Citizenship Canada (IRCC) offers a range of services for those looking to travel, study, work, or immigrate to Canada. The key areas include:
                    </Typography>
                </div>
                <ul style={{ listStylePosition: 'inside', marginBottom: '10px' }}> {/* Add space below the list */}
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
                    onClick={() => window.open("https://www.canada.ca/en/services/immigration-citizenship.html", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Learn more about Immigration services
                </Button>
            </>
        )
    },
    {
        title: 'Legal Services',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {/* Space above */}
                    <Typography 
                        variant="body1" 
                        component="strong" 
                        style={{ fontWeight: 'bold' }}
                    >
                        Calgary Legal Guidance (CLG) offers free legal advice and resources to vulnerable Albertans, including those experiencing family violence, homelessness, or health issues. While we don't represent clients in court, our volunteer lawyers provide assistance in preparing for legal matters.
                        <br />
                        For more details, visit:
                    </Typography>
                </div>
                <Button
                    onClick={() => window.open("https://clg.ab.ca/", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Community Legal Guidance
                </Button>
            </>
        )
    }
];

const ServiceAccordion = ({ title, description, onMapOpen }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>{title}</Typography> {/* Bold title */}
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography style={{ flexGrow: 1 }}>
                {description}
            </Typography>
            <IconButton
                onClick={onMapOpen}
                color="primary"
                aria-label="Open Map"
                style={{ marginLeft: 'auto' }}
            >
                📍
            </IconButton>
        </AccordionDetails>
    </Accordion>
);

function GovernmentServicesPage() {
    const handleMapOpen = () => {
        window.open("https://www.google.ca/maps/preview", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    return (
        <div className="page-container">
            <NavigationBar />
            <div className="title-container">
                <h1 className="title">Government Services</h1>
            </div>
            <div className="accordion-container">
                {servicesData.map(service => (
                    <ServiceAccordion
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        onMapOpen={handleMapOpen}
                    />
                ))}
            </div>
        </div>
    );
}

export default GovernmentServicesPage;
