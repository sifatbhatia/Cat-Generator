import axios from 'axios';
import React, { useState } from 'react';
import './CatGenerator.css';

const CatGenerator = () => {
  const [catUrl, setCatUrl] = useState('');

  const fetchCat = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif');
      setCatUrl(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     
      {catUrl && <img src={catUrl} alt="Random Cat" />}
      <button onClick={fetchCat}>Generate</button>
    </>
  );
};

export default CatGenerator;
