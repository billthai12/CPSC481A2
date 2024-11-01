import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Dropdown, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';

const Resources = () => {
  // Sample data for resources with latitude and longitude
  const resourcesData = [
    { id: 1, name: 'Resource 1', categories: ['Employment'], details: 'Employment resource details', location: { lat: 40.7128, lon: -74.0060 } },
    { id: 2, name: 'Resource 2', categories: ['Food', 'Communities'], details: 'Food and community resource details', location: { lat: 40.7306, lon: -73.9352 } },
    { id: 3, name: 'Resource 3', categories: ['Housing'], details: 'Housing resource details', location: { lat: 40.7411, lon: -73.9897 } },
    // Add more resources as needed
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByProximity, setSortByProximity] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: 40.7306, lon: -73.9352 }); // Default location (e.g., New York)
  
  const categories = ['All', 'Employment', 'Finances', 'Childcare', 'Mental Health', 'Housing', 'Food', 'Communities', 'Other'];

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          return prev.filter((c) => c !== category);
        } else {
          return [...prev, category];
        }
      });
    }
  };

  // Toggle sorting by proximity
  const handleToggleProximity = () => {
    setSortByProximity((prev) => !prev);
  };

  // Calculate distance using Haversine formula
  const calculateDistance = (loc1, loc2) => {
    const R = 6371; // Radius of Earth in kilometers
    const dLat = ((loc2.lat - loc1.lat) * Math.PI) / 180;
    const dLon = ((loc2.lon - loc1.lon) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((loc1.lat * Math.PI) / 180) *
        Math.cos((loc2.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Filter and sort data based on selected categories and proximity
  const filteredResources = selectedCategories.length === 0
    ? resourcesData
    : resourcesData.filter((resource) =>
        resource.categories.some((cat) => selectedCategories.includes(cat))
      );

  const sortedResources = sortByProximity
    ? [...filteredResources].sort(
        (a, b) =>
          calculateDistance(userLocation, a.location) -
          calculateDistance(userLocation, b.location)
      )
    : filteredResources;

  return (
    <Container className="mt-4">
      <h2 className="text-center">Resources</h2>

      {/* Category Filter Buttons */}
      <ButtonGroup className="d-flex flex-wrap mb-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategories.includes(category) || (selectedCategories.length === 0 && category === 'All') ? 'primary' : 'secondary'}
            onClick={() => handleCategorySelect(category)}
            className="m-1"
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      {/* Sort by Proximity Toggle */}
      <Form.Check 
        type="switch"
        id="proximity-switch"
        label="Sort by Proximity"
        checked={sortByProximity}
        onChange={handleToggleProximity}
      />

      {/* Resource List */}
      <div className="resource-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <ListGroup>
          {sortedResources.map((resource) => (
            <ListGroup.Item key={resource.id} className="d-flex justify-content-between align-items-center">
              <span>{resource.name}</span>
              <Dropdown>
                <Dropdown.Toggle variant="light" size="sm">
                  ⌄
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item disabled>Details: {resource.details}</Dropdown.Item>
                  <Dropdown.Item onClick={() => alert(`Showing ${resource.name} on the map at location ${resource.location.lat}, ${resource.location.lon}`)}>
                    Show on Map
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Bottom Navigation Buttons */}
      {/*<Row className="mt-4 text-center">
        <Col>
          <Button variant="danger" size="lg">End</Button>
        </Col>
        <Col>
          <Button variant="primary" size="lg">Home</Button>
        </Col>
        <Col>
          <Button variant="secondary" size="lg">Back</Button>
        </Col>
      </Row>*/}
    </Container>
  );
};

export default Resources;
