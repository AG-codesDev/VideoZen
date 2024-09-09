import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import logintDetailsSlice from "./logintDetailsSlice";
import WatchLaterSlice from "./WatchLaterSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    loginInfo: logintDetailsSlice,
    watchLater: WatchLaterSlice,
  },
});
export default store;
