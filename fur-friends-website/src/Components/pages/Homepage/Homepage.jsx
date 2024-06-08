import React from 'react';
import Navbar from '../../Navbar/Navbar';
import About from '../../About/About';
import CardHome from '../../Services/HomeCards';
import dogs from '../../Assets/dogs.jpeg';
import cat from '../../Assets/catImage.jpg';
import bird from '../../Assets/birdImage.jpg';
import Contact from '../../Contact/Contact';
import Carousel from '../../Carousel/Carousel';

import './Homepage.css';
import Footer from '../../Footer/Footer';

function Homepage() {
  return (
    <div>
      <Navbar />
      <Carousel /> 
      <section>
        <div className="main_container">
          <h1>PET EXPO</h1>
          <h5>
            Cats, dogs, and birds: each a unique marvel of nature, each with its own charm and allure.<br />
            Cats, graceful and enigmatic, dogs, loyal and affectionate, birds, vibrant and melodious.
            Together, they grace our lives with their presence, filling our days with joy, laughter, and boundless love.
          </h5>
        </div>
      </section>
      <About />
      <section className='facts-container'>
        <div className='facts'>
          <h1>Fun Facts</h1>
          <h5>Did you know? Learn more about animals through these cards of interesting facts!</h5>
          <div className="card-container">
            <CardHome
              title="Dogs' Sense of Smell"
              description="A dog’s sense of smell is at least 40x better than a human’s. They have 300 million olfactory receptors in their noses, compared to about 6 million in humans."
              image={dogs}
            />
            <CardHome
              title="Whiskers as Sensors"
              description="Cats' whiskers are highly sensitive and can detect even the slightest changes in their environment. They use their whiskers to navigate and judge the width of openings."
              image={cat}
            />
            <CardHome
              title="Bird Songs"
              description="Birds use songs to communicate. Different species have their own unique calls and songs used for attracting mates, marking territory, or signaling alarm."
              image={bird}
            />
          </div>
        </div>
      </section>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Homepage;
