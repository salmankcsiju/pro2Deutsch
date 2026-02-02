import React from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const phoneNumber = "917892793468";
  const message = "Hello Pro2Deutsch, I'd like to learn more about your German courses!";

  return (
    <div className="wa-sticky-container">
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="wa-main-btn"
      >
        <span className="wa-popout-msg">Contact us on WhatsApp!</span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
        />
      </a>
    </div>
  );
};

export default WhatsAppWidget;