import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {getUserData} from "../api/user";

const useUserInGithub = () => {
  const {pathname} = useLocation();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(200);

  const [username, setUsername] = useState('Chris Wanstrath');


  useEffect(() => {
    getUserData(pathname)
      .then(({data}) => {
        console.log(data)
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
        setStatus(404);
      });
  }, []);

  return [isLoading, isError, status, username];
};

export default useUserInGithub;