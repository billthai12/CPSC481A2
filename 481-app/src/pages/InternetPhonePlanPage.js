import React from 'react'; // Import React (keep this only once)
import { Button } from '@mui/material'; // Import Button from Material-UI
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap
import '../style/internetPhonePlan.css'; // Import your CSS file
import bellLogo from '../images/bell.png'; // Import logo images
import telusLogo from '../images/telus.png';
import rogersLogo from '../images/rogers.png';
import freedomLogo from '../images/freedom.png';
import fidoLogo from '../images/fido.png';
import koodoLogo from '../images/koodo.png';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer';
// Function to get price symbols based on price range
const getPriceSymbols = (priceRange) => {
    return priceRange; // Return the price range directly
};

// StarRating Component
const StarRating = ({ rating }) => {
    const filledStars = Math.round(rating); // Round the rating to the nearest star
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < filledStars ? 'filled' : 'empty'}>★</span>
            ))}
        </div>
    );
};

function InternetPhonePlanPage() {
    const providers = [
        { name: 'Bell', logo: bellLogo, website: 'https://www.bell.ca', rating: 4.5, priceRange: '$$$', phone: '1-800-668-6878' },
        { name: 'Telus', logo: telusLogo, website: 'https://www.telus.com', rating: 5.0, priceRange: '$$$$', phone: '1-866-558-2273' },
        { name: 'Rogers', logo: rogersLogo, website: 'https://www.rogers.com', rating: 3.5, priceRange: '$$', phone: '1-888-764-3771' },
        { name: 'Freedom Mobile', logo: freedomLogo, website: 'https://www.freedommobile.ca', rating: 4.0, priceRange: '$', phone: '1-877-946-3184' },
        { name: 'Fido', logo: fidoLogo, website: 'https://www.fido.ca', rating: 4.0, priceRange: '$$', phone: '1-888-481-3436' },
        { name: 'Koodo', logo: koodoLogo, website: 'https://www.koodomobile.com', rating: 5.0, priceRange: '$$', phone: '1-866-995-6636' },
    ];

    return (
        <div>
            <Header />
            <h1>Internet and Phone Plans</h1>
            <p>Information about internet and phone plans offered in Calgary.</p>

            <div className="plans-container">
                {providers.map((provider, index) => (
                    <a 
                        key={index} 
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            window.open(provider.website, 'ProviderPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
                        }} 
                        className="provider-link" 
                        href={provider.website}
                        style={{ textDecoration: 'none' }} // Prevent underline on the link
                    >
                        <Card className="provider-card">
                            <Card.Body>
                                <Card.Img variant="top" src={provider.logo} alt={`${provider.name} logo`} className="provider-logo" />
                                <Card.Title>{provider.name}</Card.Title>
                                <div className="provider-phone">Phone #: {provider.phone}</div>
                                <StarRating rating={provider.rating} />
                                <div className="price-range">{getPriceSymbols(provider.priceRange)}</div>
                            </Card.Body>
                        </Card>
                    </a>
                ))}
            </div>
                        <Footer /> {/* Use the new Footer component here */}

        </div>
    );
}

export default InternetPhonePlanPage;
