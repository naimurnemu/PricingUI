import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
  plansInfo: {},
  features: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, { payload }) =>
      (state = payload.plans.length > 0 ? payload : state),
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
