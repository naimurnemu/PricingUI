import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlans: {},
  selectedType: "1_year",
};

const selectedSlice = createSlice({
  name: "selectedPlans",
  initialState,
  reducers: {
    addPlan: (state, { payload }) => {
      const { name, title } = payload;
      const { selectedPlans } = state;
      const prevQuantites = selectedPlans[name] ? selectedPlans[name] : {};
      const quantity =
        selectedPlans[name] &&
        selectedPlans[name][title] &&
        selectedPlans[name][title]?.quantity
          ? selectedPlans[name][title].quantity + 1
          : 1;
      state.selectedPlans = {
        ...selectedPlans,
        [name]: { ...prevQuantites, [title]: { quantity: quantity } },
      };
      console.log(selectedPlans);
    },
    removePlan: (state, { payload }) => {
      const { name, title } = payload;
      const { selectedPlans } = state;
      if (selectedPlans[name][title].quantity > 1) {
        selectedPlans[name][title].quantity -= 1;
      } else {
        delete selectedPlans[name][title];
      }
      if (Object.keys(selectedPlans[name]).length === 0) {
        delete selectedPlans[name];
      }
    },
    setPlanType: (state, { payload }) => {
      state.selectedType = payload.data;
    },
  },
});

export const { addPlan, removePlan, setPlanType } = selectedSlice.actions;
export default selectedSlice.reducer;
