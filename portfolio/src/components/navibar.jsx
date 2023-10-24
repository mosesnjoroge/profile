import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NaviBar(){

  return(
    <Navbar className='navbar-toggler' bg="light" expand="md" data-bs-theme="light">
      <Container>
        <Nav className="me-auto justify-content-between">
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
