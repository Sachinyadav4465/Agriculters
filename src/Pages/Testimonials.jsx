import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


export default function Testimonials() {
  return (
    <div className="testimonial-wrapper py-5 my-4">
    
      <Container>
        <Row className="align-items-center g-5">
          
          <Col lg={7} className="testimonial-left-block">
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaStar style={{ color: '#c49a45', fontSize: '14px' }} />
              <span 
                className="text-uppercase fw-bold" 
                style={{ color: '#c49a45', letterSpacing: '1px', fontSize: '13px' }}
              >
                Testimonials
              </span>
            </div>

            <h2 
              className="fw-bold mb-4 display-6" 
              style={{ color: '#ffffff', lineHeight: '1.2' }}
            >
              What Our Consumers Say <br />About Our Farms
            </h2>

            <p 
              className="fs-5 lh-base mb-4" 
              style={{ color: '#ffffff', maxWidth: '550px', fontStyle: 'italic', fontWeight: '400' }}
            >
              "Humare poore khet ki mitti ki quality aur fasal ka utpadan Sun Agriculture ki sahi salah ke baad badal gaya. Inki organic khaad aur soil testing services sach me lajawab hain!"
            </p>
            
          
            <div className="d-flex align-items-center gap-3 pt-2">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" 
                alt="Client Portrait" 
                className="testimonial-avatar"
              />
              <div>
                <h6 className="fw-bold mb-0" style={{ color: '#ffffff', fontSize: '16px' }}>
                  Rajesh Verma
                </h6>
                <small className="fw-medium" style={{ color: '#c49a45' }}>
                  Progressive Farmer, Punjab
                </small>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="position-relative">
              <img 
                src="https://i.pinimg.com/1200x/48/75/f6/4875f65d06c372a381194f91760270a1.jpg" 
                alt="Lush green agriculture fields" 
                className="testimonial-right-img shadow-sm"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}