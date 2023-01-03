import React from 'react';
import './styles.css';

const Header = ({title, subTitle, children}) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      {children}
    </div>
  );
};

export default Header;