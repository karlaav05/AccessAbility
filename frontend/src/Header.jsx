import React from 'react';
import "./css/main.css"; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:0251568@up.edu.mx">0251568@up.edu.mx</a>
            </i>
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:0252419@up.edu.mx">0252419@up.edu.mx</a>
            </i>
          </div>
        </div>
      </div>
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">AccessAbility</h1>
            <span>.</span>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li className="dropdown">
                <a href="#"><span>Disabilities</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#Physical">Physical</a></li>
                  <li><a href="#Cognitive">Cognitive</a></li>
                  <li><a href="#Visual">Visual</a></li>
                </ul>
              </li>
              <li><a href="#call-to-action">Play</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#footer">Contact</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
