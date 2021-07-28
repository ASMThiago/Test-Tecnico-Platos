import React, { useState } from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import FavoriteDrinkCard from '../Cards/FavoritedDrinkCard';
import './RecipesFavorited.css'
const copy = require('clipboard-copy');

function copyToClipboard(id) {
  const text = `http://localhost:3000/${id}`;
  copy(text);
  document.getElementById('share-button').innerHTML = 'Link copiado!';
}

const removeFavorite = (id, favoriteRecipes, setDisplayRecipes, setFavoriteRecipes) => {

  const updateFavoriteRecipes = favoriteRecipes.filter((favorite) => favorite.id !== id)
  setFavoriteRecipes(updateFavoriteRecipes);
  localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavoriteRecipes));
  setDisplayRecipes(updateFavoriteRecipes);
};

const RecipesFavorited = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [],
  );
  const [displayRecipes, setDisplayRecipes] = useState(favoriteRecipes);

  return (
    <div class="container-favorite" className="container-favorite">
      {displayRecipes.map((recipe, index) => {
        return (
          <div className="border-card-favorite">
            <FavoriteDrinkCard drink={recipe} index={index} copyToClipboard={copyToClipboard} />
            <input
              className="icon-favorite"
              type="image"
              src={blackHeartIcon}
              alt="Favorite Button"
              onClick={() =>
                removeFavorite(recipe.id, favoriteRecipes, setDisplayRecipes, setFavoriteRecipes)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecipesFavorited;
