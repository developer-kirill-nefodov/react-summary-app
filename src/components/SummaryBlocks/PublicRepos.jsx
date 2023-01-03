import React from 'react';

import TitleBlock from "./TitleBlock";
import './styles.css';

const PublicRepos = ({user, title}) => {
  return (
    <TitleBlock title={title}>
      <div className='public-block'>
        On GitHub as an early adopter since {new Date(user.create).getFullYear()},
        {user.username} is a developer with {user.public} public repositories.
      </div>
    </TitleBlock>
  );
};

export default PublicRepos;