import { useState } from 'react';
import './ResumePopup.css';

export default function ResumePopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="resume-popup">
      <button className="resume-btn" onClick={() => setShowPopup(!showPopup)}>
        📄 {showPopup ? 'Hide Resumes' : 'Show Resumes'}
      </button>

      {showPopup && (
        <div className="popup-box">
          <a href="/resumes/english_resume.pdf" download>📄 English Resume</a>
          <a href="/resumes/rirekisho.pdf" download>📄 Rirekisho (JP)</a>
          <a href="/resumes/shokumu_keirekisho.pdf" download>📄 Shokumu Keirekisho (JP)</a>
        </div>
      )}
    </div>
  );
}
