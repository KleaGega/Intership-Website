import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <i className="bx bxs-shopping-bags footer__logo-icon"></i> PET EXPO
          </a>
          <p className="footer__description">Discover amazing pets<br /> just for you.</p>
          <div className="footer__social">
            <a href="#" className="footer__social-link"><FaFacebook /></a>
            <a href="#" className="footer__social-link"><FaInstagram /></a>
            <a href="#" className="footer__social-link"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About</h3>
          <ul className="footer__links">
            <li><a href="#about-us" className="footer__link">About Us</a></li>
            <li><a href="#" className="footer__link">Customer Support</a></li>
            <li><a href="#" className="footer__link">Support Center</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Company</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Home</a></li>
            <li><a href="#about-us" className="footer__link">About Us</a></li>
            <li><a href="#contact-us" className="footer__link">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
    </footer>
  );
};

export default Footer;
