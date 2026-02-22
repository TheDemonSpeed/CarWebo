// src/pages/CarDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import TestDriveModal from '../components/TestDriveModal';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const car = cars.find((c) => c.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) {
    return (
      <div className="not-found">
        <h2>Car not found</h2>
        <Link to="/inventory" className="back-link">Back to Inventory</Link>
      </div>
    );
  }

  return (
    <div className="car-details-page">
      <div className="details-hero" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{car.make} {car.model}</h1>
          <p className="hero-price">{car.price}</p>
        </div>
      </div>

      <div className="details-content">
        <Link to="/inventory" className="back-link">← Back to Inventory</Link>
        
        <div className="details-grid">
          <div className="info-section">
            <h2>Description</h2>
            <p>{car.description}</p>
          </div>

          <div className="specs-section">
            <h2>Specifications</h2>
            <ul className="specs-list">
              <li>
                <span>Engine</span>
                <strong>{car.specs.engine}</strong>
              </li>
              <li>
                <span>Horsepower</span>
                <strong>{car.specs.horsepower}</strong>
              </li>
              <li>
                <span>0-60 mph</span>
                <strong>{car.specs.acceleration}</strong>
              </li>
              <li>
                <span>Top Speed</span>
                <strong>{car.specs.topSpeed}</strong>
              </li>
            </ul>
            <button className="inquire-btn" onClick={() => setIsModalOpen(true)}>
              Test Drive / Inquire
            </button>
          </div>
        </div>
      </div>
      <TestDriveModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={car} 
      />
    </div>
  );
};

export default CarDetails;
