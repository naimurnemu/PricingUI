import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./Slices/selectedSlice";
import dataReducer from "./Slices/dataSlice";

const store = configureStore({
  reducer: {
    selected: selectedReducer,
    data: dataReducer,
  },
});

export default store;