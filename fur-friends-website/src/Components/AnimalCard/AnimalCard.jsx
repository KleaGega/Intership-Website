import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';
import Modal from '../AnimalModal/Modal';

const AnimalCard = ({ animal, animalType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={animal.image} alt={animal.name} />
      <h1>{animal.name}</h1>
      {isModalOpen && <Modal animal={animal} onClose={() => setIsModalOpen(false)} animalType={animalType} />}
    </div>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
  animalType: PropTypes.string.isRequired,
};

export default AnimalCard;
