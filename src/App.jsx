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
    <div className="App">
      <h1>Imágenes de gatos</h1>
      <div className="container">
        {catImage && (
          <CatCard
            imageUrl={catImage}
            title="Gato aleatorio"
            description="Esta es una imagen de un gato aleatorio"
          />
        )}
        <button onClick={handleNewCatClick} disabled={isFetching}>
          {isFetching ? 'Cargando...' : 'Nuevo gato'}
        </button>
      </div>
    </div>
  );
}

export default App;