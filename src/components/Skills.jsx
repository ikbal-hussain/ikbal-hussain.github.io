import { useState } from "react";
import "../styles/Skills.css"; // Importing the CSS file for styling
import ScrollAnimation from 'react-animate-on-scroll';
import chakraUiLogo from '../assets/chakra-ui-logo.png';
import tailwindcssLogo from '../assets/tailwindcss-logo.png';
import { projects } from "./Projects"; // Import your projects data
import ReactTypingEffect from 'react-typing-effect'
const skills = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    projects: []
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    projects: ["Project C", "Project D"]
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    projects: ["AI Resume Builder", "E-commerce Platform"]
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    projects: ["Backend API", "Real-time Chat App"]
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    projects: ["RESTful API", "Blog Platform"]
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    projects: ["State Management Demo", "E-commerce Platform"]
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    projects: ["Landing Page", "Portfolio Website"]
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    projects: ["Landing Page", "Web App UI"]
  },
  {
    name: "Chakra UI",
    logo: chakraUiLogo,
    projects: ["Dashboard UI", "Admin Panel"]
  },
  {
    name: "Tailwind CSS",
    logo: tailwindcssLogo,
    projects: ["Landing Page", "Blog Template"]
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    projects: ["Data Management", "Real-time Chat App"]
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredSkillProjects, setHoveredSkillProjects] = useState([]);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill.name);
    const matchingProjects = projects.filter((project) =>
      project.techStack.includes(skill.name)
    );
    setHoveredSkillProjects(matchingProjects);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    setHoveredSkillProjects([]);
  };

  return (
    <section id="skills" className="skills-section">
      <h2>
      <ReactTypingEffect
                text={["Skills"]}
                speed={100}     // Speed of typing
                eraseSpeed={50} // Speed of erasing
                eraseDelay={2000} // Delay before erasing starts
                typingDelay={500} // Delay before typing starts
            />
        
        </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <ScrollAnimation 
            key={index} 
            animateIn="zoomIn" // Choose animation type (e.g., fadeIn, zoomIn)
            delay={index * 100}  // Optional: Stagger the delay
          >
            <div
              className="skill-card"
              onClick={() => handleMouseEnter(skill)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.logo} alt={`${skill.name} Logo`} />
              <h3>{skill.name}</h3>
              {hoveredSkill === skill.name && (
                (skill.projects.length > 0 || hoveredSkillProjects.length > 0) && (
                  <div className="project-tooltip">
                    <h4>Projects using {skill.name}:</h4>
                    <ul>
                      {hoveredSkillProjects.length > 0 ? (
                        hoveredSkillProjects.map((project, i) => (
                          <li key={i}>{project.title}</li>
                        ))
                      ) : (
                        skill.projects.map((project, i) => (
                          <li key={i}>{project}</li>
                        ))
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
