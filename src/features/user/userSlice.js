import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { userService } from "./userService";

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  users: getCustomerFromLocalStorage,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.registration(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      return await userService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess) {
          toast.info("We Got It !!!");
        }
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isSuccess) {
          toast.error("Something Goes Wrong");
        }
      })

      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload;
        if (state.isSuccess) {
          localStorage.setItem("token", action.payload.token);
          toast.info("You Logged Successfully");
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
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

export default userSlice.reducer;
