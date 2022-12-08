import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "./reducers/candySlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
  },
});
