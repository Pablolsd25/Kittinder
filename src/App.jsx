import React, { useState, useEffect } from 'react';
import CatCard from './Components/CatCard';
import './App.css';
import logo from './assets/logo.png'

function App() {
  const [catImages, setCatImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=30')
      .then(response => response.json())
      .then(data => {
        setCatImages(data.map(cat => cat.url));
      })
      .catch(error => console.error(error));
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex(prevIndex => {
      const lastIndex = catImages.length - 1;
      const shouldResetIndex = prevIndex === 0;
      return shouldResetIndex ? lastIndex : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentImageIndex(prevIndex => {
      const lastIndex = catImages.length - 1;
      const shouldResetIndex = prevIndex === lastIndex;
      return shouldResetIndex ? 0 : prevIndex + 1;
    });
  };

  const handleLikeClick = () => {
    setLikedImages(prevLikedImages => [
      ...prevLikedImages,
      catImages[currentImageIndex]
    ]);
  };

  return (
    <div className="App">
      <img 
        src={logo}
        alt='logo-app'
        className='logo-app'
        />
      {catImages.length > 0 && (
        <CatCard
          imageUrl={catImages[currentImageIndex]}
          onPreviousClick={handlePrevClick}
          onNextClick={handleNextClick}
          onLikeClick={handleLikeClick}
          likedImages={likedImages}
        />
      )}
    </div>
  );
}

export default App;
