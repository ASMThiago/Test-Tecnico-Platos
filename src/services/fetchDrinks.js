// Fetch API de bebidas
export default function fetchDrinks(text = '', type = '') {
  let api = '';
  if (type === 'firstLetter') {
    api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text}`;
  } else {
    api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  }
  return fetch(api)
  .then((response) => response.json())
  .then((data) => data.drinks)
  .catch((error) => console.error(error));
}

export function fetchDrinkId(id) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.drinks[0])
    .catch((error) => console.error(error));
}
