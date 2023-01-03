import React from 'react';

import './styles.css';

const TitleBlock = ({title, children}) => {
  return (
    <div className='block'>
      <div className='block-title'>
        <h4 className='m-o'>{title}</h4>
      </div>
      {children}
    </div>
  );
};

export default TitleBlock;