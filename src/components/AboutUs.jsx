import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-content">
        <h2>About Our Showroom</h2>
        <p>
          Welcome to the premier destination for luxury and performance vehicles. 
          With over 20 years of experience, we pride ourselves on offering an 
          exclusive selection of the world's finest cars.
        </p>
        <p>
          Our mission is to provide an unparalleled buying experience, tailored 
          to the unique needs of every client. From classic masterpieces to 
          modern hypercars, our collection is curated with passion and precision.
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>20+</h3>
            <span>Years Experience</span>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <span>Cars Sold</span>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img 
          src="https://www.arabianbusiness.com/cloud/2021/09/16/0xm5lUee-Lincoln-showroom-in-Dubai-1024x501.jpg" 
          alt="Showroom Interior" 
        />
      </div>
    </section>
  );
};

export default AboutUs;