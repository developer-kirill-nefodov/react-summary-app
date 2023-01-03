import React from 'react';

import Header from "../../components/Header";
import UserInputBlock from "../../components/UserInputBlock";

const Homepage = () => {
  return (
    <div className='homepage'>
      <Header title='My GitHub Résumé'/>
      <UserInputBlock/>
    </div>
  );
};

export default Homepage;