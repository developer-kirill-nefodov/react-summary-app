import {useEffect, useState} from "react";

import {getCustomApi} from "../api";
// import mock from "../api/mock.json";

const usePercentLanguage = (arr = []) => {
  const [isEnd, setIsEnd] = useState(false);
  const [total, setTotal] = useState(0);
  const [obj, setObj] = useState({});
  const [percent, setPercent] = useState({});

  useEffect(() => {
    setObj({});
    setTotal(0);
    setIsEnd(false);
    arr.map(async (url, i) => {
      try {
        const {data} = await getCustomApi(url);

        Object.entries(data).map(([key, value]) => {
          setTotal(e => e + value);
          setObj((e) => ({
            ...e,
            [key]: e[key] ? e[key] + value : value
          }))
        });
      } catch (e) {
        console.log('Error:', e);
      }
      if (i === arr.length - 1) {
        setIsEnd(true);
      }
    });

    // /** Mock Data */
    // Object.entries(mock.lang).map(([key, value]) => {
    //   setTotal(e => e + value);
    //   setObj((e) => ({
    //     ...e,
    //     [key]: e[key] ? e[key] + value : value
    //   }))
    // });
    // setIsEnd(true);
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