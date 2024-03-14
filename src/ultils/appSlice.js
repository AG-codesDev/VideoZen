import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    homeVideos: [],
    searchVideos: [],
    shortsVideos: [],
    exploreVideos: [],
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
    addSearchVideos: (state, action) => {
      state.searchVideos = action.payload;
    },
    addShortsVideos: (state, action) => {
      state.shortsVideos = action.payload;
    },
    addExploreVideos: (state, action) => {
      state.exploreVideos = action.payload;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  addVideos,
  addSearchVideos,
  addShortsVideos,
  addExploreVideos,
} = appSlice.actions;
export default appSlice.reducer;
