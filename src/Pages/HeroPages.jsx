import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6} className="text-white text-center text-lg-start">
            <h1 className="hero-title mb-4">
              Bringing <span>Nature's</span><br />
              Beauty To Your<br />
              Backyard
            </h1>
            <p className="text-white-50 mb-4 fs-5" style={{ maxWidth: '480px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button className="btn-lime shadow-sm">
              Let's Get Started ➔
            </Button>
          </Col>

          <Col lg={6} className="mt-5 mt-lg-0 d-flex justify-content-center">
            <div className="hero-img-container">
              <img 
                src="https://i.pinimg.com/1200x/90/33/00/90330068983ba8c2f34d8b5b956e43d3.jpg" 
                alt="Gardener" 
                className="img-fluid rounded-4 shadow hero-img"
              />
              <div className="floating-mission-card p-4 rounded-4 shadow">
                <h5 className="fw-bold text-dark mb-2">Our Mission</h5>
                <p className="text-muted small mb-3">
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <a href="#" className="text-success fw-bold text-decoration-none small d-flex align-items-center">
                  Read More <span className="ms-1">➔</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}