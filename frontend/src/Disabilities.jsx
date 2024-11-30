import React from 'react';
import "./css/main.css"; 

const Disabilities = () => {
  return (
    <div>
      <section id="Physical" className="container">
        <div className="info-card">
          <h2>Physical Disabilities</h2>
          <h3>What are they?</h3>
          <p>According to the World Health Organization (WHO), motor disability refers to "sequelae or malformations in the neuromuscular system, resulting in control issues over movement and posture."</p>
          <h3>Causes</h3>
          <p>Motor disabilities arise from various causes and are classified as physical disabilities.</p>
          <h3>Types</h3>
          <ul>
              <li>Spinal cord injury</li>
              <li>Chondrodystrophy</li>
              <li>Multiple sclerosis</li>
              <li>Cerebral palsy</li>
              <li>Spina bifida</li>
              <li>Muscular dystrophy</li>
              <li>Ataxia</li>
              <li>Trauma from head injuries</li>
          </ul>
          <h3>Resources</h3>
          <p>Accessible environments are crucial for supporting autonomy in people with physical disabilities.</p>
          <a href="https://empleo.fundacionadecco.org/">Employment resources for people with disabilities</a> <br></br>
        </div>
      </section>

      <section id="Cognitive" className="container">
        <div className="info-card">
          <h2>Cognitive Disabilities</h2>
          <h3>What are they?</h3>
          <p>Individuals with intellectual disabilities may struggle with social and intellectual skills needed for daily living.</p>
          <h3>Misconceptions</h3>
          <ul>
            <li>Intellectual disability is not a mental illness.</li>
            <li>People with intellectual disabilities are equal citizens.</li>
            <li>Each individual has unique abilities, interests, dreams, and needs.</li>
          </ul>
          <h3>Causes</h3>
          <p>Intellectual disabilities affect around 1% of the population and have diverse causes.</p>
          <h3>Treatment</h3>
          <p>Treatment aims to help individuals reach their full potential through specialized training and education.</p>
        </div>
      </section>

      <section id="Visual" className="container">
        <div className="info-card">
          <h2>Visual Disabilities</h2>
          <h3>What are they?</h3>
          <p>Visual impairment ranges from partial vision loss to complete blindness, affecting visual acuity, field of vision, and reading ability.</p>
          <h3>Causes</h3>
          <p>Diabetes and other chronic conditions can lead to vision loss or blindness.</p>
          <h3>Difficulties</h3>
          <p>Those who are blind or have low vision may experience challenges in everyday tasks and navigating spaces.</p>
        </div>
      </section>
    </div>
  );
};

export default Disabilities;
