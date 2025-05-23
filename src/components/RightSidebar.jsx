import { useState } from 'react';
import './RightSidebar.css';

import htmlLogo from '../assets/html.png';
import herokuLogo from '../assets/heroku.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/javascript.png';
import railsLogo from '../assets/ruby on rails.png';
import postgresLogo from '../assets/postgres.png';
import tailwindLogo from '../assets/tailwind.png';

export default function RightSidebar({ language }) {
  const [showTech, setShowTech] = useState(false);
  const [showResumeMenu, setShowResumeMenu] = useState(false);

  const stack = [
    { name: 'HTML5', icon: htmlLogo },
    { name: 'Heroku', icon: herokuLogo },
    { name: 'React', icon: reactLogo },
    { name: 'JavaScript', icon: jsLogo },
    { name: 'Rails', icon: railsLogo },
    { name: 'PostgreSQL', icon: postgresLogo },
    { name: 'Tailwind CSS', icon: tailwindLogo }
  ];

  return (
    <div className="right-sidebar">
      <button onClick={() => scrollToSection('projects')} className="sidebar-button">
        {language === 'en' ? 'Projects' : 'プロジェクト'}
      </button>

      <div className="resume-dropdown">
  <button onClick={() => setShowResumeMenu(!showResumeMenu)} className="sidebar-button">
   {language === 'en' ? (
  'Resume download ▼'
) : (
  <>
    履歴書/職務経歴書<br />
    ダウンロード ▼
  </>
)}

  </button>

  {showResumeMenu && (
    <div className="resume-menu">
      <a href="/Henry-santiago-FlowCV-Resume-20250414.pdf" download className="menu-item">
        📄 {language === 'en' ? 'English Resume' : '英語の履歴書'}
      </a>
      <a href="/rirekisho.pdf" download className="menu-item">
        📄 {language === 'en' ? 'Rirekisho (JP)' : '履歴書'}
      </a>
      <a href="/shokumu_keirekisho.pdf" download className="menu-item">
        📄 {language === 'en' ? 'Shokumu Keirekisho (JP)' : '職務経歴書'}
      </a>
    </div>
  )}
</div>


      <button onClick={() => setShowTech(!showTech)} className="sidebar-button">
        {language === 'en' ? 'Tech Stack' : '技術スタック'}
      </button>

      {showTech && (
        <div className="sidebar-tech-grid">
          {stack.map((tech) => (
            <div className="sidebar-tech-item" key={tech.name}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}
