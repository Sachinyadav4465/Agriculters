import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-wrapper" id='footer'>
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <a href="#" className="footer-logo d-inline-flex align-items-center gap-2 mb-3 text-decoration-none">
              <FaLeaf style={{ color: '#82c139' }} /> <span>Terrain</span>
            </a>
            <p className="footer-desc mb-4" style={{ maxWidth: '320px' }}>
              Transforming outdoor spaces into stunning, sustainable landscapes that inspire and thrive with nature's pure essence.
            </p>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#" className="text-decoration-none">Landscape Design</a></li>
              <li><a href="#" className="text-decoration-none">Garden Installation</a></li>
              <li><a href="#" className="text-decoration-none">Lawn Maintenance</a></li>
              <li><a href="#" className="text-decoration-none">Eco Urban Care</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#" className="text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-decoration-none">Our Projects</a></li>
              <li><a href="#" className="text-decoration-none">Latest News</a></li>
              <li><a href="#" className="text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="footer-title">Get In Touch</h5>
            <p className="footer-desc mb-2 d-flex align-items-center gap-2">
              <FaMapMarkerAlt style={{ color: '#82c139' }} /> 123 Green Street, California, USA
            </p>
            <p className="footer-desc mb-3 d-flex align-items-center gap-2">
              <FaPhoneAlt style={{ color: '#82c139' }} /> 0701-8823-2018
            </p>
            
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center">
                <FaTwitter size={14} />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            &copy; 2026 Terrain Landscaping. All Rights Reserved.
          </div>
          <div className="d-flex gap-4">
            <a href="#" className="text-reset text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-reset text-decoration-none">Terms of Use</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}