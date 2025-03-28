import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlans: [],
  selectedType: "1_year",
};

const selectedSlice = createSlice({
  name: "selectedPlans",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      
    },
    removePlan: (state, action) => {
      
    },
    setPlanType: (state, { payload }) => {
      state.selectedType = payload.data;
    },
  },
});

export const { addPlan, removePlan, setPlanType } = selectedSlice.actions;
export default selectedSlice.reducer;
