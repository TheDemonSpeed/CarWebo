// src/pages/Inventory.jsx
import React, { useState } from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import TestDriveModal from '../components/TestDriveModal';
import './Inventory.css';

const Inventory = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="inventory-page">
      <div className="inventory-hero">
        <h1>Our Collection</h1>
        <p>Discover our exclusive range of premium vehicles.</p>
      </div>
      
      <div className="inventory-container">
        <div className="inventory-grid">
          {cars.map((car) => (
            <CarCard 
              key={car.id} 
              car={car} 
              onTestDrive={() => setSelectedCar(car)}
            />
          ))}
        </div>
      </div>
      <TestDriveModal 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
        car={selectedCar} 
      />
    </div>
  );
};

export default Inventory;
