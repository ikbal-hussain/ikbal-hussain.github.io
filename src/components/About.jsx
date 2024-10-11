import React from 'react';
import '../styles/About.css'; // Adding new CSS for About section
import myImage from '../assets/myImage.jpeg'

const About = () => {
  return (
    <section id="about" className="about section about-section">
      <div className="content-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
        A Frontend Developer with expertise in React.js, JavaScript, HTML, and CSS. I’m passionate about building responsive, user-friendly web applications and have experience working on projects like an AI-powered resume builder and mobile-first platforms. With a strong foundation in full-stack development, I approach every challenge with a focus on clean, efficient code and a commitment to delivering high-quality solutions. Always eager to learn and grow, I thrive on pushing boundaries and collaborating with teams to create exceptional digital experiences.
        </p>
      </div>
      <div className="image-container">
        {/* Placeholder for your image, replace the src with your actual image link */}
        <img src={myImage} alt="About Me" className="about-image" />
      </div>
    </section>
  );
};

export default About;
