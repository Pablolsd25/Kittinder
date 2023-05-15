import React from 'react';
import './CatCard.css';
import mascotasImg from '../assets/mascotas.png';
import izquierdaImg from '../assets/izquierda.png';
import derechaImg from '../assets/derecha.png';

function CatCard(props) {
  const handlePreviousClick = () => {
    props.onPreviousClick();
  };

  const handleNextClick = () => {
    props.onNextClick();
  };

  const handleLikeClick = () => {
    props.onLikeClick();
  };

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
            <img
              src={mascotasImg}
              alt="Botón de corazón"
              onClick={handleLikeClick}
              className="button-image-small heart-button-small"
            />
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
