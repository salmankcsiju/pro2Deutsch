import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="blog-wrapper">
      <header className="blog-hero animate">
        <div className="container">
          <div className="badge-ui">Mastering German</div>
          <h1>A1 to B2 German: <span className="text-gradient">Career & Confidence</span></h1>
          <p>More than just an exam. Build a skill that transforms your global professional journey.</p>
        </div>
      </header>

      <div className="container main-content">
        <section className="intro-card animate">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Stop just "Learning" and start "Communicating"</h2>
              <p>We address the honest questions: Why do B2 graduates struggle to speak? How do you prepare in 30 days? Which level actually gets you hired?</p>
            </div>
            <div className="intro-stats">
              <div className="stat"><span>A1-B2</span>Pathways</div>
              <div className="stat"><span>100%</span>Online</div>
            </div>
          </div>
        </section>

        <h2 className="section-label animate">Career Milestone Map</h2>
        <div className="bento-grid">
          <div className="bento-item level-a1 animate">
            <div className="level-tag">Foundation</div>
            <h3>A1 Level</h3>
            <p>Sentence formation & basic structure. The starting point of your ambition.</p>
            <div className="career-hit">Career: Gateway to Germany</div>
          </div>
          <div className="bento-item level-a2 animate">
            <div className="level-tag">Functional</div>
            <h3>A2 Level</h3>
            <p>Handle workplace routine and everyday interactions with ease.</p>
            <div className="career-hit">Career: Entry-level Roles</div>
          </div>
          <div className="bento-item level-b1 animate">
            <div className="level-tag">Independent</div>
            <h3>B1 Level</h3>
            <p>Explain ideas and participate in professional meetings fluently.</p>
            <div className="career-hit">Career: Strong Milestone</div>
          </div>
          <div className="bento-item level-b2 animate">
            <div className="level-tag">Proficiency</div>
            <h3>B2 Level</h3>
            <p>Master complex texts and express professional opinions clearly.</p>
            <div className="career-hit">Career: Global Opportunities</div>
          </div>
        </div>

        <section className="problem-solver animate">
          <div className="content-box">
            <div className="icon-header">🗣️</div>
            <h2>The B2 Paradox</h2>
            <p>Passed B2 but still can't speak? It’s common. Most courses prioritize grammar over conversation. We fix this by focusing on <strong>Natural Flow</strong> and <strong>Pronunciation.</strong></p>
          </div>
          <div className="content-box dark">
            <div className="icon-header">📚</div>
            <h2>Vocab  Grammar</h2>
            <p>Struggling for words? You don't need more grammar rules; you need <strong>usable vocabulary.</strong> Our training focuses on active recall and high-frequency professional terms.</p>
          </div>
        </section>

        <section className="exam-blueprint animate">
          <h2 className="title-center">30-Day Exam Blueprint</h2>
          <div className="blueprint-grid">
            {["Focus on Grammar & Vocabulary", "Listening & Reading Speed", "Writing & Speaking Structure", "Full Mock & Error Analysis"].map((task, i) => (
              <div key={i} className="step-card">
                <div className="step-num">Week {i + 1}</div>
                <p>{task}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-footer animate">
          <div className="footer-glass">
            <h2>Ready to find your level?</h2>
            <p>Join Pro2Deutsch for structured guidance and honest support.</p>
            <Link to="/Courses" className="btn-glow">Explore Courses</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;