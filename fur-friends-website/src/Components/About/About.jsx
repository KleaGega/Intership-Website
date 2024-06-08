import React from 'react'
import './About.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import aboutImage from '../Assets/about.jpg';

function About() {
  return (
    <div>
      <section id="about-us"> 
            <div className='about-container' style={{ backgroundImage: `url(${aboutImage})` }}>
          <h1>About Us</h1>
          <p>Welcome to Fur Friends, where every paw, feather, and tail is cherished!
            We are passionate animal lovers dedicated to celebrating the unique bond between pets and their owners.
            Our mission is to provide a vibrant community and comprehensive resources for all things related to cats,
            dogs, and birds.</p>
        </div>
        <div className='content-about'>
          <div className='card'>
            <h2>For Cat Lovers</h2>
            <p>Whether you have a playful kitten or a regal senior cat, our feline section offers everything from health tips and nutrition advice to grooming techniques and behavior insights. Discover the best toys, scratching posts, and cozy beds to keep your cat purring with happiness. 
            "Cat lovers are individualistic." </p>
          </div>
          <div className='card'>
            <h2>For Dog Enthusiasts</h2>
            <p>From loyal puppies to wise old dogs, we provide a wealth of information on training, diet, exercise, and healthcare. Explore our recommendations for the best dog parks, training tools, and accessories to ensure your dog leads a joyful and active life.</p>
          </div>
          <div className='card'>
            <h2>For Bird Aficionados</h2>
            <p>Birds bring color and song into our lives. Our bird section covers a wide range of topics, including species-specific care, diet, habitat enrichment, and training. Learn how to create a stimulating environment that keeps your feathered friend chirping and happy.</p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default About
