import React from 'react';
import { Link } from "react-router-dom"; // Assuming React Router is used for navigation
import "./css/main.css"; 

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <img src="img/play.jpg" alt="Play" />
        <div className="content row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Play</h3>
              <p>Test your knowledge here</p>
              <Link className="ah" to="./Games">Play</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
