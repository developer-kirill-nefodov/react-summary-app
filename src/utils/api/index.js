import axios from "axios";

export const usersAPI = axios.create({
  baseURL: 'https://api.github.com/users',

});

export const customApi = axios.create();

export const getUserDataRepos = (username) => {
  return usersAPI.get(`/${username}/repos?sort=updated&per_page=10&page=1`);
}

export const getCustomApi = (url) => {
  return customApi.get(url);
}

export const getUserData = (username) => {
  return usersAPI.get(`/${username}`);
}