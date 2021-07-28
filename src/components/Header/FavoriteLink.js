import React from 'react';
import { Link } from 'react-router-dom';

import starIcon from '../../images/star.png';

function FavoriteLink() {
  return (
    <Link to="/favoritas">
      <input type="image" className="icon-star" src={starIcon} alt="favorite" />
    </Link>
  );
}

export default FavoriteLink;
