import { useState } from "react";
import "../styles/LinkPreview.css"; 

/* eslint-disable-next-line no-undef, react/prop-types */
const LinkPreviewCard = ({ url, apiKey }) => {
  const [linkData, setLinkData] = useState(null);
  const [hover, setHover] = useState(false);

  const fetchLinkPreview = async () => {
    try {
      const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${url}`);
      const data = await response.json();
      setLinkData(data);
    } catch (error) {
      console.error("Error fetching link preview:", error);
    }
  };

  const handleMouseEnter = () => {
    setHover(true);
    if (!linkData) {
      fetchLinkPreview();
    }
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="link-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
       {url.includes('github')? "Github" : url.includes('netlify')? "Live Demo": "Visit"}
      </a>
      {hover && linkData && (
        <div className="link-preview">
          <img src={linkData.image || "https://community.atlassian.com/t5/image/serverpage/image-id/312931iA1E25CBEFD2C09ED/image-size/large?v=v2&px=999"} alt={linkData.title} className="preview-image" />
          <h4>{linkData.title.length < 16? linkData.title: linkData.title.slice(0, 26) + '...' }</h4>
          {/* <p>{linkData.description}</p> */}
        </div>
      )}
    </div>
  );
};

export default LinkPreviewCard;
