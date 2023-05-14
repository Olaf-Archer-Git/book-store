import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { tokenConfig } from "../../utils/tokenConfig";

const initialState = {
  orders: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createOrderCart = createAsyncThunk(
  "cart/create-cart",
  async (cartData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseURL}order/cart`,
        cartData,
        tokenConfig
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrderCart = createAsyncThunk(
  "cart/get-order-cart",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}order/cart`, tokenConfig);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeOrderCart = createAsyncThunk(
  "cart/remove-order-cart",
  async (cartItemId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${baseURL}order/cart/${cartItemId}`,

        tokenConfig
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
        if (state.isSuccess) {
          toast.success("Product Added To The Cart");
        }
      })
      .addCase(createOrderCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Goes Wrong");
        }
      })

      .addCase(getOrderCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orderCart = action.payload;
      })
      .addCase(getOrderCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Goes Wrong");
        }
      })

      .addCase(removeOrderCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeOrderCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCart = action.payload;
        if (state.isSuccess) {
          toast.info("Product Deleted");
        }
      })
      .addCase(removeOrderCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something Goes Wrong");
        }
      });
  },
});

export default orderSlice.reducer;
