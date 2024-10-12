import React from 'react';
import "../styles/Contact.css"; // Importing the CSS file for styling

const Contact = () => {
   





  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <a href="https://github.com/ikbal-hussain" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <p>github.com/ikbal-hussain</p>
          </a>
        </div>
        <div className="contact-card">
          <a href="https://linkedin.com/in/ikbal-hussain-web-developer" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/ikbal-hussain</p>
          </a>
        </div>
        <div className="contact-card">
          <div>
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>+91 8133098968</p>
          </div>
        </div>
        <div className="contact-card">
          <a href="mailto:ikbalhussain3674@gmail.com">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>ikbalhussain3674@gmail.com</p>
          </a>
        </div>
      </div>
      <h3 id='thankyou-section'>Thank you for visiting my Portfolio</h3>
    </section>
  );
};

export default Contact;
