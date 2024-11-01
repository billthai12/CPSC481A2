import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto d-flex justify-content-center w-100">
            <Nav.Link href="/" className="mx-3 fw-bold">End</Nav.Link>
            <Nav.Link href="/home" className="mx-4 fw-bold">Home</Nav.Link>
            <Nav.Link href="/home" className="mx-3 fw-bold">Back</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
