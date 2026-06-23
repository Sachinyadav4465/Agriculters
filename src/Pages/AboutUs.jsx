import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { FaPlay, FaLeaf, FaSeedling, FaStar } from 'react-icons/fa';

export default function SunAgricultureFarming() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9' }}>
      <section style={{ backgroundColor: '#0f2c16', color: '#ffffff', padding: '60px 0' }}>
        <Container>
          <Row className="align-items-center g-4">

            <Col lg={5}>
              <span style={{ color: '#c49a45', fontStyle: 'italic', fontSize: '16px' }}>Why Choose Our Farm</span>
              <h2 className="fw-bold mt-2 mb-4" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
                Committed to Excellence in Sustainable Agriculture
              </h2>
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center bg-white rounded-circle" 
                  style={{ width: '50px', height: '50px', cursor: 'pointer', flexShrink: 0 }}
                >
                  <FaPlay style={{ color: '#0f2c16', marginLeft: '3px' }} />
                </div>
                <p className="mb-0 text-white-50" style={{ fontSize: '14px', maxWidth: '300px' }}>
                  Hum modern farming techniques aur traditional values ka mix use karte hain taaki zameen ki upjau shakti bani rahe aur fasal badiya ho.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex gap-3 mb-4">
                <div className="mt-1">
                  <FaLeaf style={{ color: '#c49a45', fontSize: '24px' }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '18px' }}>100% Organic Farming</h5>
                  <p className="text-white-50" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Bina kisi chemical aur harmful pesticides ke, hum shuddh organic tarike se fasal aur sabziyan ugate hain.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="mt-1">
                  <FaSeedling style={{ color: '#c49a45', fontSize: '24px' }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '18px' }}>Smart Soil Management</h5>
                  <p className="text-white-50" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Mitti ki jaan hi kheti ki shaan hai. Hum crop rotation aur natural compost se soil health ko maintain rakhte hain.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1" style={{ fontSize: '12px', fontWeight: '60px' }}>
                  <span>Organic Crop Yield</span>
                  <span>92%</span>
                </div>
                <ProgressBar now={92} variant="warning" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1" style={{ fontSize: '12px', fontWeight: '60px' }}>
                  <span>Soil Fertility Rate</span>
                  <span>95%</span>
                </div>
                <ProgressBar now={95} variant="warning" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1" style={{ fontSize: '12px', fontWeight: '60px' }}>
                  <span>Fresh Produce Delivery</span>
                  <span>98%</span>
                </div>
                <ProgressBar now={98} variant="warning" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1" style={{ fontSize: '12px', fontWeight: '60px' }}>
                  <span>Water Conservation Eco</span>
                  <span>88%</span>
                </div>
                <ProgressBar now={88} variant="warning" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ marginTop: '-40px', position: 'relative', zIndex: 5 }}>
        <Card className="border-0 shadow-sm rounded-4 p-4 text-center bg-white">
          <Row className="g-4 divide-columns">
            <Col md={3} className="border-end border-light">
              <h2 className="fw-bold mb-0" style={{ color: '#0f2c16', fontSize: '2.2rem' }}>15 K <span style={{ color: '#c49a45', fontSize: '1.5rem' }}>+</span></h2>
              <p className="text-muted small mb-0 mt-1 fw-medium">Acres of Cultivated Land</p>
            </Col>
            <Col md={3} className="border-end border-light">
              <h2 className="fw-bold mb-0" style={{ color: '#0f2c16', fontSize: '2.2rem' }}>8 K <span style={{ color: '#c49a45', fontSize: '1.5rem' }}>+</span></h2>
              <p className="text-muted small mb-0 mt-1 fw-medium">Tons of Annual Harvest</p>
            </Col>
            <Col md={3} className="border-end border-light">
              <h2 className="fw-bold mb-0" style={{ color: '#0f2c16', fontSize: '2.2rem' }}>4.5 K <span style={{ color: '#c49a45', fontSize: '1.5rem' }}>+</span></h2>
              <p className="text-muted small mb-0 mt-1 fw-medium">Happy Families Served</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold mb-0" style={{ color: '#0f2c16', fontSize: '2.2rem' }}>250 <span style={{ color: '#c49a45', fontSize: '1.5rem' }}>+</span></h2>
              <p className="text-muted small mb-0 mt-1 fw-medium">Local Agro Partners</p>
            </Col>
          </Row>      
        </Card>
      </Container>

      <section className="py-5 my-5">
        <Container>
          <Row className="g-5 align-items-center">
  
            <Col lg={4}>
              <img 
                src="https://i.pinimg.com/1200x/48/75/f6/4875f65d06c372a381194f91760270a1.jpg" 
                alt="Green agriculture crops field" 
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </Col>

            <Col lg={8}>
              <span style={{ color: '#c49a45', fontStyle: 'italic', fontSize: '16px' }}>Testimonials</span>
              <h2 className="fw-bold mt-1 mb-3" style={{ color: '#0f2c16', fontSize: '2.5rem' }}>
                What Our Consumers Say About Us
              </h2>
              <p className="text-muted mb-4 shadow-none" style={{ fontSize: '14px' }}>
                Humaare taaje aur chemical-free anaj aur sabziyon ne hazaron parivaron ki sehat ko sudhara hai. Padhiye log humare baare mein kya kehte hain.
              </p>

              <Row className="g-4">
             
                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 rounded-4 bg-white">
                    <div className="d-flex gap-1 mb-3 text-warning" style={{ fontSize: '12px' }}>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="text-muted mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      "Yahan se mangvaye gaye gehun aur daalein sach mein badiya quality ki hoti hain. Market mein milne wale polished anaj se bilkul alag aur natural swad hota hai."
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src="https://i.pinimg.com/1200x/48/75/f6/4875f65d06c372a381194f91760270a1.jpg" 
                        alt="Ramesh Kumar" 
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold" style={{ fontSize: '14px', color: '#0f2c16' }}>Ramesh Kumar</h6>
                        <span className="text-muted" style={{ fontSize: '12px' }}>Wholesale Buyer</span>
                      </div>
                    </div>
                  </Card>
                </Col>

              
                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 rounded-4 bg-white">
                    <div className="d-flex gap-1 mb-3 text-warning" style={{ fontSize: '12px' }}>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="text-muted mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      "Organic sabziyon ki aisi fresh delivery maine pehle kabhi nahi dekhi. Mere bachon ki health ke liye ab main isi farm ke pure products par hi trust karti hoon."
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src="https://i.pinimg.com/1200x/48/75/f6/4875f65d06c372a381194f91760270a1.jpg" 
                        alt="Kiran Sharma" 
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold" style={{ fontSize: '14px', color: '#0f2c16' }}>Kiran Sharma</h6>
                        <span className="text-muted" style={{ fontSize: '12px' }}>Regular Customer</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}