import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Courses from './pages/Courses/Courses'
import Spotlight from './components/Spotlight/Spotligth';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import WhatsAppWidget from './components/Whatsapp/WhatsAppWidget';
import Enrollment from './components/Enrollment/Enrollment';
import Features from './components/Features/Features';
import { coursesData } from './data';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>  
            <Route path="/" element={
              <>
              <Spotlight coursesData={coursesData} />
              <Features />
              <Enrollment />
              </>
              } /> 
            <Route path="/Courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/enroll" element={<Enrollment />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;