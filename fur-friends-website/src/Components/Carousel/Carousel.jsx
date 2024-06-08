import React from 'react'
import './Carousel.css';
import animal from '../Assets/animal.jpg'; 
import cat from '../Assets/cat.jpg';
import bird from '../Assets/bird.jpg';
const Carousel =() => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ backgroundImage: `url(${animal})` }}>
            <div className="carousel-caption">
              <h4>"Animals are the bridge between us and the beauty of all that is natural. 
                They show us what's missing in our lives, and how to love ourselves more completely and unconditionally..."
              </h4>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${cat})` }}>
            <div className="carousel-caption">
              <h4>"An animal's eyes have the power to speak a great language."</h4>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${bird})` }}>
            <div className="carousel-caption">
              <h4>"Until one has loved an animal, a part of one's soul remains unawakened..."</h4>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}


export default Carousel;
