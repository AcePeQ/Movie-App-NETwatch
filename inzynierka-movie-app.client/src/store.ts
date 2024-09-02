import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./features/DarkMode/darkmodeSlice";
import modalRegisterReducer from "./features/Authentication/modalRegisterSlice";
import modalLoginReducer from "./features/Authentication/modalLoginSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    modalRegister: modalRegisterReducer,
    modalLogin: modalLoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
