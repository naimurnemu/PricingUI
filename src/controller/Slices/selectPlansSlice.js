import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlans: [],
  selectedPlanType: "1_year",
};

const selectPlansSlice = createSlice({
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
      state.selectedPlanType = payload.data;
    },
  },
});

export const { addPlan, removePlan, setPlanType } = selectPlansSlice.actions;
export default selectPlansSlice.reducer;
