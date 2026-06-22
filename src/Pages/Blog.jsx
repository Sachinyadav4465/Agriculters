import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegNewspaper, FaRegCalendarAlt, FaRegComment, FaArrowRight } from 'react-icons/fa';

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <Container>
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaRegNewspaper style={{ color: '#82c139' }} />
            <span className="section-tag">News & Articles</span>
          </div>
          <h2 className="section-title fs-1 fw-bold">
            Your Ultimate Guide To<br />Gardening & Outdoor Beauty
          </h2>
        </div>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="blog-main-card h-100">
              <img src="https://i.pinimg.com/1200x/48/75/f6/4875f65d06c372a381194f91760270a1.jpg" alt="Gardener" className="blog-main-img" />
              <Card.Body className="p-4">
                <div className="blog-meta d-flex gap-3 mb-2">
                  <span className="d-inline-flex align-items-center gap-1"><FaRegCalendarAlt /> Jan 12, 2026</span>
                  <span className="d-inline-flex align-items-center gap-1"><FaRegComment /> 3 Comments</span>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#0f3823' }}>Simple Gardening Tips For Beginners</h4>
                <p className="text-muted small mb-4">
                  Starting your first garden plan doesn't have to be complex or overly expensive. Discover basic structural setups, watering rules, and soil preparation workflows to kickstart your green space properly.
                </p>
                <a href="#" className="btn-blog-link d-inline-flex align-items-center gap-1">
                  Learn More <FaArrowRight size={12} />
                </a>
              </Card.Body>
            </Card>
          </Col>

        
          <Col lg={6} className="d-flex flex-column justify-content-between gap-3">
            

            <div className="blog-mini-card">
              <div>
                <div className="blog-meta d-flex gap-3 mb-2">
                  <span className="d-inline-flex align-items-center gap-1"><FaRegCalendarAlt /> Jan 10, 2026</span>
                  <span className="d-inline-flex align-items-center gap-1"><FaRegComment /> 0 Comments</span>
                </div>
                <h5 className="fw-bold mb-2 h6" style={{ color: '#0f3823', fontSize: '1.05rem' }}>How To Design A Beautiful Garden Landscape</h5>
                <p className="text-muted small mb-2">Professional layout guidelines to make elements visually appealing and sustainable.</p>
                <a href="#" className="btn-blog-link d-inline-flex align-items-center gap-1">
                  Learn More <FaArrowRight size={12} />
                </a>
              </div>
            </div>
            <div className="blog-mini-card">
              <div>
                <div className="blog-meta d-flex gap-3 mb-2">
                  <span className="d-inline-flex align-items-center gap-1"><FaRegCalendarAlt /> Jan 08, 2026</span>
                  <span className="d-inline-flex align-items-center gap-1"><FaRegComment /> 2 Comments</span>
                </div>
                <h5 className="fw-bold mb-2 h6" style={{ color: '#0f3823', fontSize: '1.05rem' }}>Top 5 Plants For Low-Maintenance Gardens</h5>
                <p className="text-muted small mb-2">Beautiful selections that thrive perfectly even with highly limited watering cycles.</p>
                <a href="#" className="btn-blog-link d-inline-flex align-items-center gap-1">
                  Learn More <FaArrowRight size={12} />
                </a>
              </div>
            </div>
            <div className="blog-mini-card">
              <div>
                <div className="blog-meta d-flex gap-3 mb-2">
                  <span className="d-inline-flex align-items-center gap-1"><FaRegCalendarAlt /> Jan 05, 2026</span>
                  <span className="d-inline-flex align-items-center gap-1"><FaRegComment /> 5 Comments</span>
                </div>
                <h5 className="fw-bold mb-2 h6" style={{ color: '#0f3823', fontSize: '1.05rem' }}>Sustainable Landscaping Ideas For Your Home</h5>
                <p className="text-muted small mb-2">How to efficiently conserve dynamic water grids using modern stone integrations.</p>
                <a href="#" className="btn-blog-link d-inline-flex align-items-center gap-1">
                  Learn More <FaArrowRight size={12} />
                </a>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}