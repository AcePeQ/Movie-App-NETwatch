import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface darkmodeState {
  isDarkMode: boolean;
}

const localStorageDarkMode = JSON.parse(
  localStorage.getItem("darkmode") || `${true}`
);

const initialState: darkmodeState = {
  isDarkMode: localStorageDarkMode && true,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkmode", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { changeMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;

export const getMode = (state: RootState) => state.darkmode.isDarkMode;
