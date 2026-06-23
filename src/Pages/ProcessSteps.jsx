import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

export default function ProcessSteps() {
  return (
    <div className="process-wrapper">
      <Container>
   
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-2">
            <FaCog style={{ color: '#82c139' }} />
            <span className="section-tag">How It Works</span>
          </div>
          <h2 className="fw-bold fs-1">
            Creating Stunning Landscapes In<br />
            Just A Few <span>Simple Steps</span>
          </h2>
        </div>
        <Row className="g-4">
   
          <Col sm={6} lg={3}>
            <div className="step-number-circle">1</div>
            <h5 className="step-title">Consultation & Planning</h5>
            <p className="step-desc">
              We start by understanding your vision and budget requirements. Our team creates a customized blueprint.
            </p>
          </Col>

          <Col sm={6} lg={3}>
            <div className="step-number-circle">2</div>
            <h5 className="step-title">Design & Approval</h5>
            <p className="step-desc">
              Our expert designers sketch options for materials, plants, and structural setups for your review.
            </p>
          </Col>

          <Col sm={6} lg={3}>
            <div className="step-number-circle">3</div>
            <h5 className="step-title">Execution & Planting</h5>
            <p className="step-desc">
              Our professional landscapers bring the blueprints to life with high-quality work and attention to details.
            </p>
          </Col>

          <Col sm={6} lg={3}>
            <div className="step-number-circle">4</div>
            <h5 className="step-title">Completion & Care</h5>
            <p className="step-desc">
              To keep your landscape beautiful, we provide maintenance guides and regular checkup schedules.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}