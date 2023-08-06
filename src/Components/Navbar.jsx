import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/logo.gif';
// import './Navbar.css'; // Import the custom CSS file for the navbar

function Navbarcustom() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = {
    color: 'black',
  };

  const dropdownStyle = {
    backgroundColor: '#E6F7FF', // Set the background color for the dropdown
  };

  const navbarStyle = {
    boxShadow: scrolling ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow when scrolling
  };

  return (
    <Navbar
      expand="lg"
      className={scrolling ? 'navbar-scrolling' : ''}
      style={navbarStyle}
      collapseOnSelect // Add this prop to automatically close the navbar on select
      id='header'
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            roundedCircle
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link style={textColor} className="navitem" href="#home">Home</Nav.Link>
            <Nav.Link style={textColor} className="navitem" href="#about">About</Nav.Link>
            <NavDropdown
              title="Experience"
              id="basic-nav-dropdown" href="#experience"
              style={textColor} // Apply the dropdownStyle to the NavDropdown
            >
              <NavDropdown.Item style={textColor} className="navitem" href="#experience">Work Experience</NavDropdown.Item>
              <NavDropdown.Item style={textColor} className="navitem" href="#projects">Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={textColor} className="navitem" href="#academics">Education</Nav.Link>
            <Nav.Link style={textColor} className="navitem" href="#skills">Skills</Nav.Link>
            <Nav.Link style={textColor} className="navitem" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcustom;
