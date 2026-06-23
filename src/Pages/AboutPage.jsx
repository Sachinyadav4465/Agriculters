import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <section className="about-custom-section">
      <Container>
        <Row className="align-items-center g-5">
          
          {/* Left Content Side */}
          <Col lg={6} className="about-left-content">
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaLeaf className="brand-leaf-icon" />
              <span className="about-sub-tag">DESIGNING GREEN SPACES</span>
            </div>
            
            <h2 className="about-main-heading">
              We Are Dedicated To Transforming Outdoor Spaces Into Stunning, Sustainable Landscapes That Inspire And Thrive
            </h2>
            
            <p className="about-description">
              Placerat habitasse diam feugiat elementum, suspendisse egestas eget. Proin ultrices diam curabitur donec leo, leo mus elementum proin, sit amet id facilisi orci magna.
            </p>
            
            <Button className="about-readmore-btn">
              Read More
            </Button>
          </Col>

          {/* Right Cards Side */}
          <Col lg={6}>
            <Row className="g-4 align-items-start">
              
              {/* Card 1: Expert Design */}
              <Col sm={6}>
                <Card className="about-feature-card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-img-wrapper">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=500" 
                      alt="Expert Design" 
                    />
                  </div>
                  <Card.Body className="p-4 bg-white">
                    <Card.Title className="card-feature-title">
                      Expert Design & Custom Solutions
                    </Card.Title>
                    <Card.Text className="card-feature-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2: Sustainable Practices (With Highlighted Background Color) */}
              <Col sm={6}>
                <Card className="about-feature-card highlighted-card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-img-wrapper">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=500" 
                      alt="Sustainable Practices" 
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="card-feature-title">
                      Sustainable Practices & Eco-Friendly
                    </Card.Title>
                    <Card.Text className="card-feature-desc">
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
}