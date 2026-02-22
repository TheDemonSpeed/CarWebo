// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/sticker-png-lincoln-motor-company-ford-motor-company-graphics-car-lincoln-angle-logo-car-transport-lincoln-motor-company.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Luxe Cars Logo" />
        <span>LINCOLN</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
