import React, { useContext } from 'react';

import DrinkContext from '../../context/DrinkContext';

function SearchForm() {
  const { updateSearchText, updateSelectedFilter, searchText } = useContext(DrinkContext);

  return (
    <form className="header-search-form">
      <input
        type="text"
        placeholder="Buscar Receitas"
        onChange={(event) => updateSearchText(event)}
        value={searchText}
      />
      <label htmlFor="nome">Nome</label>
      <input
        type="radio"
        name="pesquisar"
        id="nome"
        value="name"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="letra">Primeira Letra</label>
      <input
        type="radio"
        name="pesquisar"
        id="letra"
        value="firstLetter"
        onChange={(event) => updateSelectedFilter(event)}
      />
    </form>
  );
}

export default SearchForm;
