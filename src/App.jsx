import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Imágenes de gatos</h1>
      <img src={catImage} alt="Imagen de gato" />
      <br />
      <button onClick={handleNewCatClick} disabled={isFetching}>
        {isFetching ? 'Cargando...' : 'Nuevo gato'}
      </button>
    </div>
  );
}

export default App;