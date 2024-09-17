import React from 'react';
import './ResumeDownloadPage.css'; 

const ResumeDownloadPage: React.FC = () => {
  return (
    <div className="resume-download-page">
      <h1>Download My Resume</h1>
      <p>Click the link below to download my resume:</p>
      <a
        href="/resume.pdf" // Adjust this path to match where your file is located
        download="Sammy_Kordi_Resume.pdf" // Optional: The name of the file when downloaded
        className="download-link"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownloadPage;
