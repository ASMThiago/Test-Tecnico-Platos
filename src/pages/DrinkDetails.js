import React, { useState, useEffect } from 'react';
import './styles/RecipeDetails.css';
import { fetchDrinkId } from '../services/fetchDrinks';
import IngredientList from '../components/RecipeDetails/IngredientList';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteDrink from '../components/RecipeDetails/FavoriteDrink';

function DrinkDetails(props) {
  const { id } = props.match.params;
  const [singleDrink, setSingleDrink] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrinkId(id).then((data) => {
      setSingleDrink(data);
      setLoading(false);
    });
  }, []);

  return loading || !singleDrink ? (
    <section>Loading...</section>
  ) : (
    <div className="card-details">
      <img className="img-details" src={singleDrink.strDrinkThumb} alt="Drink" />
      <div>
        <h1 className="title-details">{singleDrink.strDrink}</h1>
        <h3 className="subtitle-details">
          {singleDrink.strCategory} -{singleDrink.strAlcoholic}
        </h3>
        <IngredientList singleItem={singleDrink} />
        <p className="instructions-details">{singleDrink.strInstructions}</p>
      <div className="div-icons-details">
        <ShareButton />
        <FavoriteDrink recipe={singleDrink} />
      </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
