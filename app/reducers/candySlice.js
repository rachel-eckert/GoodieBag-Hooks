import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandies = createAsyncThunk("/candies", async () => {
  try {
    const { data } = await axios.get("/api/candies");
    return data;
  } catch (err) {
    return err.message;
  }
});

const candiesSlice = createSlice({
  name: "candies",
  initialState: { allCandies: [], singleCandy: {} },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCandies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default candiesSlice.reducer;
