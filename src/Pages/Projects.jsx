import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <Container>
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaLeaf style={{ color: '#82c139' }} />
            <span className="section-tag" style={{ color: '#82c139', letterSpacing: '1px' }}>From Concept To Creation</span>
          </div>
          <h2 className="section-title fs-1 mx-auto fw-bold" style={{ color: '#0f3823', maxWidth: '650px' }}>
            Discover The Art Of Landscaping Through Our Completed Projects
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '650px', fontSize: '14px' }}>
            Placerat habitasse diam feugiat elementum, suspendisse egestas eget. Proin ultrices diam curabitur donec leo, leo mus elementum proin, sit amet id facilisi orci magna.
          </p>
        </div>

        <Row className="g-4 align-items-center">
          <Col md={4}>
            <div className="project-card-custom project-tall-height">
              <img src="https://i.pinimg.com/1200x/90/33/00/90330068983ba8c2f34d8b5b956e43d3.jpg" alt="Residential Garden" />
              <div className="project-floating-label">
                Residential Garden<br />Makeover
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex flex-column gap-4">
            <div className="project-card-custom project-short-height">
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=500" alt="Commercial Landscaping" />
              <div className="project-floating-label">
                Commercial<br />Landscaping For Office<br />Complex
              </div>
            </div>
            
            <div className="project-card-custom project-short-height">
              <img src="https://i.pinimg.com/1200x/bd/7e/23/bd7e23b4615411b1f328ff4dee6c619d.jpg" alt="Urban Garden" />
              <div className="project-floating-label">
                Eco-Friendly Urban<br />Garden
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="project-card-custom project-tall-height">
              <img src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=500" alt="Luxury Landscape" />
              <div className="project-floating-label">
                Luxury Landscape<br />Design For Private<br />Estate
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}