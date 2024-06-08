import React, { useState } from 'react';
import axios from 'axios'; 
import AnimalCard from './AnimalCard'; 
import AnimalPopup from './AnimalPopup'; 

const AnimalCardList = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null); 
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = async (animalId) => {
    try {
      const response = await axios.get(`https://api.example.com/animals/${animalId}`);
      setSelectedAnimal(response.data); 
      setIsPopupOpen(true); 
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  return (
    <div>
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onClick={() => handleCardClick(animal.id)}
        />
      ))}
      {isPopupOpen && <AnimalPopup animal={selectedAnimal} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default AnimalCardList;
