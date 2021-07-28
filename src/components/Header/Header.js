import React, { useContext } from 'react';
import SearchIcon from './SearchIcon';
import FavoriteLink from './FavoriteLink';
import PageTitle from './PageTitle';
import SearchBar from './SearchBar';
import HeaderContext from '../../context/HeaderContext';

const Header = (props) => {
  const { searchBarActive } = useContext(HeaderContext);
  return (
    <section>
      <header className="header">
        <FavoriteLink />
        <PageTitle title={props.title} />
        <SearchIcon />
      </header>
      {searchBarActive ? <SearchBar /> : null}
    </section>
  );
};

export default Header;
