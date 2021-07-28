import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from '../../images/house.png';

function HomeLink() {
  return (
    <Link to="/">
      <input type="image" className="icon-home" src={homeIcon} alt="home" />
    </Link>
  );
}

export default HomeLink;
