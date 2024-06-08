import React from 'react';
import './HomeCards.css';

const HomeCards = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h1>{title}</h1>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default HomeCards;
