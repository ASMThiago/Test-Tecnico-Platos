import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteCards.css';

const FavoritedDrinkCard = (props) => {
  const { drink } = props;
  return (
    <div className="recipe-card-favorite">
      <Link to={`/${drink.id}`}>
        <img
          src={drink.image}
          alt="bebida"
        />
        <h3>{drink.name}</h3>
      </Link>
    </div>
  );
};

export default FavoritedDrinkCard;
