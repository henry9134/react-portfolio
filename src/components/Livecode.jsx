import React from 'react';
import debatify from '../assets/debatify.png';
import flashcard from '../assets/flashcard.png';
import airfriends from '../assets/airfriends.png';
import jobtracker from '../assets/jobtracker.png'; // 👈 Add this line
import './Livecode.css';

export default function Livecode() {
  const projects = [
    {
      name: 'Debatify',
      link: 'https://debatify-henry-0be005f41a30.herokuapp.com/',
      image: debatify,
    },
    {
      name: 'Flashcard App',
      link: 'https://flashcard-app-nine-chi.vercel.app',
      image: flashcard,
    },
    {
      name: 'Airfriends',
      link: 'https://airfriends-henry-967cf28bbdaf.herokuapp.com/',
      image: airfriends,
    },
    {
      name: 'Job Tracker',
      link: 'https://job-tracker-app-1-22281bdb13d3.herokuapp.com/',
      image: jobtracker,
    },
  ];

  return (
    <div id="projects" className="livecode-section">
      <h2>Live demos</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.name} className="project-img" />
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
