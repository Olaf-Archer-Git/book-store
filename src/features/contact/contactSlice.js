import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const initialState = {
  contacts: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createQuery = createAsyncThunk(
  "query/create-query",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}queries`, { contactData });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contacts = action.payload;
      })
      .addCase(createQuery.rejected, (state, action) => {
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

export default contactSlice.reducer;
