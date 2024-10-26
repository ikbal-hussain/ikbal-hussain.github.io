import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
// import myresume from '/IkbalHussain-resume.pdf'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
      "resume",
    ];
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);

      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed-nav">
      <div className="nav-header">
        <h1 className="logo">MyPortfolio</h1>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className={`nav-link home ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-link about ${
              activeSection === "about" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`nav-link skills ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`nav-link projects ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-link contact ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const newTab = window.open("/IkbalHussain-resume.pdf", "_blank");
              if (newTab) {
                newTab.focus();
              }
              const link = document.createElement("a");
              link.href = "/IkbalHussain-resume.pdf";
              link.setAttribute("download", "IkbalHussain_Resume.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className={`nav-link resume ${
              activeSection === "resume" ? "active" : ""
            }`}
          >
            Resume
            <FontAwesomeIcon
              icon={faDownload}
              className="download-icon"
              style={{ marginLeft: "8px" }}
            />
          </a>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="menu-icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
