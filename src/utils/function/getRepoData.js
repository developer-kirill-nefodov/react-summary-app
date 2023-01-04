import {getCustomApi} from "../api";

export const getRepoData = async (arr, setTotal, setObj, setIsEnd) => {
  for(let i = 0; i < arr.length; i++) {
    try {
      const {data} = await getCustomApi(arr[i]);

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
  }

  return 'End';
}