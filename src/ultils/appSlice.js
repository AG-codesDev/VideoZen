import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    videos: [],
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addVideos: (state, action) => {
      state.videos = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { toggleMenu, closeMenu, addVideos } = appSlice.actions;
export default appSlice.reducer;
