import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

///Build Store///
