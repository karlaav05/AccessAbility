import React from 'react';
import "./css/main.css"; 

const Hero = () => {
  return (
    <section id="hero" className="hero section accent-background">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2><span>Welcome to </span><span className="accent">AccessAbility</span></h2>
            <p>Fun, Inclusive Learning For All</p>
          </div>
        </div>
      </div>
      <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <img src="img/physical.webp" className="icon-img" alt="Physical"/>
                </div>
                <h4 className="title">
                  <a href="#Physical" className="stretched-link">Physical</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <img src="img/cognitive2.png" className="icon-img" alt="Cognitive"/>
                </div>
                <h4 className="title">
                  <a href="#Cognitive" className="stretched-link">Cognitive</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <img src="img/visual.webp" className="icon-img" alt="Visual"/>
                </div>
                <h4 className="title">
                  <a href="#Visual" className="stretched-link">Visual</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
