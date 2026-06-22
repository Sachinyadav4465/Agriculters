import React from 'react';
import { Container } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';

export default function BannerCTA() {
  return (
    <div className="ready-banner text-center" style={{ backgroundImage: 'linear-gradient(rgba(15, 56, 35, 0.85), rgba(15, 56, 35, 0.85)), url("https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=1200")' }}>
      <Container>
        <h2 className="display-5 fw-bold mb-3">
          Ready For A Greener, More<br />
          <span>Beautiful</span> Yard?
        </h2>
        <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: '500px' }}>
          Get 20% Off On All Orders Till March 2026
        </p>
        <div>
          <button className="play-btn-lime shadow d-inline-flex align-items-center justify-content-center">
            <FaPlay size={14} className="ms-1" />
          </button>
        </div>
      </Container>
    </div>
  );
}