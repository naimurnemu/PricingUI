import { configureStore } from "@reduxjs/toolkit";
import planTypeReducer from "./Slices/planTypeSlice";
import selectPlanReducer from "./Slices/selectPlansSlice";
import dataReducer from "./Slices/dataSlice";

const store = configureStore({
  reducer: {
    planType: planTypeReducer,
    selectedPlans: selectPlanReducer,
    data: dataReducer,
  },
});

export default store;