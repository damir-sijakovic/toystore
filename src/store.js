import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./AppSlice.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

