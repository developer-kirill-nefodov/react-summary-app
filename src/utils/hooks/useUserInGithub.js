import {useEffect, useState} from "react";

import {getUserDataRepos, getUserData} from "../api";
import usePercentLanguage from "./usePercentLanguage";

const useUserInGithub = ({username}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  const [repos, setRepos] = useState([]);

  const percents = usePercentLanguage(languages);

  useEffect(() => {
    const dataUser = getUserData(username);
    const dataRepos = getUserDataRepos(username);
    dataUser.then(({data}) => {
        setUser({
          username: data.name,
          public: data.public_repos,
          create: data.created_at
        });
      })
      .catch((e) => {
        setIsError(true);
        setStatus(e.response.status);
      });
    dataRepos
      .then(({data}) => {
        if (!data.length) {
          setIsError(true)
          setStatus(200);
        }

        setLanguages(data.map(e => e.languages_url));
        setRepos(data.map(e => ({
          name: e.name,
          language: e.language,
          date: e.date,
          description: e.description,
          homepage: e.homepage
        })))
        setIsLoading(false);
      });
  }, [username]);

  return [isLoading, isError, status, percents, user, repos];
};

export default useUserInGithub;