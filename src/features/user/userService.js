import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { tokenConfig } from "../../utils/tokenConfig";

const registration = async (userData) => {
  const response = await axios.post(`${baseURL}user/register`, userData);

  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${baseURL}user/login`, userData);

  return response.data;
};

const getFavorite = async () => {
  const response = await axios.get(`${baseURL}user/favorite`, tokenConfig);

  return response.data;
};

export const userService = { registration, login, getFavorite };
