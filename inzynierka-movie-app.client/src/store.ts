import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./features/DarkMode/darkmodeSlice";
import modalRegisterReducer from "./features/Authentication/modalRegisterSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    modalRegister: modalRegisterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
