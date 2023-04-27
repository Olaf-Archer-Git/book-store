import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const registration = async (userData) => {
  const response = await axios.post(`${baseURL}user/register`, userData);

  if (response.data) {
    //save user state to the local storage
    localStorage.setItem("customer", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${baseURL}user/login`, userData);

  return response.data;
};

export const userService = { registration, login };
