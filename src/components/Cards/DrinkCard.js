import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.css';

const DrinkCard = ({ drink }) => (
  <Link to={`/${drink.idDrink}`}>
    <div key={drink.idDrink} className="recipe-card">
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt="Drink" />
    </div>
  </Link>
);

export default DrinkCard;
