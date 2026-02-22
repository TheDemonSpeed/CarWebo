// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import TestDriveModal from '../components/TestDriveModal';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import './Home.css';

const Home = () => {
  const heroBgRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Find Your Dream Car";
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed in ms

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background" ref={heroBgRef}></div>
        <div className="hero-content">
          <h1>{typedText}<span className="typing-cursor">|</span></h1>
          <p>Experience luxury, performance, and style.</p>
          <Link to="/inventory" className="cta-button">Explore Inventory</Link>
        </div>
      </section>
      <section className="featured reveal-section">
        <h2>Featured Vehicles</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* Duplicate the cars array to create a seamless infinite loop */}
            {[...cars, ...cars].map((car, index) => (
              <div key={`${car.id}-${index}`} className="carousel-item">
                <CarCard 
                  car={car} 
                  onTestDrive={() => setSelectedCar(car)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="reveal-section">
        <AboutUs />
      </div>
      <div className="reveal-section">
        <Services />
      </div>
      <TestDriveModal 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
        car={selectedCar} 
      />
    </div>
  );
};

export default Home;
