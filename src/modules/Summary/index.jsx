import React from 'react';

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import useUserInGithub from "../../utils/hooks/useUserInGithub";

const Summary = () => {
  const [isLoading, isError, status, username] = useUserInGithub();

  if(isError) {
    return (
      <Error status={status}/>
    )
  }

  return isLoading ? (
    <Loading/>
  ) : (
    <div className='summary'>
      <Header
        title={username}
        subTitle='Passionate GitHub user'
      />

    </div>
  );
};

export default Summary;