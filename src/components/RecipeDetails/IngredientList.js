import React from 'react';
import '../../pages/styles/RecipeDetails.css'

function IngredientList(props) {
  console.log(props.singleItem)
  const ingredients = Object.entries(props.singleItem).filter(([key, value]) => 
      key.includes('Ingredient') &&
      value !== null
    )
    .map((value) => value[1])

  const measures = Object.entries(props.singleItem).filter(([key, value]) => 
      key.includes('Measure') &&
      value !== null
    )
    .map((value) => value[1])

  return (
    <ul className="ul-details">
      {ingredients.map((ingredient, index) => (
        measures[index] === null ? (
          <li className="li-details">{ingredient}</li>
        ) : (
          <li className="li-details">{`${ingredient} - ${measures[index]}`}</li>
        )),
      )}
    </ul>
  );
}

export default IngredientList;
