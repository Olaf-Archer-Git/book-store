import axios from "axios";
import { baseURL } from "../../utils/baseURL";

export const products = async () => {
  const response = await axios.get(`${baseURL}product`);

  return response.data;
};

export const productService = { products };
