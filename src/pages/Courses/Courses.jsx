import React, { useEffect } from 'react';
import { coursesData, specializedPrograms } from '../../data';
import './Courses.css';
import germanyFlag from '../../img/German_flag.jpg';

function Courses() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="courses-page-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${germanyFlag})` }}>
      <div className="container">
        <header className="page-header animate-card">
          <h1>Detailed Course Overview</h1>
          <p>Everything you need to master German, from A1 to B2.</p>
        </header>

        <div className="detailed-grid">
          {coursesData.map((course, index) => (
            <div 
              className="detailed-card animate-card" 
              key={index} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-top">
                <span className="level-tag">{course.level}</span>
                <h2>{course.name}</h2>
              </div>
              <div className="card-info">
                <p className="description">{course.description}</p>
                <h4>Core Focus:</h4>
                <ul>
                  {course.topics.map((topic, i) => (
                    <li key={i}>• {topic}</li>
                  ))}
                </ul>
                <div className="outcome-section">
                  <strong>Expected Outcome:</strong>
                  <p>{course.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="specialized-section-wrapper">
          <h2 className="section-title animate-card">Specialized Programs</h2>
          <div className="detailed-grid">
            {specializedPrograms.map((prog, index) => (
              <div 
                className="detailed-card specialized-highlight animate-card" 
                key={`spec-${index}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="card-top">
                  <span className="level-tag">{prog.level}</span>
                  <h2>{prog.name}</h2>
                </div>
                <div className="card-info">
                  <p className="description">{prog.description}</p>
                  <h4>Includes:</h4>
                  <ul>
                    {prog.topics.map((topic, i) => (
                      <li key={i}>✔ {topic}</li>
                    ))}
                  </ul>
                  <div className="outcome-section">
                    <strong>Outcome:</strong>
                    <p>{prog.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;