import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { tokenConfig } from "../../utils/tokenConfig";

const products = async () => {
  const response = await axios.get(`${baseURL}product`);

  return response.data;
};

const singleProduct = async (id) => {
  const response = await axios.get(`${baseURL}product/${id}`);

  return response.data;
};

const favorite = async (prodID) => {
  const response = await axios.put(
    "http://localhost:3003/api/product/favorite",
    { prodID },
    tokenConfig
  );
  return response.data;
};

export const productService = { products, favorite, singleProduct };
