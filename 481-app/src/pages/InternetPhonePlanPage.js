import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../style/internetPhonePlan.css';
import bellLogo from '../images/bell.png';
import telusLogo from '../images/telus.png';
import rogersLogo from '../images/rogers.png';
import freedomLogo from '../images/freedom.png';
import fidoLogo from '../images/fido.png';
import koodoLogo from '../images/koodo.png';
import NavigationBar from '../components/NavigationBar';

function InternetPhonePlanPage() {
    const providers = [
        { name: 'Bell', logo: bellLogo, website: 'https://www.bell.ca', rating: 4.5, priceRange: "$30-$40", phone: '1-800-668-6878', mapLocation: 'https://www.google.com/maps?q=Bell+stores+Calgary' },
        { name: 'Telus', logo: telusLogo, website: 'https://www.telus.com', rating: 5.0, priceRange: "$30-$60", phone: '1-866-558-2273', mapLocation: 'https://www.google.com/maps?q=Telus+stores+Calgary' },
        { name: 'Rogers', logo: rogersLogo, website: 'https://www.rogers.com', rating: 3.5, priceRange:"$50-$80", phone: '1-888-764-3771', mapLocation: 'https://www.google.com/maps?q=Rogers+stores+Calgary' },
        { name: 'Freedom Mobile', logo: freedomLogo, website: 'https://www.freedommobile.ca', rating: 4.0, priceRange: "$50-$80", phone: '1-877-946-3184', mapLocation: 'https://www.google.com/maps?q=Freedom+Mobile+stores+Calgary' },
        { name: 'Fido', logo: fidoLogo, website: 'https://www.fido.ca', rating: 4.0, priceRange: "$80-$90", phone: '1-888-481-3436', mapLocation: 'https://www.google.com/maps?q=Fido+stores+Calgary' },
        { name: 'Koodo', logo: koodoLogo, website: 'https://www.koodomobile.com', rating: 5.0, priceRange: "$30-$45", phone: '1-866-995-6636', mapLocation: 'https://www.google.com/maps?q=Koodo+stores+Calgary' },
    ];

    return (
        <div>
            <NavigationBar/>
            <Container className="text-center mt-4">
                <h1>Internet and Cellular Information</h1>
                <Row className="justify-content-center">
                    {providers.map((provider, index) => (
                        <Col key={index} md={4} lg={3} className="mb-4">
                            <Card
                                className="provider-card h-100 text-center shadow"
                                onClick={() => window.open(provider.website, 'ProviderPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={provider.logo}
                                    alt={`${provider.name} logo`}
                                    className={`provider-logo p-3 ${provider.name === 'Telus' ? 'telus-logo' : 'larger-logo'}`}
                                />
                                <Card.Body>
                                    <Card.Title>{provider.name}</Card.Title>
                                    <div className="provider-phone mb-2">Phone #: {provider.phone}</div>
                                    <Card.Text>
                                        Rating: {provider.rating} ⭐
                                    </Card.Text>
                                    <Card.Text>
                                        Price Range: {provider.priceRange}
                                    </Card.Text>
                                    <div className="action-buttons">
                                        <Button
                                            variant="outline-primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(provider.mapLocation, 'MapsPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
                                            }}
                                            className="me-2"
                                        >
                                            📍
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(provider.website, 'ProviderPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
                                            }}
                                        >
                                            🔗
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default InternetPhonePlanPage;
