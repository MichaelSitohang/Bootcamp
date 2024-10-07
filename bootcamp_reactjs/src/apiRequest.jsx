import React, { useState } from 'react';
import axios from 'axios';

const UnsplashSearch = () => {
  const [query, setQuery] = useState('');

  const searchImage = async () => {
    const accessKey = 'lNa2gb8H2lkFzs7aC7w_P8IlrfmCqT4K9bkolqP7OXY'; 
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    try {
      const response = await axios.get(url);
      console.log('Response:', response.data); // Cek data di console dan network
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search image..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchImage}>Search</button>
    </div>
  );
};

export default UnsplashSearch;
