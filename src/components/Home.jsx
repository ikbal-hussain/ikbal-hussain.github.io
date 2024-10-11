import React from 'react';
import '../styles/Home.css'; // Adding new CSS for Home section
import portfolioImage from '../assets/portfolio-image-home.jpg'; 
const Home = () => {
  return (
    <section id="home" className="home-section full-screen">
      <div className="content-container">
        <h1 id="user-detail-name" className="main-heading">Hi! I am Ikbal Hussain</h1>
        <p id="user-detail-intro" className="sub-heading">A passionate web developer ready to take on new challenges!</p>
      </div>
      <div className="image-container">
        {/* Placeholder for 3D image, replace the src with the actual 3D image link */}
        {/* <img src="https://codewithsadee.github.io/annie/assets/images/hero-banner.png" alt="Developer" className="three-d-image" /> */}
        <img src={portfolioImage} alt="Developer" className="three-d-image" />
      </div>
      
    </section>
  );
};

export default Home;
