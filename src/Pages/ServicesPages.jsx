import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaSeedling, FaTractor, FaVial, FaWater, FaBug, FaChartLine } from 'react-icons/fa';


export default function AgricultureServices() {
  const services = [
    {
      icon: <FaVial />,
      title: "Soil Analysis & Testing",
      desc: "Mitti ki jaanch karke hum batate hain ki aapki zameen ke liye kaun si fasal aur khaad sabse behtareen hai."
    },
    {
      icon: <FaSeedling />,
      title: "Organic Crop Production",
      desc: "100% zehar-mukt kheti. Hum aapko shuddh organic anaj aur sabziyan ugane ki modern techniques sikhate hain."
    },
    {
      icon: <FaWater />,
      title: "Smart Irrigation Systems",
      desc: "Paani ki bachat aur fasal ki sahi sinchai ke liye drip aur sprinkler systems ka setup aur maintenance."
    },
    {
      icon: <FaTractor />,
      title: "Modern Machinery Rental",
      desc: "Chote aur bade kisanon ke liye saste daam par modern hal, harvester aur tractor kiraye par uplabdah hain."
    },
    {
      icon: <FaBug />,
      title: "Natural Pest Control",
      desc: "Bina kisi chemical ke fasalon ko keedon se bachane ke liye natural aur ayurvedic kitnashak ka upyog."
    },
    {
      icon: <FaChartLine />,
      title: "Market Yield Consulting",
      desc: "Fasal katne ke baad usko sahi market aur sahi daam par bechne ke liye expert ki salah aur rasta."
    }
  ];

  return (
    <div style={{ backgroundColor: '#fdfdfd', fontFamily: 'sans-serif' }}>

      <section 
        className="py-5 text-center text-white" 
        style={{ 
          background: 'linear-gradient(rgba(15, 44, 22, 0.8), rgba(15, 44, 22, 0.8)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0'
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-3">Our Agriculture Services</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', fontSize: '18px', color: '#dae3db' }}>
            Beej se lekar bazaar tak, hum har kadam par kisanon ke saath hain. Behtar kheti, behtar jeevan.
          </p>
        </Container>
      </section>

      <section className="py-5">
        <Container className="my-5">
          <Row className="text-center mb-5">
            <Col>
              <span style={{ color: '#c49a45', fontStyle: 'italic', fontWeight: '600' }}>What We Offer</span>
              <h2 className="fw-bold mt-2" style={{ color: '#0f2c16', fontSize: '2.5rem' }}>Specialized Farming Solutions</h2>
            </Col>
          </Row>

          <Row className="g-4">
            {services.map((ser, index) => (
              <Col lg={4} md={6} key={index}>
                <Card 
                  className="h-100 border-0 shadow-sm p-4 rounded-4 service-card"
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body>
                    {/* service-icon-wrapper class custom CSS ke liye lagayi hai */}
                    <div 
                      className="mb-4 d-flex align-items-center justify-content-center rounded-circle service-icon-wrapper"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        backgroundColor: '#f0f4f1', 
                        color: '#c49a45',
                        fontSize: '30px',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {ser.icon}
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#0f2c16' }}>{ser.title}</h4>
                    <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      {ser.desc}
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 text-decoration-none fw-bold" 
                      style={{ color: '#1c4b27' }}
                    >
                      Read More +
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. CTA SECTION (Call to Action) */}
      <section className="py-5" style={{ backgroundColor: '#0f2c16' }}>
        <Container>
          <div 
            className="p-5 rounded-4 d-md-flex align-items-center justify-content-between text-white"
            style={{ border: '1px solid rgba(196, 154, 69, 0.3)' }}
          >
            <div className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-2">Apni Kheti Ko Modern Banayein?</h2>
              <p className="mb-0 text-white-50">Aaj hi humare agriculture experts se muft salah lein.</p>
            </div>
            <Button 
              className="px-5 py-3 fw-bold border-0 rounded-3"
              style={{ backgroundColor: '#c49a45', color: '#0f2c16' }}
            >
              Get Free Consultation
            </Button>
          </div>
        </Container>
      </section>

    </div>
  );
}