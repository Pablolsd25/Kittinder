import React from 'react';
import './CatCard.css'; // Importamos nuestro archivo de estilos

function CatCard(props) {
    return (
        <div className="cat-card-container">
          <div className="cat-card">
            <img src={props.imageUrl} alt="Imagen de gato" className="cat-image" />
            <div className="card-content">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      );
    }
    
    export default CatCard;