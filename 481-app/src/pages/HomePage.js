import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Card from 'react-bootstrap/Card';
import Checklist from '../images/checklist.png';
import Bank from '../images/bank.png';
import Internet from '../images/internet.png';
import Map from '../images/map.png';
import Transportation from '../images/transportation.png';
import Government from '../images/government.png';
import Emergency from '../images/emergency.png';
import Resources from '../images/resources.png';
import Shopping from '../images/shopping.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  const navigate = useNavigate();
  localStorage.clear();

  return (
    <>
      <div className='HomePageTitle'>
        <Button className="BackButton" variant="danger" size="lg" onClick={() => navigate('/')}>Back to Language Select</Button>
        <h1>Home Page</h1>
      </div>

      <Container className="ChoicesContainer">
        {/* First Row with 5 Cards */}
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Checklist} />
              <Card.Body>
                <Card.Title>Newcomer's To-Do List</Card.Title>
                <Button variant="success" onClick={() => navigate('/checklist')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Map} />
              <Card.Body>
                <Card.Title>View Map of Calgary</Card.Title>
                <Button variant="success" onClick={() => navigate('/map')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Emergency} />
              <Card.Body>
                <Card.Title>Emergency Services Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/emergencyservices')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Bank} />
              <Card.Body>
                <Card.Title>Banking Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/banking')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Transportation} />
              <Card.Body>
                <Card.Title>Transportation Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/transportation')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row with 4 Cards and added spacing */}
        <Row className="g-4 justify-content-center my-1">
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Internet} />
              <Card.Body>
                <Card.Title>Internet and Cellular Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/internet')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Government} />
              <Card.Body>
                <Card.Title>Government Services Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/government-services')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Resources} />
              <Card.Body>
                <Card.Title>Resources</Card.Title>
                <Button variant="success" onClick={() => navigate('/resources')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Shopping} />
              <Card.Body>
                <Card.Title>Shopping</Card.Title>
                <Button variant="success" onClick={() => navigate('/shopping')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
