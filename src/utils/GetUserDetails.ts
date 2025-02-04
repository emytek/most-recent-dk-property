import Cookies from "js-cookie";
import { USER_Details, USER_TOKEN } from "../data/data";


export const getUserToken = () => {
  return Cookies.get(USER_TOKEN) as string;
};

export const getUserName = () => {
  const data = sessionStorage.getItem(USER_Details) as string;
  const username: string = JSON.parse(data)?.username;
  return username;
};
