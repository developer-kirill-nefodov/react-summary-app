import React from 'react';

import Header from "../../components/Header";
import UserInputBlock from "../../components/UserInputBlock";

import './styles.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="banner">
        <Header title='My GitHub Résumé'/>
      </div>
      <UserInputBlock/>
    </div>
  );
};

export default Homepage;