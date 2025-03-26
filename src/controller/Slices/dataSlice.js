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
      console.log(payload);
      state.data = payload;
      
      // const plansInfoKeys = Object.keys(state.data.plansInfo);
      // const objOfArrays = plansInfoKeys.reduce((newObj, key) => {
      //   newObj[key] = [];
      //   return newObj;
      // }, {});


  
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
