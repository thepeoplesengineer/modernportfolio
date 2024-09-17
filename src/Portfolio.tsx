import React from 'react';
import './Portfolio.css';
import Project from './components/Project.tsx'; 


import cardioTrackerImg from '../src/assets/img/Cardiotracker.png';
import readmeGenImg from '../src/assets/img/readmegenlogo.jpg';
import vehicleGameImg from '../src/assets/img/vehicleclilogo.jpg';
import employeeTrackerImg from '../src/assets/img/employeetrackerlogo.jpg';
import weatherApiImg from '../src/assets/img/weatherapilogo.jpg';
import legacyImg from '../src/assets/img/legacylogo.jpg';

const portfolioItems = [
  
  {
    title: 'README Generator',
    imgSrc: readmeGenImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/thepeoplesengineer/readme-creator',
  },
  {
    title: 'Vehicle CLI Mini-Game',
    imgSrc: vehicleGameImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/thepeoplesengineer/cli_car_app',
  },
  {
    title: 'Employee Data Tracker',
    imgSrc: employeeTrackerImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/thepeoplesengineer/employeedatatracker',
  },
  {
    title: 'Legacy',
    imgSrc: legacyImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/your-repo-link',
  },
  {
    title: 'Weather API',
    imgSrc: weatherApiImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/thepeoplesengineer/simplecardioprogresstracker',
  },
  {
    title: 'Workout Tracker',
    imgSrc: cardioTrackerImg,
    liveLink: 'https://your-deployed-app-link.com',
    repoLink: 'https://github.com/thepeoplesengineer/simplecardioprogresstracker',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Recent Work</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <Project
            key={index}
            title={item.title}
            imgSrc={item.imgSrc}
            liveLink={item.liveLink}
            repoLink={item.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
