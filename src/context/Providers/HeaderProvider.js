import React, { useState } from 'react';
import HeaderContext from '../HeaderContext';

const HeaderProvider = ({ children }) => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarActive((prevState) => !prevState);
  };

  const valueContext = {
    toggleSearchBar,
    searchBarActive,
  };

  return <HeaderContext.Provider value={valueContext}>{children}</HeaderContext.Provider>;
};

export default HeaderProvider;
