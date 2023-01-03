import React, {useEffect, useState} from 'react';

import Header from "../Header";
import {getTextError} from "../../utils/function/getTextError";

const Error = ({status}) => {
  const [textError, setTextError] = useState(null);

  useEffect(() => {
    setTextError(getTextError(status))
  }, [status]);

  return (
    <div>
      <Header title={textError?.title}/>
      <Header>
        <p className='m-o'>
          {textError?.text}
        </p>
      </Header>
    </div>
  );
};

export default Error;