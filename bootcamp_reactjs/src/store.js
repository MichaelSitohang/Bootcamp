// File Store
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducer";

const store = configureStore({
  reducer: counterReducer,
  devTools: composeWithDevTools(),
});

export default store;
