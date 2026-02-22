// src/components/CarCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="card-image-wrapper">
        <img src={car.image} alt={`${car.make} ${car.model}`} loading="lazy" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{car.make} {car.model}</h3>
          <span className="year">{car.year}</span>
        </div>
        <p className="price">{car.price}</p>
        <Link to={`/inventory/${car.id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
