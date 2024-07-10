import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import logintDetailsSlice from "./logintDetailsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    loginInfo: logintDetailsSlice,
  },
});
export default store;
