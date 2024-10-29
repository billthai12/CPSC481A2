import React, { useState } from 'react';
import {Button, ButtonGroup, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/map.css'; 
// import myLocationImage from '../images/myLocation.png';
// import hotelImage from '../images/hotel.png';
// import attractionImage from '../images/attraction.png';
// import groceryImage from '../images/grocery.png';
// import libraryImage from '../images/library.png';
// import communityCenterImage from '../images/communityCenter.png';

function Map() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentContent, setCurrentContent] = useState('');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // const categoryImages = {
    //     'My Location': myLocationImage,
    //     'Hotels': hotelImage,
    //     'Attractions': attractionImage,
    //     'Grocery': groceryImage,
    //     'Library': libraryImage,
    //     'Community Centers': communityCenterImage,
    // };

    const handleShow = (content) => {
        setCurrentContent(content);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentContent('');
    };

    return (
        <div className="Map">
            <h1>Map</h1>
            <br />
            <p>
                <Button 
                    className="button" 
                    onClick={() => handleShow()}
                >
                    Map Instructions
                </Button>

                <Button 
                    className="button" 
                    onClick={() => navigate("/transportation")}
                >
                    Transportation Info Page
                </Button>
            </p>

            <p>
                <Button 
                        className={`button ${selectedCategory === 'My Location' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('My Location')} 
                    >
                        My Location
                </Button>
            </p>

            <ButtonGroup className="category-buttons">
                <Button 
                    className={`button ${selectedCategory === 'Hotels' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick('Hotels')} 
                    variant="outline-primary"
                >
                    Hotels
                </Button>

                <Button 
                    className={`button ${selectedCategory === 'Attractions' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick('Attractions')} 
                    variant="outline-primary"
                >
                    Attractions
                </Button>

                <Button 
                    className={`button ${selectedCategory === 'Grocery' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick('Grocery')} 
                    variant="outline-primary"
                >
                    Grocery
                </Button>

                <Button 
                    className={`button ${selectedCategory === 'Library' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick('Library')} 
                    variant="outline-primary"
                >
                    Library
                </Button>
                
                <Button 
                    className={`button ${selectedCategory === 'Community Centers' ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick('Community Centers')} 
                    variant="outline-primary"
                >
                    Community Centers
                </Button>
            </ButtonGroup>

            <div className="map-container">
                {/* {selectedCategory ? (
                    <img
                        src={categoryImages[selectedCategory]}
                        alt={`${selectedCategory} Map`}
                        className="map-image"
                    />
                ) : (
                    <h5>You Are Here</h5>
                )} */}
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Map Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>How to use the map:</b></p>
                    <p>1. Select your desired category of places you would like to view on the map.</p>
                    <p>2. View the nearest places (of the category you selected) according to your current location.</p>
                    <p>3. Find out how to get there by pressing the 'Transportation Info Page'.</p>
                </Modal.Body>
            </Modal>
      </div>
    );
}

export default Map;
