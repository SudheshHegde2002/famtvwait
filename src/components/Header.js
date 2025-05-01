import React from 'react';
import LanguageSelector from './LanguageSelector';

const Header = ({isMobile}) => {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} className="App-logo" alt="FarmTVStore logo" />
        <h1>FarmTVStore</h1>
      </div>
      {!isMobile && <LanguageSelector />}
    </header>
  );
};

export default Header; 