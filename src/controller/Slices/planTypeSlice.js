import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planType: "1_year",
};

const planTypeSlice = createSlice({
  name: "planType",
  initialState,
  reducers: {
    setPlanTypes: (state, { payload }) => {
      state.planType = payload.data;
    },
  },
});

export const { setPlanTypes } = planTypeSlice.actions;
export default planTypeSlice.reducer;
