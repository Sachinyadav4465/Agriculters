import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "6392377675";
  const message = encodeURIComponent("Hello Terrain Landscaping, I want to inquire about your services!");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      title="Chat with us on WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <FaWhatsapp size={28} />
    </a>
  );
} 

