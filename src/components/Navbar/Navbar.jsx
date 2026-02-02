import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../img/logo2.JPG';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToEnroll = () => {
  const section = document.getElementById('enroll-now');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <nav className="navbar">
      <div className="nav-container-fluid">
        <div className="nav-logo">
          <img src={logo} alt="Pro2Deutsch Logo" />
        </div>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/Courses" onClick={() => setIsOpen(false)}>Courses</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/blog" onClick={() => setIsOpen(false)}>Blog</a></li>
          <li><a href="/enroll" className="enroll-btn" onClick={scrollToEnroll}>Enroll Now</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;