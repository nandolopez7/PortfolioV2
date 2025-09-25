import React from 'react';
import { Nav, Navbar as BSNavbar, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="modern-navbar fixed-top">
      <Container>
        <BSNavbar.Brand href="#home">Hernando Lopez</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about">Bio</Nav.Link>
            <Nav.Link href="#experience">Background</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact me</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;