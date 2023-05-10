import React, { useState, useEffect } from 'react';
import CatCard from './Components/CatCard';
import './App.css';

function App() {
  const [catImage, setCatImage] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const handleNewCatClick = () => {
    setIsFetching(true);
  };

  useEffect(() => {
    setIsFetching(true);
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        setCatImage(data[0].url);
        setIsFetching(false);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (isFetching) {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
          setCatImage(data[0].url);
          setIsFetching(false);
        })
        .catch(error => console.error(error));
    }
  }, [isFetching]);

  return (
    <div className='main-container'>
    <div className="App">
      
        {catImage && (
          <CatCard
            imageUrl={catImage}
            title="Gato aleatorio"
            description="Esta es una imagen de un gato aleatorio"
            buttonLabel="Nuevo gato"
            onButtonClick={handleNewCatClick} // Agrega la función de manejo de eventos al botón
          />
        )}
      
    </div>
  </div>
  );
}

export default App;