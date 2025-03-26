import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planType: "1_year",
};

const planTypeSlice = createSlice({
  name: "planType",
  initialState,
  reducers: {
    setPlanTypes: (state, action) => {
      state.planType = action.payload;
    },
  },
});

export const { setPlanTypes } = planTypeSlice.actions;
export default planTypeSlice.reducer;
