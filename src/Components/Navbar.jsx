import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/logo.gif';
function Navbarcustom(){
    return (
    <Navbar expand="lg" className="bg-body-tertiary" id='header'>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Experience" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Work Experience</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Acadamics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbarcustom;