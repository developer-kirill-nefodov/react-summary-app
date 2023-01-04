import {useEffect, useState} from "react";

import {getRepoData} from "../function/getRepoData";

const usePercentLanguage = (arr = []) => {
  const [isEnd, setIsEnd] = useState(false);
  const [total, setTotal] = useState(0);
  const [obj, setObj] = useState({});
  const [percent, setPercent] = useState({});

  useEffect(() => {
    setObj({});
    setTotal(0);
    setIsEnd(false);

    getRepoData(arr, setTotal, setObj, setIsEnd)
      .then(console.log);
  }, [arr]);

  useEffect(() => {
    if (isEnd) {
      Object.entries(obj).map(([key, value]) => {
        setPercent((obj) => ({
          ...obj,
          [key]: Math.ceil((value / total) * 100)
        }));
      })
    }
  }, [isEnd, total, obj]);

  return percent;
};

export default usePercentLanguage;