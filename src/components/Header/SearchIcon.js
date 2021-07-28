import React, { useContext } from 'react';
import searchImage from '../../images/searchIcon.svg';
import HeaderContext from '../../context/HeaderContext';

const SearchIcon = () => {
  const { toggleSearchBar } = useContext(HeaderContext);

  return (
    <input
      type="image"
      src={searchImage}
      alt="search"
      onClick={toggleSearchBar}
    />
  );
};

export default SearchIcon;
