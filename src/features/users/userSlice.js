import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.register(userData);
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
        if (state.isSuccess === true) {
          toast.success("We Got It !!!");
        }
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something Goes Wrong!!!", action.error);
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
        if (state.isSuccess === true) {
          // localStorage.setItem("token", action.payload.token);
          toast.success("We Got It !!!");
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something Goes Wrong!!!", action.error);
        }
      });
  },
});

export default userSlice.reducer;
