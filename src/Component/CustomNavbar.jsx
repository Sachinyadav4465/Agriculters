import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaLeaf, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar ">
      <Container>
      
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="navbar-brand-logo"
        >
          <span>
            <FaLeaf />
          </span>{" "}
          Terrain
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          className="border-0 bg-light"
        />

        <Navbar.Collapse id="main-navbar">
         
          <Nav className="mx-auto text-center">
            <Nav.Link
              as={NavLink}
              to="/"
              className="custom-nav-link"
            >
              Homepage
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/aboutus"
              className="custom-nav-link"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              className="custom-nav-link"
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="custom-nav-link"
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center justify-content-center gap-4 mt-3 mt-lg-0">
      
            <div className="d-flex align-items-center">
              <div
                className="nav-phone-icon rounded-circle d-flex align-items-center justify-content-center me-2 text-dark"
              >
                <FaPhoneAlt size={14} />
              </div>

              <div className="text-start">
                <small
                  className="d-block text-white-50"
                  style={{ fontSize: "12px" }}
                >
                  Call Us Anytime
                </small>

                <a
                  href="tel:6392377675"
                  className="text-white fw-bold text-decoration-none"
                >
                 6392377675
                </a>
              </div>
            </div>

            <Link
              to="/login"
              className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
              }}
              title="Login / Signup"
            >
              <FaUser size={15} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}