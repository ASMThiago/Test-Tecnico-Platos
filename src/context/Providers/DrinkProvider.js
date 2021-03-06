import React, { useState } from 'react';
import DrinkContext from '../DrinkContext';

function DrinkProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [drinks, setDrinks] = useState([]);

  const requestDrinks = (data) => setDrinks(data);

  const updateSearchText = (event) => setSearchText(event.target.value);

  const updateSelectedFilter = (event) => setSelectedFilter(event.target.value);

  const contextValue = {
    drinks,
    requestDrinks,
    searchText,
    updateSearchText,
    selectedFilter,
    updateSelectedFilter,
  };

  return <DrinkContext.Provider value={contextValue}>{children}</DrinkContext.Provider>;
}

export default DrinkProvider;
