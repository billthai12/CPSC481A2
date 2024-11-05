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

function HomePage2() {
  const navigate = useNavigate();
  localStorage.clear();

  return (
    <>
      <div className='HomePageTitle'>
        <Button className="BackButton" variant="danger" size="lg" onClick={() => navigate('/')}>
          Retour à la sélection de la langue
        </Button>
        <h1>Page d'accueil</h1>
      </div>

      <Container className="ChoicesContainer">
        {/* First Row with 5 Cards */}
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Checklist} />
              <Card.Body>
                <Card.Title>Liste de contrôle des tâches importantes</Card.Title>
                <Button variant="success" onClick={() => navigate('/checklist')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Map} />
              <Card.Body>
                <Card.Title>Voir la carte de Calgary</Card.Title>
                <Button variant="success" onClick={() => navigate('/')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Emergency} />
              <Card.Body>
                <Card.Title>Informations sur les services d'urgence</Card.Title>
                <Button variant="success" onClick={() => navigate('/emergencyservices')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Bank} />
              <Card.Body>
                <Card.Title>Informations bancaires</Card.Title>
                <Button variant="success" onClick={() => navigate('/banking')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Transportation} />
              <Card.Body>
                <Card.Title>Informations sur le transport</Card.Title>
                <Button variant="success" onClick={() => navigate('/transportation')}>Sélectionner</Button>
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
                <Card.Title>Informations Internet et cellulaires</Card.Title>
                <Button variant="success" onClick={() => navigate('/')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Government} />
              <Card.Body>
                <Card.Title>Informations sur les services gouvernementaux</Card.Title>
                <Button variant="success" onClick={() => navigate('/government-services')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Resources} />
              <Card.Body>
                <Card.Title>Resources</Card.Title>
                <Button variant="success" onClick={() => navigate('/resources')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Shopping} />
              <Card.Body>
                <Card.Title>Achats</Card.Title>
                <Button variant="success" onClick={() => navigate('/shopping')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage2;
