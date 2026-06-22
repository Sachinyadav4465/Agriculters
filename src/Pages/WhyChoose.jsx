import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaThumbtack, FaTree, FaLeaf, FaArrowRight } from 'react-icons/fa';

export default function Features() {
  return (
    <Container className="py-5 my-5">
      <Row className="align-items-center">
        <Col lg={6} className="pe-lg-5">
          <div className="d-flex align-items-center gap-2 mb-2">
            <FaThumbtack style={{ color: '#82c139' }} />
            <span className="section-tag">Why Choose Us?</span>
          </div>
          <h2 className="section-title mb-4 fs-1">
            Transforming Your Outdoors With Creativity And Care
          </h2>
          <p className="text-muted mb-4">
            Integer varius omare commodo. Aenean hendrerit finibus diam. Proin ac eros ac mi.
          </p>

          <Row className="mb-4 g-4">
            <Col sm={6}>
              <div className="d-flex align-items-start gap-3">
                <div className="feature-icon-box" style={{ color: '#82c139' }}>
                  <FaTree size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Expertise & Experience</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-flex align-items-start gap-3">
                <div className="feature-icon-box" style={{ color: '#82c139' }}>
                  <FaLeaf size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Quality & Reliability</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </Col>
          </Row>

          <Button className="btn-dark-green px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2">
            Schedule A Consultation! <FaArrowRight size={14} />
          </Button>
        </Col>

        <Col lg={6} className="mt-5 mt-lg-0 d-flex justify-content-center position-relative">
          <div style={{ width: '85%', position: 'relative' }}>
            <div className="experience-badge p-3 rounded-4 shadow d-flex align-items-center gap-3">
              <span className="experience-num">10+</span>
              <span className="text-muted fw-semibold small lh-sm">Years Of<br />Experience</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=500" 
              alt="Gardener" 
              className="img-fluid rounded-4 shadow-sm feature-main-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}