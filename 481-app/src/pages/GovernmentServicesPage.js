import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import '../style/GovernmentServicesPage.css';

const servicesData = [
    {
        title: 'Service Canada',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {}
                    <strong>Service Canada provides a range of services and benefits for Canadians, including:</strong>
                </div>
                <ul style={{ listStylePosition: 'inside', marginBottom: '10px' }}> {}
                    <li>Employment Insurance</li>
                    <li>Canada Pension Plan</li>
                    <li>Old Age Security</li>
                    <li>Social Insurance Number applications</li>
                </ul>
                For more information, you can visit the official website:
                <br />
                <Button
                    variant="link"
                    onClick={() => window.open("https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                >
                    Learn more about Service Canada
                </Button>
            </>
        ),
        mapUrl: "https://www.google.com/maps?q=Service+Canada" 
    },
    {
        title: 'Immigration',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {}
                    <strong>Immigration, Refugees and Citizenship Canada (IRCC) offers a range of services for those looking to travel, study, work, or immigrate to Canada. The key areas include:</strong>
                </div>
                <ul style={{ listStylePosition: 'inside', marginBottom: '10px' }}> {}
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
                    variant="link"
                    onClick={() => window.open("https://www.canada.ca/en/services/immigration-citizenship.html", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                >
                    Learn more about Immigration services
                </Button>
            </>
        ),
        mapUrl: "https://www.google.com/maps?q=Immigration" 
    },
    {
        title: 'Legal Services',
        description: (
            <>
                <div style={{ marginBottom: '10px' }}> {}
                    <strong>Calgary Legal Guidance (CLG) offers free legal advice and resources to vulnerable Albertans, including those experiencing family violence, homelessness, or health issues. While we don't represent clients in court, our volunteer lawyers provide assistance in preparing for legal matters.</strong>
                    <br />
                    For more details, visit:
                </div>
                <Button
                    variant="link"
                    onClick={() => window.open("https://clg.ab.ca/", 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                >
                    Community Legal Guidance
                </Button>
            </>
        ),
        mapUrl: "https://www.google.com/maps?q=Legal+Services" 
    }
];

const ServiceAccordion = ({ title, description, mapUrl }) => (
    <Accordion.Item eventKey={title}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flexGrow: 1 }}>
                {description}
            </div>
            <Button
                variant="outline-primary"
                onClick={() => window.open(mapUrl, 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                style={{ marginLeft: 'auto' }}
            >
                📍
            </Button>
        </Accordion.Body>
    </Accordion.Item>
);

function GovernmentServicesPage() {
    return (
        <div className="page-container">
            <NavigationBar />
            <div className="title-container">
                <h1 className="title">Government Services</h1>
            </div>
            <Accordion defaultActiveKey="0" className="accordion-container">
                {servicesData.map((service, index) => (
                    <ServiceAccordion
                        key={index}
                        title={service.title}
                        description={service.description}
                        mapUrl={service.mapUrl}
                    />
                ))}
            </Accordion>
        </div>
    );
}

export default GovernmentServicesPage;
