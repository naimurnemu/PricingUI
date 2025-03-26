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
    setData: (state, { payload }) => {
      // console.log(payload);
      state.data = payload;
   


  
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
