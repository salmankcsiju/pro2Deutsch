import React, { useEffect } from 'react';
import './Spotligth.css';
import { Link } from 'react-router-dom';

function Spotlight({ coursesData }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-anim');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.info-block, .course-card, .container-header, .section-title');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [coursesData]);

    if (!coursesData) return <h1>No courses available</h1>;

    return (
        <>
            <div className="container-header">
                <h1>Learn German the Smart Way <br/> From Beginner to B2 & Beyond</h1>
                <h2>Flexible, result-driven online German language coaching <br/> designed for working professionals, students, and exam-focused learners.</h2>
                <p>Whether you are starting from zero or preparing for B2 exams, job interviews, or career opportunities in Germany, we provide structured, practical, and exam-oriented German training—completely online.</p>
                <div className="hero-btns">
                    <button className="btn btn-primary">Book a Free Demo</button>
                    <button className="btn btn-primary"> <Link to="/Courses"> Explore Courses </Link></button>
                </div>
            </div>

            <section className="german-info">
                <div className="container">
                    <div className="info-block">
                        <h2 className="section-title">WHY LEARN GERMAN WITH US?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item"><span>✔</span> Certified and experienced German trainers</div>
                            <div className="benefit-item"><span>✔</span> Online live interactive classes</div>
                            <div className="benefit-item"><span>✔</span> Flexible schedules for working professionals</div>
                            <div className="benefit-item"><span>✔</span> Exam-oriented preparation (Goethe, Telc, ÖSD)</div>
                            <div className="benefit-item"><span>✔</span> Speaking-focused teaching methodology</div>
                            <div className="benefit-item"><span>✔</span> Small batch & personal training options</div>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="info-block">
                        <h2 className="section-title">WHO IS THIS FOR?</h2>
                        <ul className="target-list">
                            <li><span className="emoji">👨‍💼</span> Working professionals planning careers in Germany</li>
                            <li><span className="emoji">🎓</span> Students preparing for studies abroad</li>
                            <li><span className="emoji">🗣</span> B2-qualified students preparing for interviews</li>
                            <li><span className="emoji">🌱</span> Absolute beginners with no German background</li>
                        </ul>
                    </div>

                    <hr className="divider" />

                    <div className="info-block">
                        <h2 className="section-title">OUR TEACHING APPROACH</h2>
                        <p className="approach-intro">We follow a structured + practical + exam-oriented learning model:</p>
                        <ul className="approach-list">
                            <li>Step-by-step grammar mastery</li>
                            <li>Daily-use & professional vocabulary</li>
                            <li>Regular speaking practice</li>
                            <li>Real-life communication scenarios</li>
                            <li>Continuous assessment & feedback</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="courses">
                <div className="container">
                    <h2 className="title-head" style={{textAlign: 'center', marginBottom: '40px'}}>Our Courses</h2>
                    <div className="course-grid">
                        {coursesData.map((course, index) => (
                            <div className="course-card" key={index}>
                                <span className="badge">{course.level}</span>
                                <h3>{course.name}</h3>
                                <p>{course.description}</p>
                                <ul>
                                    {course.topics.map((item, i) => <li key={i}>✔ {item}</li>)}
                                </ul>
                                <p className="outcome"><strong>Outcome:</strong> {course.outcome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Spotlight;