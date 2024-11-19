// import React from "react";
import "../styles/Home.css"; // Adding new CSS for Home section
import { motion } from "framer-motion";
import portfolioCoverImage from '../assets/web dev portfolio image new.png'
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <section id="home" className="home-section full-screen">
      <div className="content-container">
        <h1 id="user-detail-name" className="main-heading">
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 100 }}
            transition={{ duration: 1 }}
          > */}
          <div>
            Hi! I am Ikbal Hussain
            </div>
          {/* </motion.div> */}
        </h1>
        <p id="user-detail-intro" className="sub-heading">
          
          A passionate {" "} 
          <ReactTypingEffect
                text={[" web developer ", " frontend developer ", " full stack developer "]}
                speed={100}     // Speed of typing
                eraseSpeed={50} // Speed of erasing
                eraseDelay={2000} // Delay before erasing starts
                typingDelay={500} // Delay before typing starts
            />
         
         
        </p>
      </div>
      <div className="image-container">
        <img src={portfolioCoverImage} alt="" />
      </div>
    </section>
  );
};

export default Home;
