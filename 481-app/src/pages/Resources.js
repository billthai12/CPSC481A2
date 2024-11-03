import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import '../style/resources.css'; 
import '../style/transportation.css'; 
import ImmigrantServicesCalgaryQR from '../images/resources-images/immigrantservicescalgaryQR.png';
import NavigationBar from '../components/NavigationBar';


function Resources() {
    const [sortCriteria, setSortCriteria] = useState('none');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [selectedCategories, setSelectedCategories] = useState(new Set()); 
    const [currentLocation, setCurrentLocation] = useState(null); // Store the kiosk's current location

    const accordionItems = [
      { 
          title: 'Immigrant Services Calgary', 
          eventKey: '1', 
          categories: ['Employment', 'Communities', 'Childcare', 'Other'], 
          relevancy: { 'Employment': 5, 'Communities': 3, 'Childcare': 2, 'Other': 3 }, 
          location: { lat: 51.047319552154356, lon: -114.08203417196579 } 
      },
      { 
          title: 'Calgary Public Library', 
          eventKey: '0', 
          categories: ['Employment', 'Finances', 'Other'], 
          relevancy: { 'Employment': 2, 'Finances': 2, 'Other': 5 }, 
          location: { lat: 51.0499, lon: -114.0718 }//there are multiple locations
      },
      { 
          title: "Calgary Immigrant Women's Association", 
          eventKey: '2', 
          categories: ['Employment', 'Housing', 'Childcare', 'Mental Health'], 
          relevancy: { 'Employment': 4, 'Housing': 4, 'Childcare': 4, 'Mental Health': 4 }, 
          location: { lat: 51.049541664802106, lon: -114.06064574442266 } 
      },
      { 
          title: 'Calgary Food Bank', 
          eventKey: '3', 
          categories: ['Food'], 
          relevancy: { 'Food': 5 }, 
          location: { lat: 51.00968981939483, lon: -114.03606763136762} 
      },
      { 
          title: 'Centre for Newcomers', 
          eventKey: '4', 
          categories: ['Employment', 'Childcare', 'Mental Health', 'Communities'], 
          relevancy: { 'Employment': 4, 'Childcare': 4, 'Mental Health': 5, 'Communities': 4}, 
          location: { lat: 51.0564432534392, lon: -113.983542560201} 
      },
    ];
  

    useEffect(() => {
        // Get user's current location on load
        //navigator.geolocation.getCurrentPosition(
            //(position) => {
                setCurrentLocation({
                    //lat: position.coords.latitude,
                    //lon: position.coords.longitude,
                    lat: 51.044313574830255,//default location (calgary tower)
                    lon: -114.06309093347211,
                });
            //},
            //(error) => console.error("Error fetching location:", error),
            //{ enableHighAccuracy: true }
        //);
    }, []);

    // Function to calculate distance between two locations
    const calculateDistance = (loc1, loc2) => {
      if (!loc1 || !loc2 || loc1.lat === undefined || loc1.lon === undefined || loc2.lat === undefined || loc2.lon === undefined) {
          return Infinity; // Return a large distance if any location data is missing
      }
  
      const R = 6371; // Radius of the Earth in km
      const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
      const dLon = (loc2.lon - loc1.lon) * (Math.PI / 180);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(loc1.lat * (Math.PI / 180)) *
          Math.cos(loc2.lat * (Math.PI / 180)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    // Sort items by proximity or relevancy
    const sortAccordionItems = (items) => {
      if (sortCriteria === 'proximity') {
        return [...items].sort((a, b) => calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location));
      } else if (sortCriteria === 'relevancy') {
        return [...items].sort((a, b) => {
          let relevancyA, relevancyB;
    
          // Determine the relevancy to use
          if (selectedCategories.size === 0) {  // If "All" is selected (size is 0)
            relevancyA = Math.max(...Object.values(a.relevancy));
            relevancyB = Math.max(...Object.values(b.relevancy));
          } else { // Otherwise, calculate relevancy based on selected categories
            relevancyA = Math.max(...[...selectedCategories].map(cat => a.relevancy[cat] || 0));
            relevancyB = Math.max(...[...selectedCategories].map(cat => b.relevancy[cat] || 0));
          }
    
          // Sort primarily by relevancy
          if (relevancyA !== relevancyB) {
            return relevancyB - relevancyA;
          }
    
          // If relevancy is the same, sort by proximity
          return calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location);
        });
      }
      return [...items]; // Default sort if needed
    };
    

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const toggleCategory = (category) => {
      setSelectedCategories((prevCategories) => {
          const newCategories = new Set(prevCategories);
  
          if (category === "") { // If "All" is selected
              newCategories.clear(); // Clear any selected categories
          } else {
              // Toggle the selected category
              if (newCategories.has(category)) {
                  newCategories.delete(category);
              } else {
                  newCategories.add(category);
              }
          }
  
          // If no categories are selected, show "All"
          if (newCategories.size === 0) {
              return new Set(); // Return empty set to show "All" results
          }
  
          return newCategories;
      });
    };

    const filteredAndSortedItems = sortAccordionItems(
      accordionItems.filter(item =>
          selectedCategories.size === 0 || 
          item.categories.some(category => selectedCategories.has(category))
      )
    );

    const openWebsite = (url) => {
      window.open(url, '_blank', "width=800,height=600")
    };

    const openMapPopup = (destLat, destLon) => {
      if (currentLocation) {
          const { lat, lon } = currentLocation;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLon}&origin=${lat},${lon}`;
          window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
      } else {
          alert('Current location is not available. Please try again later.');
      }
    };
  

    return (
        <>
        <NavigationBar />
        <div className="Resources">
            <h1>Resources</h1>
            {/* Category Filter Buttons */}
            <div className="filter-buttons">
                {['All', 'Employment', 'Finances', 'Housing', 'Food', 'Childcare', 'Communities', 'Mental Health', 'Other'].map(category => (
                    <Button
                      key={category}
                      variant={
                          (category === "All" && selectedCategories.size === 0) || 
                          selectedCategories.has(category)
                              ? 'primary'
                              : 'outline-primary'
                      }
                      onClick={() => toggleCategory(category === "All" ? "" : category)}
                      style={{
                          backgroundColor: (category === "All" && selectedCategories.size === 0) || selectedCategories.has(category) ? 'black' : '#808080',
                          color: 'white',
                          border: '1px solid black', // black outline
                          margin: '5px' // add spacing between buttons
                      }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))}
            </div>


            {/* Sort Selector */}
            <div className="sort-container">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="none">None</option>
                    <option value="proximity">Proximity</option>
                    <option value="relevancy">Relevancy</option>
                </select>
            </div>

            {/* Accordion Container */}
            <div className="accordion-container">
                <Accordion defaultActiveKey={null}>
                    {filteredAndSortedItems.map(item => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Immigrant Services Calgary' && (
                                  <>
                                    <p>Immigrant Services Calgary offers a range of services to support people who are settling into a new life in Canada, including: job support, translation, English testing, and help for families.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => openWebsite("https://www.immigrantservicescalgary.ca/")}>Open Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(ImmigrantServicesCalgaryQR)}>Website QR Code</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup(item.location.lat, item.location.lon)}>📍</Button></p>
                                  </>
                                )}
                                {item.title === 'Calgary Public Library' && (
                                    <p>details and links</p>
                                )}
                                {item.title === "Calgary Immigrant Women's Association" && (
                                    <p>details and links</p>
                                )}
                                {item.title === 'Calgary Food Bank' && (
                                    <p>details and links</p>
                                )}
                                {item.title === 'Centre for Newcomers' && (
                                    <p>details and links</p>
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
        </>
    );
}

export default Resources;
