import React from "react";
import "../styles/Home.css"; // Adding new CSS for Home section
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="home-section full-screen">
      <div className="content-container">
        <h1 id="user-detail-name" className="main-heading">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 100 }}
            transition={{ duration: 1 }}
          >
            Hi! I am Ikbal Hussain
          </motion.div>
        </h1>
        <p id="user-detail-intro" className="sub-heading">
          A passionate web developer ready to take on new challenges!
        </p>
      </div>
      <div className="image-container"></div>
    </section>
  );
};

export default Home;
