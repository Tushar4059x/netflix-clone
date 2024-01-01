import cImage from '../../assets/card-image.png'
import React from 'react';

const MovieCard = ({ title, description, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
