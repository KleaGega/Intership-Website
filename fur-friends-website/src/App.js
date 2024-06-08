import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/pages/Homepage/Homepage';
import GalleryPage from './Components/Gallery/Gallery';
import AnimalDetails from './Components/AnimalDetails/AnimalDetails'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dogs" element={<GalleryPage animalType="dogs" />} />
          <Route path="/cats" element={<GalleryPage animalType="cats" />} />
          <Route path="/birds" element={<GalleryPage animalType="birds" />} />
          <Route path="/:animalType/:animalId" element={<AnimalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
