import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../AnimalModal/Modal';
import './Gallery.css';

const Gallery = ({ animalType }) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        let apiUrl = '';
        switch (animalType) {
          case 'dogs':
            apiUrl = 'https://freetestapi.com/api/v1/dogs';
            break;
          case 'cats':
            apiUrl = 'https://freetestapi.com/api/v1/cats';
            break;
          case 'birds':
            apiUrl = 'https://freetestapi.com/api/v1/birds';
            break;
          default:
            apiUrl = '';
        }
        const response = await axios.get(apiUrl);
        setAnimals(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching animals:', error);
        setError('Failed to fetch animals');
        setLoading(false);
      }
    };
    fetchAnimals();
  }, [animalType]);

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>{animalType.toUpperCase()}</h1>
      <input
        type="text"
        placeholder={`Search ${animalType} by name`}
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="gallery-container">
        {filteredAnimals.map(animal => (
          <div key={animal.id} onClick={() => handleCardClick(animal)} className="animal-card">
            <img src={animal.image} alt={animal.name} className='imageGallery' />
            <div className="card-details">
              <h3>{animal.name}</h3>
              {animalType === 'birds' ? (
                <p>Place of Found: {animal.place_of_found}</p>
              ) : (
                <p>Origin: {animal.origin}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedAnimal && <Modal animal={selectedAnimal} onClose={handleCloseModal} animalType={animalType} />}
      <Footer />
    </div>
  );
};

export default Gallery;
