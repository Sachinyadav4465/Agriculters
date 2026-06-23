import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSeedling } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="services-wrapper" id='services'>
      <Container>
        <Row className="mb-5 align-items-center">
          <Col lg={6}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <FaSeedling style={{ color: '#82c139' }} />
              <span className="section-tag">Our Popular Services</span>
            </div>
            <h2 className="section-title fs-1 fw-bold">
              Quality Landscaping Services To Enhance Your Outdoor Living
            </h2>
          </Col>
          <Col lg={6} className="mt-3 mt-lg-0">
            <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.7' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Integrity in every design plan we commit to executing.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <div className="service-card-custom">
              <img src="https://i.pinimg.com/1200x/96/9a/73/969a737130a2b2a1e644fe1fdf44b08e.jpg" alt="Landscape Design" />
              <div className="service-card-overlay">
                <h5 className="service-card-title">Landscape Design & Planning</h5>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="service-card-custom">
              <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=500" alt="Garden Installation" />
              <div className="service-card-overlay">
                <h5 className="service-card-title">Garden Installation & Planting</h5>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="service-card-custom">
              <img src="https://i.pinimg.com/736x/9f/b7/c0/9fb7c04751ecd73de03421f4b40fd32d.jpg" alt="Lawn Care" />
              <div className="service-card-overlay">
                <h5 className="service-card-title">Lawn Care & Maintenance</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}