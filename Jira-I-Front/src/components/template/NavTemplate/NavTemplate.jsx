import React from 'react';
import './NavTemplate.scss';

function NavTemplate({ global, sub }) {
  return (
    <div className="navigation">
      {global}
      {sub}
    </div>
  );
}

export default NavTemplate;
