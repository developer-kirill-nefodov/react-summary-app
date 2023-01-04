import React from 'react';

import './styles.css';

const TitleBlock = ({title, classN = '', children}) => {
  return (
    <div className={`block ${classN}`}>
      <div className='block-title'>
        <h4 className='m-0 color-h4'>{title}</h4>
      </div>
      {children}
    </div>
  );
};

export default TitleBlock;