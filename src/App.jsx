import { useState } from 'react';
import './index.css';
import AboutMe from './components/AboutMe';
import RightSidebar from './components/RightSidebar';
import CarouselSection from './components/carousel';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';
import SocialIcons from './components/SocialIcons';

export default function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  return (
    <div className="app">
      {/* Centered language switcher */}
      <div className="lang-switch" onClick={toggleLanguage}>
        {language === 'en' ? '日本語' : 'EN'}
      </div>

      <ContactInfo />
      <SocialIcons />

      <div className="main-content">
        <AboutMe language={language} />
        <CarouselSection language={language} />
        <Footer />
      </div>

      <RightSidebar language={language} />
    </div>
  );
}
