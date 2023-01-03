import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {getUserDataRepos, getUserData} from "../api";
import usePercentLanguage from "./usePercentLanguage";

const useUserInGithub = () => {
  const {pathname} = useLocation();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  const [repos, setRepos] = useState([]);

  const percents = usePercentLanguage(languages);

  useEffect(() => {
    const username = pathname.split('/').pop();
    getUserData(username)
      .then(({data}) => {
        setUser({
          username: data.name,
          public: data.public_repos,
          create: data.created_at
        });
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setStatus(e.response.status);
      });
    getUserDataRepos(username)
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
      });
  }, [pathname]);

  return [isLoading, isError, status, percents, user, repos];
};

export default useUserInGithub;