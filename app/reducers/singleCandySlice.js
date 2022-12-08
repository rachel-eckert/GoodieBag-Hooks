import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCandy = createAsyncThunk(
  "/candies/fetchSingleCandy",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const singleCandySlice = createSlice({
  name: "candy",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleCandy.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleCandy = (state) => {
  return state.candy;
};
export default singleCandySlice.reducer;
