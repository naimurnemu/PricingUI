import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    plans: [],
    plansInfo: {},
    features: [],
  },
  sortedPlans: {},
  planNames: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
      const planNames = [...new Set(payload.plans.map((plan) => plan.name))];
      const sortedPlans = planNames.reduce((acc, name) => {
        acc[name] = payload.plans.filter((plan) => plan.name === name);
        return acc;
      }, {});
      state.planNames = planNames;
      state.sortedPlans = sortedPlans;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
