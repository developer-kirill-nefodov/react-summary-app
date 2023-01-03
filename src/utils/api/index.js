import axios from "axios";

export const usersAPI = axios.create({
  baseURL: 'https://api.github.com/users',
  withCredentials: true,
});