import axios from "axios";
import { baseURL } from "../../utils/baseURL";
// import { tokenConfig } from "../../utils/tokenConfig";

const blogs = async () => {
  const response = await axios.get(`${baseURL}blog`);

  return response.data;
};

const singleBlog = async (id) => {
  const response = await axios.get(`${baseURL}blog/${id}`);

  return response.data;
};

export const blogService = { blogs, singleBlog };
