import React from 'react';
import PageTitle from './PageTitle';
import './Header.css';
import HomeLink from './HomeLink';

const SearchlessHeader = (props) => (
  <header className="header">
    <HomeLink />
    <PageTitle title={props.title} />
  </header>
);

export default SearchlessHeader;
