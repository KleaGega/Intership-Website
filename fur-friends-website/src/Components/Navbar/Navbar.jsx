import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const animal = event.target.value;
    setSelectedAnimal(animal);
    if (animal) {
      navigate(`/${animal}`);
    }
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav_container ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p className="logoName">PET EXPO</p>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <select id="animals" value={selectedAnimal} onChange={handleSelectChange}>
            <option value="">Select an animal</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="birds">Birds</option>
          </select>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
