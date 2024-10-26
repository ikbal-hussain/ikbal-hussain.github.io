
import LinkPreviewCard from "./LinkPreviewCard"; // Import the LinkPreviewCard component
import "../styles/Projects.css";
import resumeflowLogo from "../assets/resumeFlow_dashboard.png";
import sportstyleLogo from "../assets/Sportstyle-home-page.png";
import propertypulseLogo from "../assets/PropertyPulse Screenshot 1.png";
import ReactTypingEffect from "react-typing-effect";
// import { env } from "process";

 const apiKey = import.meta.env.VITE_LINK_PREVIEW_API_KEY;
if (!apiKey) {
  console.error("API key is missing. Make sure it is defined in the .env file.");
}


// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    title: "PropertyPulse",
    description:
      "A real estate web application allowing users to explore properties with search, filtering, and sorting features.",
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Git", "Redux"],
    github: "https://github.com/ikbal-hussain/Quantum_Qubits_027",
    deployed: "https://property-pulse-app-new.netlify.app/",
    image: propertypulseLogo,
  },
  {
    title: "ResumeFlow",
    description:
      "An AI-powered resume builder that ensures a smooth user experience with drag-and-drop components.",
    techStack: ["React", "Git", "JavaScript", "CSS3", "HTML5", "Gemini"],
    github: "https://github.com/ikbal-hussain/Function-Fencers-034",
    deployed: "https://resumeflow.netlify.app/",
    image: resumeflowLogo,
  },
  {
    title: "SportStyle",
    description:
      "SportStyle is an interactive e-commerce platform developed to showcase and manage a variety of sportswear and accessories.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Git"],
    github: "https://github.com/ikbal-hussain/Amendment-APIs_027.git",
    deployed: "https://sportstyle-reebok-inspired.netlify.app/",
    image: sportstyleLogo,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>
        <ReactTypingEffect
                text={["Projects", "Applications"]}
                speed={100}     // Speed of typing
                eraseSpeed={30} // Speed of erasing
                eraseDelay={2000} // Delay before erasing starts
                typingDelay={500} // Delay before typing starts
            />
        
        </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project?.description}</p>
            <p className="tech-stack">
              {project.techStack.map((techStackItem, idx) => (
                <span key={idx}>{techStackItem}</span>
              ))}
            </p>
            <div className="project-links">
              <LinkPreviewCard url={project.github} apiKey={apiKey} />
              <LinkPreviewCard url={project.deployed} apiKey={apiKey} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
