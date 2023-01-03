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
      <p className="text">
        Enter the nickname of your
        <a href="https://github.com" title="GitHub">
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