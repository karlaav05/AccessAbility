import React from 'react';
import "./css/main.css"; 

const Team = () => {
  return (
    <section>
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>Meet the people behind this website</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <img src="img/paola.jpg" className="img-fluid" alt="Paola Ortega" />
              <h4>Paola Ortega</h4>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <img src="img/karla.jpg" className="img-fluid" alt="Karla Avila" />
              <h4>Karla Avila</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

