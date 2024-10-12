import React from 'react';
import '../styles/About.css'; // Ensure the path is correct
import myImage from '../assets/myImage.jpeg';
import ScrollAnimation from 'react-animate-on-scroll'; // Import ScrollAnimation

const About = () => {
  return (
    <section id="about" className="about section about-section">
      <div className="content-container">
        <ScrollAnimation animateIn="fadeIn" delay={100}>
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeIn" delay={200}> */}
          <p className="section-description">
            A Frontend Developer with expertise in React.js, JavaScript, HTML, and CSS. I’m passionate about building responsive, user-friendly web applications and have experience working on projects like an AI-powered resume builder and mobile-first platforms. With a strong foundation in full-stack development, I approach every challenge with a focus on clean, efficient code and a commitment to delivering high-quality solutions. Always eager to learn and grow, I thrive on pushing boundaries and collaborating with teams to create exceptional digital experiences.
          </p>
        {/* </ScrollAnimation> */}
      </div>
      <div className="image-container">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img src={myImage} alt="About Me" className="about-image" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
