import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="App-logo" alt="FarmTVStore logo" />
          <h1>FarmTVStore</h1>
        </div>
      </header>
      <main className="App-main">
        <h2>Under construction, Please wait</h2>
        <div className="App-download">
          <p>New to farm tv? Click here to download the App</p>
          <a href="https://farmtv.shramajeevi.com/" target="_blank" rel="noopener noreferrer">
            <button className="download-button">Download</button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
