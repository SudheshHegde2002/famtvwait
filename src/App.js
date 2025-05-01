import React, { useState, useEffect } from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Header isMobile={isMobile} />
        <MainContent isMobile={isMobile} />
      </div>
    </LanguageProvider>
  );
}

export default App;
