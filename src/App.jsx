import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [catImage, setCatImage] = useState('')
  useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data =>setCatImage(data[0].url))
    .catch(error=>console.error(error));
  
  },[]);

  return (
    
    <>
    <h1>Renderizando imagenes de gatos</h1>
    <img src={catImage} alt="img-cat"/>
    </>
  )
}

export default App
