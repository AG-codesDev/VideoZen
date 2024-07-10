import { createSlice } from "@reduxjs/toolkit";

const loginDetailsSlice = createSlice({
  name: "loginInfo",
  initialState: {
    info: [],
  },
  reducers: {
    addDetails: (state, action) => {
      state.info = action.payload;
    },
    removeDetails: (state, action) => {
      state.info = [];
    },
  },
});

export const { addDetails, removeDetails } = loginDetailsSlice.actions;
export default loginDetailsSlice.reducer;
