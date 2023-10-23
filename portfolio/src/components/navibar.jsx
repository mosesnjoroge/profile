import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap/Nav';

export default function NaviBar(){

  return(
    <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Moses Njoroge</Navbar.Brand>
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="#features">Case Studies</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
