import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaQuestion, FaLightbulb } from 'react-icons/fa';

export default function FAQ() {
  return (
    <div className="faq-wrapper">
      <Container>
        <Row className="g-5">

          <Col lg={7}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What services do you offer?</Accordion.Header>
                <Accordion.Body>
                  We offer a wide range of holistic gardening and landscaping services including custom landscape design, hardscaping, lawn maintenance, garden installation, and sustainable irrigation systems setup.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How long does a landscaping project take?</Accordion.Header>
                <Accordion.Body>
                  Project timelines depend on the size and complexity of the design. Small garden installations take 2-3 days, while major residential estate transformations can take 2-4 weeks.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do you offer maintenance services?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide seasonal or monthly care packages that include lawn pruning, soil treatment, weeding, and complete health checks for your plants.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can you work within my budget?</Accordion.Header>
                <Accordion.Body>
                  Absolutely. We can tailor material selections and implementation phases to best match your financial comfort while delivering premium quality.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={5}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <FaQuestion style={{ color: '#82c139' }} />
              <span className="section-tag">Faq</span>
            </div>
            <h2 className="section-title fs-1 fw-bold mb-4">
              Got Questions? We've Got Answers!
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
              Incase you have specific queries regarding architectural designs, cost evaluation metrics, or maintenance dependencies, feel free to review our answers or drop a note.
            </p>

            <div className="ask-question-box p-4 text-center">
              <div className="fs-3 mb-2 text-warning">
                <FaLightbulb />
              </div>
              <h6 className="fw-bold mb-1">Have Another Question?</h6>
              <p className="text-muted small mb-3">Drop your query and our team will get back within 24 hours.</p>
              <Button className="btn-dark-green w-100 rounded-3">Send Email</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}