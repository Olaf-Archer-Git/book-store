import axios from "axios";
import { baseURL } from "../../utils/baseURL";

export const register = async (userData) => {
  const response = await axios.post(`${baseURL}user/register`, userData);

  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${baseURL}user/login`, userData);

  return response.data;
};

export const userService = { register, login };
