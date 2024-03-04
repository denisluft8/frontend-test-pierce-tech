import eventReducer from "../reducers/eventReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});

export default store;
