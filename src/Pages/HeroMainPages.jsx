import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLeaf, FaAward, FaUsers, FaProjectDiagram, FaStar } from "react-icons/fa"; 
const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-images">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
                alt=""
                className="about-img about-img-one"
              />

              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
                alt=""
                className="about-img about-img-two"
              />

              <img
                src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808"
                alt=""
                className="about-img about-img-three"
              />

              <div className="about-experience-box">
                <h2>29+</h2>
                <p>Years Of Experience</p>
              </div>

              <div className="about-award-box">
                <FaAward />
                <span>200+ Awards Won</span>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-content">
              <span className="about-tag">
                <FaLeaf /> About Us
              </span>

              <h1>
                Building Greener Future
                <br />
                Together And Protect
              </h1>

              <p>
                We work to protect and renew the natural environment.
                Encouraging eco-friendly practices and creating a better future.
              </p>

              <ul>
                <li>Nature conservation programs</li>
                <li>Resource management initiatives</li>
                <li>Eco-friendly project development</li>
              </ul>

              <div className="about-btns">
                <button className="about-btn">
                  Explore More
                </button>

                <div className="about-rating-box d-inline-flex align-items-center gap-1">
                 
                  <div className="text-warning d-flex gap-1">
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                  </div>
                  <span className="ms-2">Excellent 4.9 out of 5</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="about-stats-row">
          <Col md={3}>
            <div className="about-stat-card">
              <FaAward />
              <h3>98%</h3>
              <p>Company Success</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="about-stat-card">
              <FaUsers />
              <h3>565+</h3>
              <p>Company Strength</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="about-stat-card">
              <FaProjectDiagram />
              <h3>36k</h3>
              <p>Complete Projects</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="about-stat-card">
              <FaLeaf />
              <h3>100+</h3>
              <p>Experienced Members</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;