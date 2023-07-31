import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/logo.gif';

function Navbarcustom(){
    const textColor = {
        color:"black"
    }
    return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom" id='header'>
      <Container>
        <Navbar.Brand href="#home">
        <Image
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" roundedCircle
            />
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link style = {textColor} href="#home">Home</Nav.Link>
            <Nav.Link style = {textColor} href="#about">About</Nav.Link>
            <NavDropdown style = {textColor} title="Experience" id="basic-nav-dropdown">
              <NavDropdown.Item style = {textColor} href="#experience">Work Experience</NavDropdown.Item>
              <NavDropdown.Item style = {textColor} href="#acadamics">
                Acadamics
              </NavDropdown.Item>
              <NavDropdown.Item style = {textColor} href="#projects">Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style = {textColor} href="#skills">Skills</Nav.Link>
            <Nav.Link style = {textColor} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbarcustom;