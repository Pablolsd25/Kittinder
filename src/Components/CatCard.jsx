import React from 'react';
import './CatCard.css';
import mascotasImg from '../assets/mascotas.png';

function CatCard(props) {
  const handleButtonClick = () => {
    props.onButtonClick();
  };

  return (
    <div className="cat-card-container">
      <div className="cat-card">
        <img src={props.imageUrl} alt="Imagen de gato" className="cat-image" />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <img
            src={props.buttonImage || mascotasImg}
            alt=""
            onClick={handleButtonClick}
            className="button-image"
          />
        </div>
      </div>
    </div>
  );
}

export default CatCard;