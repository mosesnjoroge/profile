import { useState } from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavBar(){
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(click)

  const closeMenu = () => setClick(false)
  return(
    <div className='header'>
      <Container>
        <Nav className="navbar">
          {/* <div className='highlight' onClick={handleClick}>
            {click ? ({color: '#ffffff'}):
            ({color:"#FEA330"} )}

          </div> */}
          <ul className={click ?"nav-menu active":"nav-menu"}>
            <li className='nav-item'>
              <Link to="#projects" spy={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
            </li>
            <li className='nav-item'>
              <Link to="#banner" spy={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="#banner" spy={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </div>
  );
}
