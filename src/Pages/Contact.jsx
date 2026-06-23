import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-wrapper" style={{ backgroundColor: '#f4f7f5', padding: '80px 0' }}>
      <Container>

        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaLeaf style={{ color: '#82c139' }} />
            <span className="section-tag" style={{ color: '#82c139', letterSpacing: '1px', fontWeight: '600' }}>GET IN TOUCH</span>
          </div>
          <h2 className="section-title fs-1 mx-auto fw-bold" style={{ color: '#0f3823', maxWidth: '650px' }}>
            Ready To Start Your Landscape Transformation?
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '600px', fontSize: '15px' }}>
            Have questions about our services or want to schedule a consultation? Drop us a message, and our team will get back to you within 24 hours.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">

          <Col lg={5}>
            <div className="d-flex flex-column gap-4 h-100">

              <Card className="border-0 shadow-sm p-4 rounded-4 bg-white">
                <h4 className="fw-bold mb-4" style={{ color: '#0f3823' }}>Contact Information</h4>
                
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(130, 193, 57, 0.15)', color: '#0f3823' }}>
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Our Office</h6>
                    <p className="text-muted small mb-0">123 Green Street, California, USA</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(130, 193, 57, 0.15)', color: '#0f3823' }}>
                    <FaPhoneAlt size={17} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Call Us</h6>
                    <a href="tel:070188232018" className="text-muted small text-decoration-none d-block">0701-8823-2018</a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(130, 193, 57, 0.15)', color: '#0f3823' }}>
                    <FaEnvelope size={17} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Email Us</h6>
                    <a href="mailto:info@terrainlandscaping.com" className="text-muted small text-decoration-none d-block">info@terrainlandscaping.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(130, 193, 57, 0.15)', color: '#0f3823' }}>
                    <FaClock size={17} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#0f3823' }}>Working Hours</h6>
                    <p className="text-muted small mb-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </Card>

              <div className="flex-grow-1 rounded-4 overflow-hidden shadow-sm shadow-sm border-0" style={{ minHeight: '250px' }}>
                <iframe
                  title="Terrain Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa180edd%3A0x26013a5347214a1a!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4 p-sm-5 rounded-4 bg-white h-100">
              <h4 className="fw-bold mb-4" style={{ color: '#0f3823' }}>Send Us A Message</h4>
              
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="John Doe" 
                        className="py-2.5 rounded-3"
                        style={{ borderColor: '#e1e1e1' }}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="john@example.com" 
                        className="py-2.5 rounded-3"
                        style={{ borderColor: '#e1e1e1' }}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="0701-8823-2018" 
                        className="py-2.5 rounded-3"
                        style={{ borderColor: '#e1e1e1' }}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Landscape Design Enquiry" 
                        className="py-2.5 rounded-3"
                        style={{ borderColor: '#e1e1e1' }}
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required 
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-semibold" style={{ color: '#0f3823' }}>Your Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Tell us about your project or vision..." 
                        className="rounded-3"
                        style={{ borderColor: '#e1e1e1', resize: 'none' }}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button 
                  type="submit" 
                  className="py-2.5 px-4 rounded-3 fw-semibold border-0 d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: '#0f3823', color: '#fff' }}
                >
                  Send Message <FaPaperPlane size={14} />
                </Button>
              </Form>

            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}