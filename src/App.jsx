import React from 'react';
import './App.css';
import CatGenerator from './Components/CatGenerator';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <h1>MeowGen</h1>
        <p className="tagline">Where every cat is a masterpiece</p>
        <div className="main-content">
          <CatGenerator />
        </div>
      </div>
      <footer>
        <p>Made with ❤️ by <a href='https://siftion.com'>siftion</a></p>
      </footer>
    </div>
  );
}

export default App;