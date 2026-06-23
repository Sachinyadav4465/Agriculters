import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaLeaf, FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7f5', padding: '40px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: '15px' }}>
              <Row className="g-0">

                <Col md={5} className="d-none d-md-flex flex-column justify-content-between p-4 text-white position-relative" 
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(15, 56, 35, 0.9), rgba(15, 56, 35, 0.9)), url("https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=500")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                  <a href="#" className="d-flex align-items-center gap-2 text-white text-decoration-none fw-bold fs-4">
                    <FaLeaf style={{ color: '#82c139' }} /> Terrain
                  </a>
                  
                  <div className="my-auto">
                    <h3 className="fw-bold mb-3">Join Our Green Journey!</h3>
                    <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.6' }}>
                      Create an account to manage your landscaping projects, schedule custom consultations, and explore sustainable designs.
                    </p>
                  </div>

                  <div style={{ fontSize: '12px', opacity: 0.7 }}>
                    &copy; 2026 Terrain Landscaping.
                  </div>
                </Col>

                <Col md={7} className="p-4 p-sm-5 bg-white">
                  <div className="text-center mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center mb-2 d-md-none">
                      <FaLeaf size={30} style={{ color: '#0f3823' }} />
                    </div>
                    <h2 className="fw-bold" style={{ color: '#0f3823' }}>Create Account</h2>
                    <p className="text-muted small">Get started with your outdoor transformation</p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Full Name</Form.Label>
                      <div className="position-relative">
                        <FaUser className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                        <Form.Control 
                          type="text" 
                          placeholder="John Doe" 
                          className="ps-5 py-2.5 rounded-3"
                          style={{ borderColor: '#e1e1e1' }}
                          required 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Email Address</Form.Label>
                      <div className="position-relative">
                        <FaEnvelope className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                        <Form.Control 
                          type="email" 
                          placeholder="name@example.com" 
                          className="ps-5 py-2.5 rounded-3"
                          style={{ borderColor: '#e1e1e1' }}
                          required 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Phone Number</Form.Label>
                      <div className="position-relative">
                        <FaPhoneAlt className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                        <Form.Control 
                          type="tel" 
                          placeholder="0701-8823-2018" 
                          className="ps-5 py-2.5 rounded-3"
                          style={{ borderColor: '#e1e1e1' }}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Password</Form.Label>
                      <div className="position-relative">
                        <FaLock className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                        <Form.Control 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          className="ps-5 pe-5 py-2.5 rounded-3"
                          style={{ borderColor: '#e1e1e1' }}
                          required 
                        />
                        <span 
                          className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </span>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                      <Form.Check 
                        type="checkbox" 
                        id="terms" 
                        label="I agree to the Terms of Use & Privacy Policy" 
                        className="small text-muted"
                        required
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      className="w-100 py-2.5 rounded-3 fw-semibold border-0 mb-3"
                      style={{ backgroundColor: '#0f3823', color: '#fff' }}
                    >
                      Create Account
                    </Button>

                    <div className="text-center mt-4">
                      <p className="text-muted small mb-0">
                        Already have an account?{' '}
                        <a href="/login" style={{ color: '#82c139' }} className="fw-bold text-decoration-underline">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </Form>
                </Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}