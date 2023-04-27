import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { toast } from "react-toastify";
import { tokenConfig } from "../../utils/tokenConfig";

const initialState = {
  products: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}product`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  "product/add-to-favorite",
  async (ProdID, thunkAPI) => {
    try {
      const response = await axios.put(
        `${baseURL}product/favorite`,
        {
          ProdID,
        },

        tokenConfig
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Goes Wrong");
        }
      })

      .addCase(addToFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addedProduct = action.payload;
        localStorage.getItem("token");
        if (state.isSuccess) {
          toast.success("Product Added To Favorite");
        }
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.error("Can't Add Product");
        }
      });
  },
});

export default productSlice.reducer;
