import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';
import LanguageSelector from './LanguageSelector';

const MainContent = ({isMobile}) => {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <main className="App-main">
      {isMobile && <LanguageSelector />}
      <h2>{text.underConstruction}</h2>
      <div className="App-download">
        <p>{text.downloadText}</p>
        <a href="https://farmtv.shramajeevi.com/" target="_blank" rel="noopener noreferrer">
          <button className="download-button">{text.downloadButton}</button>
        </a>
      </div>
    </main>
  );
};

export default MainContent; 