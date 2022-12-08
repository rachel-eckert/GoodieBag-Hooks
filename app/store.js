import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "./reducers/candySlice";
import singleCandyReducer from "./reducers/singleCandySlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    candy: singleCandyReducer,
  },
});
