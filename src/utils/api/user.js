import {usersAPI} from "./index";

export const getUserData = (username) => {
  return usersAPI.get(`${username}?per_page=10&page=1`);
}