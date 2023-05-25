import React, { useState } from 'react';
import './CatCard.css';
import mascotasImg from '../assets/mascotas.png';
import izquierdaImg from '../assets/izquierda.png';
import derechaImg from '../assets/derecha.png';
import corazonImg from '../assets/mascota.png'

function CatCard(props) {
  const [showHeart, setShowHeart] = useState(false);
   const [isLiked, setIsLiked] = useState(false);

  const handlePreviousClick = () => {
    props.onPreviousClick();
  };

  const handleNextClick = () => {
    props.onNextClick();
  };

  const handleLikeClick = () => {
    setIsLiked(true);
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
      props.onNextClick(); // Pasa a la siguiente imagen
    }, 1000);
    props.onLikeClick();
  }

  return (
    <div className="cat-card-container">
      <div className="cat-card-small">
        <img src={props.imageUrl} alt="Imagen de gato" className="cat-image-small" />
        <div className="card-content-small">
          <div className="card-buttons-small">
            <img
              src={izquierdaImg}
              alt="Botón de retroceder"
              onClick={handlePreviousClick}
              className="button-image-small"
            />
            {showHeart ? (
  <img
    src={corazonImg}
    alt="Corazón"
    className="button-image-small heart-image-small"
  />
) : (
  <img
    src={mascotasImg}
    alt="Botón de corazón"
    onClick={handleLikeClick}
    className="button-image-small heart-button-small"
  />
)}
           
            <img
              src={derechaImg}
              alt="Botón de avanzar"
              onClick={handleNextClick}
              className="button-image-small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
