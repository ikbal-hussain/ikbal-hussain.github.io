import React from "react";
import "../styles/Projects.css"; // Importing the CSS file for styling
import resumeflowLogo from "../assets/resumeFlow_dashboard.png";
import sportstyleLogo from "../assets/Sportstyle-home-page.png";
// import infohubLogo from "../assets/Sportstyle-home-page.png";
import propertypulseLogo from "../assets/PropertyPulse Screenshot 1.png";
const projects = [
  {
    title: "PropertyPulse",
    description:
      "A real estate web application allowing users to explore properties with search, filtering, and sorting features.",
    techStack: ["JavaScript", "CSS3", "HTML5", "Git"],
    github: "https://github.com/ikbal-hussain/Quantum_Qubits_027", // Replace with actual GitHub link
    deployed: "https://property-pulse-app-new.netlify.app/", // Replace with actual deployed link
    image: propertypulseLogo, // Replace with your image path or URL
  },
  {
    title: "ResumeFlow",
    description:
      "An AI-powered resume builder that ensures a smooth user experience with drag-and-drop components.",
    techStack: ["React", "Git", "JavaScript", "CSS3", "HTML5", "Gemini"],
    github: "https://github.com/ikbal-hussain/Function-Fencers-034", // Replace with actual GitHub link
    deployed: "https://resumeflow.netlify.app/", // Replace with actual deployed link
    image: resumeflowLogo, // Replace with your image path or URL
  },
  {
    title: "SportStyle",
    description:
      "SportStyle is an interactive e-commerce platform developed to showcase and manage a variety of sportswear and accessories.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Git"],
    github: "https://github.com/ikbal-hussain/Amendment-APIs_027.git", // Replace with actual GitHub link
    deployed: "https://sportstyle-reebok-inspired.netlify.app/", // Replace with actual deployed link
    image: sportstyleLogo, // Replace with your image path or URL
  },
  //   {
  //     title: "Viatours Page Clone",
  //     description: "A responsive web page developed from Figma designs using HTML5 and CSS3.",
  //     techStack: ["Figma", "HTML5", "CSS3", "Bootstrap"],
  //     github: "https://github.com/rajatsah95/Tesla_Techies_038", // Replace with actual GitHub link
  //     deployed: "https://figma-project-design.netlify.app/", // Replace with actual deployed link
  //     image: propertypulseLogo // Replace with your image path or URL
  //   }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              {project.techStack.map((techStackItem) => <span>{techStackItem}</span>)}
            </p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
