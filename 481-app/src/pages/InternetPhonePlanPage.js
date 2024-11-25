import React, { useState } from 'react';
import '../style/internetPhonePlan.css';
import bellLogo from '../images/bell.png';
import telusLogo from '../images/telus.png';
import rogersLogo from '../images/rogers.png';
import freedomLogo from '../images/freedom.png';
import fidoLogo from '../images/fido.png';
import koodoLogo from '../images/koodo.png';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';

function InternetPhonePlanPage() {
    const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');

    const providers = [
        { name: 'Bell', logo: bellLogo, website: 'https://www.bell.ca', rating: 4.5, priceRange: 40, phone: '1-800-668-6878', mapLocation: 'https://www.google.com/maps?q=Bell+stores+Calgary' },
        { name: 'Telus', logo: telusLogo, website: 'https://www.telus.com', rating: 5.0, priceRange: 60, phone: '1-866-558-2273', mapLocation: 'https://www.google.com/maps?q=Telus+stores+Calgary' },
        { name: 'Rogers', logo: rogersLogo, website: 'https://www.rogers.com', rating: 3.5, priceRange: 80, phone: '1-888-764-3771', mapLocation: 'https://www.google.com/maps?q=Rogers+stores+Calgary' },
        { name: 'Freedom Mobile', logo: freedomLogo, website: 'https://www.freedommobile.ca', rating: 4.0, priceRange: 50, phone: '1-877-946-3184', mapLocation: 'https://www.google.com/maps?q=Freedom+Mobile+stores+Calgary' },
        { name: 'Fido', logo: fidoLogo, website: 'https://www.fido.ca', rating: 4.0, priceRange: 90, phone: '1-888-481-3436', mapLocation: 'https://www.google.com/maps?q=Fido+stores+Calgary' },
        { name: 'Koodo', logo: koodoLogo, website: 'https://www.koodomobile.com', rating: 5.0, priceRange: 45, phone: '1-866-995-6636', mapLocation: 'https://www.google.com/maps?q=Koodo+stores+Calgary' },
    ];

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const sortedProviders = [...providers].sort((a, b) => {
        if (sortCriteria === 'priceLowToHigh') return a.priceRange - b.priceRange;
        if (sortCriteria === 'ratingHighToLow') return b.rating - a.rating;
        return 0;
    });

    const openProviderPopup = (url) => {
        window.open(url, 'ProviderPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    const openMapPopup = (providerName) => {
        window.open(providerName, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    return (
        <>
            <NavigationBar />
            <div className="InternetPhonePlanPage">
                <div className="header-container">
                    <h1>Internet and Cellular Providers</h1>
                    <div className="sort-container">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                            <option value="priceLowToHigh">Price</option>
                            <option value="ratingHighToLow">Rating</option>
                        </select>
                    </div>
                </div>

                <div className="providers-container">
                    {sortedProviders.map((provider, index) => (
                        <Card key={index} className="provider-card">
                            <Card.Body>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openProviderPopup(provider.website);
                                    }}
                                    className="provider-link"
                                    href={provider.website}
                                >
                                    <Card.Img variant="top" src={provider.logo} alt={`${provider.name} logo`} className="provider-logo" />
                                    <Card.Title>{provider.name}</Card.Title>
                                    <Card.Text>
                                        Price Range: ${provider.priceRange}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {provider.rating} ⭐
                                    </Card.Text>
                                    <Card.Text>
                                        Phone: {provider.phone}
                                    </Card.Text>
                                </a>
                                <div className="action-buttons">
                                    <Button variant="outline-primary" onClick={() => openMapPopup(provider.mapLocation)}>📍</Button>
                                    <Button variant="outline-secondary" onClick={() => openProviderPopup(provider.website)}>🔗</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default InternetPhonePlanPage;
