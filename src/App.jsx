import { useState } from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';
import SocialIcons from './components/SocialIcons';
import Livecode from './components/Livecode'; // Make sure this matches your filename

export default function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  return (
    <div className="app">
      {/* Language Switcher */}
      <div className="lang-switch" onClick={toggleLanguage}>
        {language === 'en' ? '日本語' : 'EN'}
      </div>

      {/* Contact and Social Icons */}
      <ContactInfo />
      <SocialIcons />

      {/* Main Content */}
      <div className="main-content">
        <AboutMe language={language} />
        <Livecode /> {/* 👈 Live Projects section */}
        <Footer />
      </div>

      {/* Right Sidebar */}
      <RightSidebar language={language} />
    </div>
  );
}
