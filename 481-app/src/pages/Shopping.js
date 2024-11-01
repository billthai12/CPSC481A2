import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Dropdown, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';

const Shopping = () => {
  
  const storesData = [
    { id: 1, name: 'Store 1', categories: ['Apparel'], details: 'Store 1', price: '$'},
    { id: 2, name: 'Store 2', categories: ['Food', 'Furniture'], details: 'Store 2', price: '$$' },
    { id: 3, name: 'Store 3', categories: ['Appliances'], details: 'Store 3', price: '$$$'},

  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(false);
  //const [sortByProximity, setSortByProximity] = useState(false);
  //const [userLocation, setUserLocation] = useState({ lat: 40.7306, lon: -73.9352 }); // Default location (e.g., New York)
  
  const categories = ['All', 'Food', 'Apparel', 'Furniture', 'Hardware', 'Appliances', 'Other'];

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
  const handleTogglePrice = () => {
    setSortByPrice((prev) => !prev);
  };


  // Filter and sort data based on selected categories and price
  const filteredStores = selectedCategories.length === 0
    ? storesData
    : storesData.filter((store) =>
        store.categories.some((cat) => selectedCategories.includes(cat))
      );

  const sortedStores = sortByPrice
    ? [...filteredStores].sort(
        (a, b) =>
          a.price.localeCompare(b.price)
      )
    : filteredStores;

  return (
    <Container className="mt-4">
      <h2 className="text-center">Shopping</h2>

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

      {/* Sort by Price Toggle */}
      <Form.Check 
        type="switch"
        id="proximity-switch"
        label="Sort by Prices"
        checked={sortByPrice}
        onChange={handleTogglePrice}
      />

      {/* Resource List */}
      <div className="store-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <ListGroup>
          {sortedStores.map((store) => (
            <ListGroup.Item key={store.id} className="d-flex justify-content-between align-items-center">
              <span>{store.name}</span>
              <Dropdown>
                <Dropdown.Toggle variant="light" size="sm">
                  ⌄
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item disabled>Details: {store.details}</Dropdown.Item>
                  <Dropdown.Item onClick={() => alert(`Showing ${store.name} on the map at location ${store.location.lat}, ${store.location.lon}`)}>
                    Show on Map
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Bottom Navigation Buttons */}
    {/*  <Row className="mt-4 text-center">
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

export default Shopping;
