import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ animal, onClose, animalType }) => {
  if (!animal) return null;

  const renderDetails = () => {
    switch (animalType) {
      case 'dogs':
        return (
          <>
            <p>Breed Group: {animal.breed_group || 'N/A'}</p>
            <p>Size: {animal.size || 'N/A'}</p>
            <p>Lifespan: {animal.lifespan || 'N/A'}</p>
            <p>Origin: {animal.origin || 'N/A'}</p>
            <p>Temperament: {animal.temperament || 'N/A'}</p>
            <p>Colors: {Array.isArray(animal.colors) ? animal.colors.join(', ') : 'N/A'}</p>
            <p>Description: {animal.description || 'N/A'}</p>
          </>
        );
      case 'cats':
        return (
          <>
            <p>Origin: {animal.origin || 'N/A'}</p>
            <p>Temperament: {animal.temperament || 'N/A'}</p>
            <p>Colors: {Array.isArray(animal.colors) ? animal.colors.join(', ') : 'N/A'}</p>
            <p>Description: {animal.description || 'N/A'}</p>
          </>
        );
      case 'birds':
        return (
          <>
            <p>Species: {animal.species || 'N/A'}</p>
            <p>Family: {animal.family || 'N/A'}</p>
            <p>Habitat: {animal.habitat || 'N/A'}</p>
            <p>Place of Found: {animal.place_of_found || 'N/A'}</p>
            <p>Diet: {animal.diet || 'N/A'}</p>
            <p>Weight (kg): {animal.weight_kg || 'N/A'}</p>
            <p>Height (cm): {animal.height_cm || 'N/A'}</p>
            <p>Description: {animal.description || 'N/A'}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className='modal-details'>
          <img className='modal-image' src={animal.image} alt={animal.name} />
          <h1>{animal.name}</h1>
          <div className='details'>
            {renderDetails()}
          </div>
          
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    family: PropTypes.string,
    habitat: PropTypes.string,
    place_of_found: PropTypes.string,
    diet: PropTypes.string,
    description: PropTypes.string,
    weight_kg: PropTypes.number,
    height_cm: PropTypes.number,
    image: PropTypes.string,
    origin: PropTypes.string,
    temperament: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    breed_group: PropTypes.string,
    size: PropTypes.string,
    lifespan: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  animalType: PropTypes.string.isRequired,
};

export default Modal;
