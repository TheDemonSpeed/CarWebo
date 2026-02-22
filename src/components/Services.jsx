// src/components/Services.jsx
import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "VIP Concierge",
    description: "Personalized assistance for every step of your acquisition journey. We handle the details so you can enjoy the drive.",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/32GR6AWtfK7Lcrxoj-DdWw/348s.jpg", // Luxury Interior
    icon: "👑"
    
  },
  {
    id: 2,
    title: "Global Delivery",
    description: "From our showroom to your driveway, anywhere in the world. Fully insured, secure, and handled with white-glove care.",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2070", // Road/Transport
    icon: "🌍"
  },
  {
    id: 3,
    title: "Expert Tuning",
    description: "State-of-the-art maintenance and performance tuning by certified Lincoln specialists to keep your vehicle at its peak.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070", // Garage/Mechanic
    icon: "🔧"
  }
];

const Services = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Beyond the Drive</h2>
        <p>Experience a level of service that matches the quality of our vehicles.</p>
      </div>
      
      <div className="accordion-container">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className={`accordion-item ${activeId === service.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveId(service.id)}
            // For touch devices, click to activate
            onClick={() => setActiveId(service.id)}
          >
            <img src={service.image} alt={service.title} className="accordion-bg" />
            <div className="accordion-overlay"></div>
            
            <div className="accordion-content">
              <div className="accordion-icon">{service.icon}</div>
              <h3 className="accordion-title">{service.title}</h3>
              <p className="accordion-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
