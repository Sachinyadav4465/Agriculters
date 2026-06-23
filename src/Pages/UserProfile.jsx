import React from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { FaUser, FaSeedling, FaHistory, FaMapMarkerAlt, FaPhone, FaEnvelope, FaSave } from 'react-icons/fa';
 

export default function UserProfile() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', fontFamily: 'sans-serif', minHeight: '100vh' }} className="py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <span style={{ color: '#c49a45', fontStyle: 'italic', fontWeight: '600' }}>Farmer Dashboard</span>
            <h2 className="fw-bold" style={{ color: '#0f2c16' }}>My Profile</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="border-0 shadow-sm p-4 text-center profile-sidebar-card">
              <Card.Body>
                <div className="position-relative d-inline-block mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" 
                    alt="Farmer Profile" 
                    className="rounded-circle profile-avatar-main shadow-sm"
                  />
                </div>
                <h4 className="fw-bold mb-1" style={{ color: '#0f2c16' }}>Sukhwinder Singh</h4>
                <div className="mb-4">
                  <span className="farm-status-badge">Verified Premium Member</span>
                </div>

                <hr className="text-muted opacity-25" />
                <div className="d-flex flex-column gap-2 text-start mt-3">
                  <a href="#account" className="nav-profile-link active">
                    <FaUser /> <span>Account Details</span>
                  </a>
                  <a href="#my-farms" className="nav-profile-link">
                    <FaSeedling /> <span>My Land & Crops</span>
                  </a>
                  <a href="#orders" className="nav-profile-link">
                    <FaHistory /> <span>Order History</span>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="border-0 shadow-sm p-4 rounded-4 bg-white">
              <Card.Body>
                <h5 className="fw-bold mb-4" style={{ color: '#0f2c16', borderBottom: '2px solid #f0f4f1', paddingBottom: '10px' }}>
                  Personal Information
                </h5>

                <Form>
                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold">First Name</Form.Label>
                        <Form.Control type="text" defaultValue="Sukhwinder" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold">Last Name</Form.Label>
                        <Form.Control type="text" defaultValue="Singh" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold"><FaEnvelope className="me-2 text-muted" />Email Address</Form.Label>
                        <Form.Control type="email" defaultValue="sukhwinder.farm@gmail.com" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold"><FaPhone className="me-2 text-muted" />Phone Number</Form.Label>
                        <Form.Control type="text" defaultValue="+91 98765 43210" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <h5 className="fw-bold mb-4 pt-2" style={{ color: '#0f2c16', borderBottom: '2px solid #f0f4f1', paddingBottom: '10px' }}>
                    Farm & Location Details
                  </h5>

                  <Row className="g-3 mb-4">
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold"><FaMapMarkerAlt className="me-2 text-muted" />Permanent Address</Form.Label>
                        <Form.Control type="text" defaultValue="House No. 45, Village Gurdaspur" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold">State</Form.Label>
                        <Form.Control type="text" defaultValue="Punjab" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold">Total Land Area</Form.Label>
                        <Form.Control type="text" defaultValue="12 Acres" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="text-muted small fw-bold">Primary Crop</Form.Label>
                        <Form.Control type="text" defaultValue="Organic Wheat" className="py-2.5 rounded-3" style={{ border: '1px solid #dae3db' }} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-end">
                    <Button 
                      className="px-4 py-2.5 fw-bold border-0 rounded-3 d-inline-flex align-items-center gap-2"
                      style={{ backgroundColor: '#1c4b27' }}
                    >
                      <FaSave /> Save Changes
                    </Button>
                  </div>
                </Form>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}