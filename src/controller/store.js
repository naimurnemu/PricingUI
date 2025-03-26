import { configureStore } from "@reduxjs/toolkit";
import selectPlanReducer from "./Slices/selectPlansSlice";
import dataReducer from "./Slices/dataSlice";

const store = configureStore({
  reducer: {
    selectedPlans: selectPlanReducer,
    data: dataReducer,
  },
});

export default store;