import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-anim');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.about-content, .leader-card, .about-header');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="subtitle">Your Gateway to Professional German Language Proficiency</p>
        </div>
      </section>

      <section className="about-description">
        <div className="container">
          <div className="about-content">
            <h2>Pro2Deutsch</h2>
            <p>
              Pro2Deutsch is an online German language learning platform created for working professionals 
              and students who want to learn German in a structured, practical, and flexible way.
            </p>
            <p>
              We offer A1 to B1 German language courses, along with speaking practice, vocabulary training, 
              and exam preparation, helping learners build strong foundations in the German language for 
              career growth, studies, and personal goals.
            </p>
            <p>
              Our courses focus on developing all core language skills — listening, speaking, reading, 
              writing, grammar, and vocabulary — with special attention to clear understanding and real-life usage.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-icon">👩‍⚕️</div>
              <h3>Dr. Saranya</h3>
              <span className="role">Founder & Chief Executive Officer</span>
              <p>
                Dr. Saranya leads the organization with a vision of delivering high-quality, 
                structured German language education. She builds learning environments emphasizing 
                clarity, consistency, and long-term proficiency.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👨‍💼</div>
              <h3>Muhammad Younus</h3>
              <span className="role">Manager</span>
              <p>
                Overseeing operations and ensuring seamless execution across academic delivery 
                and administrative functions. His role is central to maintaining organizational 
                efficiency and quality standards.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👩‍💼</div>
              <h3>Naveena</h3>
              <span className="role">Program Coordinator</span>
              <p>
                Managing course coordination and learner engagement. Naveena ensures structured 
                scheduling, clear communication, and continuous support throughout each course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;