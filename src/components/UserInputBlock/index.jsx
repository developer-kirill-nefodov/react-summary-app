import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import './styles.css';

const UserInputBlock = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChange = ({target}) => {
    setValue(target.value);
  }

  const submitUser = () => {
    navigate(`/${value}`)
  }

  return (
    <div>
      <p className="mt-0">
        Enter the nickname of your
        <a className='ml-5 mr-5 color-link' href="https://github.com" title="GitHub">
          GitHub
        </a>
        user in order to view the resume
      </p>
      <div className='username-block'>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter your GitHub username and click on generate"
        />
        <button onClick={submitUser}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInputBlock;