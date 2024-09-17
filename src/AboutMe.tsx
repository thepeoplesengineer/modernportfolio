import React from 'react';
import './AboutMe.css'; 
import { Link } from 'react-router-dom';
import profilePic from '../src/assets/img/professionalprofilepic.png'; // Import your profile picture

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-me-content">
          <h1>Let's Build Together.</h1>
          <h3>Full Stack – Programmer</h3>
          <p>
            I'm Sammy Kordi, a tech enthusiast with a strong foundation in leadership and business management. After spending several years leading teams, driving strategies, and managing high-impact projects in the business world, I’ve decided to pivot and immerse myself in the exciting world of tech development.

Why the switch? I’ve always believed in the power of technology to transform businesses and improve lives. As I led teams and shaped organizational strategies, I found myself increasingly drawn to the tech side of things—innovating, solving problems, and making processes more efficient. This passion pushed me to pursue a career in tech, where I can merge my leadership experience with a hands-on approach to creating solutions.

Now, as a developer, I’m focused on building sleek, functional applications that solve real-world problems. With a keen eye for detail and a drive for continuous improvement, I aim to bring the same level of leadership, accountability, and innovation to my work in tech as I did in business.

When I'm not coding or working on a new project, you’ll find me exploring the latest trends in tech, brainstorming ideas for innovative solutions, or enjoying time with family and friends.

Thanks for stopping by! Feel free to check out my work, and let's connect if you're interested in collaborating on exciting projects.
          </p>
          <Link to="/Contact" className="cta-btn">Let's Connect</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
