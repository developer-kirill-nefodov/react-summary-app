import React from 'react';
import {useParams} from "react-router-dom";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Languages from "../../components/Languages";
import PublicRepos from "../../components/SummaryBlocks/PublicRepos";
import ListRepo from "../../components/ListRepo";

import useUserInGithub from "../../utils/hooks/useUserInGithub";

const Summary = () => {
  const {username} = useParams();
  const [isLoading, isError, status, percents, user, repos] = useUserInGithub({username});

  if (isError) {
    return (
      <Error status={status}/>
    )
  }

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <div className='summary'>
      <Header
        title={user.username}
        subTitle='Passionate GitHub user'
      />
      <PublicRepos
        user={user}
        title='GitHub Profile'
      />
      <ListRepo
        title='Latest activity'
        username={username}
        repos={repos}
      />
      <Languages
        title='Languages'
        percents={percents}
      />
    </div>
  );
};

export default Summary;