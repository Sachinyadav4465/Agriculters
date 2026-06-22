import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLeaf, FaPhoneAlt } from 'react-icons/fa';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand-logo">
          <span><FaLeaf /></span> Terrain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" className="border-0 bg-light" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#" className="custom-nav-link active">Homepage</Nav.Link>
            <Nav.Link href="#" className="custom-nav-link">About Us</Nav.Link>
            <Nav.Link href="#" className="custom-nav-link">Services</Nav.Link>
            <Nav.Link href="#" className="custom-nav-link">Pages</Nav.Link>
            <Nav.Link href="#" className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
            <div className="nav-phone-icon rounded-circle d-flex align-items-center justify-content-center me-2 text-dark">
              <FaPhoneAlt size={14} />
            </div>
            <div className="text-start">
              <small className="d-block text-white-50" style={{ fontSize: '12px' }}>Call Us Anytime</small>
              <a href="tel:070188232018" className="text-white fw-bold text-decoration-none">0701-8823-2018</a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}