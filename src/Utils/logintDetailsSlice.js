import { createSlice } from "@reduxjs/toolkit";

const loginDetailsSlice = createSlice({
  name: "loginInfo",
  initialState: {
    info: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.info = action.payload;
      // console.log(action);
    },
    removeUser: (state, action) => {
      state.info = [];
    },
  },
});

export const { addUser, removeUser } = loginDetailsSlice.actions;
export default loginDetailsSlice.reducer;
