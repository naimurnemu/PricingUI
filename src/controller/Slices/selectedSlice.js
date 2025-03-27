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
      const { plan, quantity } = action.payload;
      const hasPlan = state.selectedPlans.find((p) => p.plan === plan);
      if (hasPlan) {
        hasPlan.quantity += quantity;
      } else {
        state.selectedPlans.push({ plan, quantity });
      }
    },
    removePlan: (state, action) => {
      state.selectedPlans = state.selectedPlans.filter(
        (plan) => plan !== action.payload
      );
    },
    setPlanType: (state, { payload }) => {
      state.selectedType = payload.data;
    },
  },
});

export const { addPlan, removePlan, setPlanType } = selectedSlice.actions;
export default selectedSlice.reducer;
