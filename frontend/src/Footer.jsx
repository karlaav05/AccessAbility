import React from 'react';
import "./css/main.css"; 

const Footer = () => {
  return (
    <footer id="footer" className="footer accent-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">AccessAbility</span>
            </a>
          </div>

          {/* Useful Links Section */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#">Disabilities</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p><strong>Email:</strong> <span>0251568@up.edu.mx</span></p>
            <p><strong>Email:</strong> <span>0252419@up.edu.mx</span></p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">AccessAbility</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* Licensing information and footer credit */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

