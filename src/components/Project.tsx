
import React from 'react';

interface ProjectProps {
  title: string;
  imgSrc: string;
  liveLink: string;
  repoLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, imgSrc, liveLink, repoLink }) => {
  return (
    <div className="portfolio-item">
      <img src={imgSrc} alt={title} className="portfolio-img" />
      <h3 className="portfolio-item-title">{title}</h3>
      <div className="portfolio-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live App
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
