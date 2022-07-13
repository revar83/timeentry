import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice"
const reducer = {
  project: projectSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;