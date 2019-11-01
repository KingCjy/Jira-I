import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({ aside }) => {
  return <div className="navigation">{aside}</div>;
};

export default PageTemplate;
