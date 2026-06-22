import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <div className="testimonial-wrapper">
      <Row className="g-0 align-items-stretch">
        <Col lg={6} className="testimonial-left-block d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaStar style={{ color: '#82c139' }} />
            <span className="section-tag" style={{ color: '#82c139' }}>Testimonials</span>
          </div>
          <h2 className="fw-bold mb-4 fs-1">
            Hear From Our<br />Satisfied Customers
          </h2>
          <p className="fs-5 lh-base mb-4" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '480px', fontStyle: 'italic' }}>
            "Terrain transformed our completely messy and unmanaged backyard into an absolute paradise. The workflow execution was highly flawless and completely eco-friendly."
          </p>
          
          <div className="d-flex align-items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" 
              alt="Client" 
              className="testimonial-avatar"
            />
            <div>
              <h6 className="fw-bold mb-0 text-white">Sarah M.</h6>
              <small style={{ color: '#82c139' }}>Homeowner, California</small>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600" 
            alt="Beautiful garden pots" 
            className="testimonial-right-img"
          />
        </Col>
      </Row>
    </div>
  );
}