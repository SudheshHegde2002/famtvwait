import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        className={language === 'en' ? 'active' : ''} 
        onClick={() => toggleLanguage('en')}
      >
        English
      </button>
      <button 
        className={language === 'kn' ? 'active' : ''} 
        onClick={() => toggleLanguage('kn')}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};

export default LanguageSelector; 