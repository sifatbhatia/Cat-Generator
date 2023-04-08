import React from 'react';
import './App.css';
import CatGenerator from './Components/CatGenerator';
function App() {
  return (
    <div className="App">
      <h1>Random Cat Generator</h1>
      <CatGenerator />
      <footer>
        <p>Made by <a href='https://siftion.com'>siftion</a></p>
      </footer>
    </div>
  );
}

export default App;