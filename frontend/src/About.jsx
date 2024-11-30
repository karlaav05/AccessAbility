import React from 'react';
import "./css/main.css"; 

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>"Where Fun Meets Learning: Together, Building an Inclusive Tomorrow!"</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>Mission</h3>
            <p>Our mission is to foster a more inclusive and compassionate society by creating a dynamic platform that combines fun and education. We aim to raise awareness about the importance of inclusivity, particularly for people with disabilities, through engaging, accessible, and enjoyable content. By inspiring understanding and empathy, we strive to empower individuals to embrace diversity and work together to build a world where everyone has equal opportunities to thrive.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
