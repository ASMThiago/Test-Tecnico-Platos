import React, { useContext, useState } from 'react';

import fetchDrinks from '../../services/fetchDrinks';
import DrinkContext from '../../context/DrinkContext';

let timeOut = null;
const filterRecipes = (text, filter, fetch, request) => {
  clearTimeout(timeOut);
  if (filter === 'firstLetter' && text.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    fetch(text, filter).then((data) => request(data));
  }
};


const filterTimeOut = (text, filter, fetch, request) => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    filterRecipes(text, filter, fetch, request)
  }, 3000)
}


function SearchBar() {
  const { requestDrinks } = useContext(DrinkContext);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [time, setTime] = useState(true)
  
  const searchEvent = (e) => {
    setSearchText(e.target.value)
    filterTimeOut(searchText, selectedFilter, fetchDrinks, requestDrinks)
  }

  return (
    <section className="header-search-container">
      <form className="header-search-form">
      <input
        type="text"
        placeholder="Buscar Receitas"
        onChange={(event) => searchEvent(event)}
        value={searchText}
      />
      <label htmlFor="nome">Nome</label>
      <input
        type="radio"
        name="pesquisar"
        id="nome"
        value="name"
        onChange={(event) => setSelectedFilter(event.target.value)}
      />
      <label htmlFor="letra">Primeira Letra</label>
      <input
        type="radio"
        name="pesquisar"
        id="letra"
        value="firstLetter"
        onChange={(event) => setSelectedFilter(event.target.value)}
      />
    </form>
      <button
        className="btn btn-search"
        type="button"
        onClick={() => {
          filterRecipes(searchText, selectedFilter, fetchDrinks, requestDrinks);
        }}
      >
        Buscar
      </button>
    </section>
  );
}

export default SearchBar;
