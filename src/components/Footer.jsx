// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Music2, Linkedin } from 'lucide-react';
import './Footer.css'; // Importing the separate CSS file

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      
      {/* Top Section */}
      <div className="footer-top">
        {/* Left: Main Heading */}
        <div className="footer-heading-col">
          <h2 className="footer-heading">
            Drive Your Dreams with <br className="desktop-break" />
            the Cruze Elite Luxury!
          </h2>
        </div>

        {/* Middle: Link Columns */}
        <div className="footer-links-container">
          <ul className="footer-link-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="footer-link-list">
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Licences</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
          <ul className="footer-link-list">
            <li><a href="mailto:info@cruze.com">info@cruze.com</a></li>
            <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
            <li><a href="#">Miami, Florida</a></li>
            <li><a href="#">Tampa, Florida</a></li>
          </ul>
        </div>

        {/* Right: Call to Action */}
        <div className="footer-cta-col">
          <p>Find top luxury cars fast!</p>
          <button className="footer-cta-btn">
            Explore Models <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

   
      {/* Bottom Section */}
      <div className="footer-bottom">
        
      
        
        <div className="footer-socials">
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Music2 size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
        </div>
      </div>

      {/* Giant Gradient Text */}
      <div className="footer-giant-text-container">
        <h1 className="footer-giant-text">LINCOLN</h1>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lincoln Cars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


