import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../AnimalModal/Modal';
import './AnimalDetails.css';

const AnimalDetails = () => {
  const { animalType, animalId } = useParams();
  const [animal, setAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/${animalType}/${animalId}`);
        console.log('Animal data:', response.data); 
        setAnimal(response.data);
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };
    fetchAnimal();
  }, [animalType, animalId]);

  console.log('Animal type:', animalType); 

  if (!animal) return <p>Loading...</p>;

  const handleCardClick = (animal) => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div onClick={handleCardClick}>
        <img src={animal.image} alt={animal.name} className='imageGallery' />
        <h3>{animal.name}</h3>
        {animalType === 'birds' ? (
          <p>Place of Found: {animal.place_of_found}</p>
        ) : (
          <p>Origin: {animal.origin}</p>
        )}
      </div>
      {isModalOpen && <Modal animal={animal} onClose={handleCloseModal} animalType={animalType} />}
      <Footer />
    </div>
  );
};

export default AnimalDetails;
