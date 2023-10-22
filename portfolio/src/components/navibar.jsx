import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NaviBar(){

  return(
    <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Moses Njoroge</Navbar.Brand>
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="#features">Case Studies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
