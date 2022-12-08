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

const candiesSlice = createSlice({
  name: "candies",
  initialState: { allCandies: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCandies.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchSingleCandy.fulfilled, (state, action) => {
      state.candy = action.payload;
    });
  },
});

export default candiesSlice.reducer;
