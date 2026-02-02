import React, { useState, useEffect } from 'react';
import './Enrollment.css';

const Enrollment = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-enroll').forEach(el => observer.observe(el));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Saving your details...");

        const scriptURL = "https://script.google.com/macros/s/AKfycbz-2cKBB2A-2R29B6sT0wRAUBiq63c_Pb0zkBO8sh1Yo0-VgPj8ob_a1f6vnYz8br-fjA/exec"; 
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
        .then(() => { 
            setStatus("Success! We will contact you shortly.");
            setLoading(false);
            e.target.reset('/');
        })
        .catch((err) => { 
            console.error("Submission error:", err); 
            setStatus("Something went wrong. Please try again.");
            setLoading(false);
        });

    };

    return (
        <section id="enroll-now" className="enroll-section">
            <div className="container">
                <div className="enroll-card animate-enroll">
                    <div className="enroll-content">
                        <span className="enroll-badge">Join Pro2Deutsch</span>
                        <h2>Enroll for a Free Demo</h2>
                        <p>Your details will be securely saved, and our team will reach out to you within 24 hours.</p>
                        <ul className="enroll-benefits">
                            <li>✔ Guaranteed Response</li>
                            <li>✔ Direct Teacher Consultation</li>
                            <li>✔ Custom Learning Path</li>
                        </ul>
                    </div>

                    <div className="enroll-action">
                        <form className="enroll-form" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Full Name" required />
                            <input type="email" name="email" placeholder="Email Address" required />
                            <input type="tel" name="phone" placeholder="Phone Number" required />
                            <select name="level" required>
                                <option value="">Select Level</option>
                                <option value="A1">A1 Foundation</option>
                                <option value="A2">A2 Functional</option>
                                <option value="B1">B1 Independent</option>
                                <option value="B2">B2 Professional</option>
                                <option value="Specialized">Specialized Program</option>
                            </select>
                            <button type="submit" className="submit-btn-glow" disabled={loading}>
                                {loading ? "Processing..." : "Enroll Now"}
                            </button>
                            {status && <p className={`submission-status ${status.includes("Error") ? "error" : ""}`}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enrollment;