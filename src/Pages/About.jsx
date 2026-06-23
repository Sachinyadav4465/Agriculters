import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaPenNib } from 'react-icons/fa';

export default function About() {
  return (
    <Container className="py-5 my-5" id='about'>
      <Row className="align-items-center">
        <Col lg={6} className="pe-lg-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaPenNib style={{ color: '#82c139' }} />
            <span className="section-tag">Designing Green Spaces</span>
          </div>
          <h2 className="section-title mb-4 fs-1">
            We Are Dedicated To Transforming Outdoor Spaces Into Stunning, Sustainable Landscapes That Inspire And Thrive
          </h2>
          <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
            Placerat habitasse diam feugiat elementum, suspendisse egestas eget. Proin ultrices diam curabitur donec leo, leo mus elementum proin, sit amet id facilisi orci magna.
          </p>
          <Button className="btn-dark-green px-4 py-2.5 rounded-3">
            Read More
          </Button>
        </Col>

        <Col lg={6} className="mt-5 mt-lg-0">
          <Row className="g-4">
            <Col sm={6}>
              <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400" className="about-card-img" />
                <Card.Body className="p-4">
                  <h5 className="fw-bold fs-6" style={{ color: '#0f3823' }}>Expert Design & Custom Solutions</h5>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden card-yellow-theme">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400" className="about-card-img" />
                <Card.Body className="p-4">
                  <h5 className="fw-bold fs-6 text-dark">Sustainable Practices & Eco-Friendly</h5>
                  <p className="text-dark-50 small mb-0">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}