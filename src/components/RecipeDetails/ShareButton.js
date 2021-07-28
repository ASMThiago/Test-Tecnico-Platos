import React from 'react';

import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function copyToClipboard(text) {
  copy(text);
  document.getElementById('share-button').innerHTML = 'Link copiado!';
}

function ShareButton() {
  const pathname = window.location.href.replace('/in-progress', '');

  return (
    <input
      className="icons-details"
      type="image"
      id="share-button"
      src={shareIcon}
      alt="Share Button"
      onClick={() => copyToClipboard(pathname)}
    />
  );
}

export default ShareButton;
