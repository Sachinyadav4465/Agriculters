import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLeaf, FaPhoneAlt, FaUser } from 'react-icons/fa'; 

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-logo">
          <span><FaLeaf /></span> Terrain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" className="border-0 bg-light" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto text-center">
            <Nav.Link href="/" className="custom-nav-link active">Homepage</Nav.Link>
            <Nav.Link href="/aboutus" className="custom-nav-link">About Us</Nav.Link>
            <Nav.Link href="/services" className="custom-nav-link">Services</Nav.Link>
            {/* <Nav.Link href="#" className="custom-nav-link">Pages</Nav.Link> */}
            <Nav.Link href="/contact" className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>
         
          <div className="d-flex align-items-center justify-content-center gap-4 mt-3 mt-lg-0">
         
            <div className="d-flex align-items-center">
              <div className="nav-phone-icon rounded-circle d-flex align-items-center justify-content-center me-2 text-dark">
                <FaPhoneAlt size={14} />
              </div>
              <div className="text-start">
                <small className="d-block text-white-50" style={{ fontSize: '12px' }}>Call Us Anytime</small>
                <a href="tel:070188232018" className="text-white fw-bold text-decoration-none">0701-8823-2018</a>
              </div>
            </div>

            <a 
              href="/login" 
              className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle transition-all"
              style={{ 
                width: '38px', 
                height: '38px', 
                backgroundColor: ' rgba(255, 255, 255, 0.1)', 
                color: '#ffffff'
              }}
              title="Login / Signup"
            >
              <FaUser size={15} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}