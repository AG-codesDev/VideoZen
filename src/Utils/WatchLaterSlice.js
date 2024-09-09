import { createSlice } from "@reduxjs/toolkit";

const WatchLaterSlice = createSlice({
  name: "watchLater",
  initialState: {
    watchLaterVideos: [],
  },

  reducers: {
    addWatchLaterVideos: (state, action) => {
      state.watchLaterVideos.push(action.payload);
    },
    removeWatchLaterVideos: (state, action) => {
      state.watchLaterVideos.filter((videos) => videos != action.payload);
      const updatedVideos = state.watchLaterVideos.filter(
        (video) => video !== action.payload
      );
      state.watchLaterVideos = updatedVideos;
      // console.log(action);
      // console.log(state.watchLaterVideos);
    },
  },
});
export const { addWatchLaterVideos, removeWatchLaterVideos } =
  WatchLaterSlice.actions;
export default WatchLaterSlice.reducer;
