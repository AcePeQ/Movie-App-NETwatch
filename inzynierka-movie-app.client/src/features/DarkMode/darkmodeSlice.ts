import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface darkmodeState {
  isDarkMode: boolean;
}

const initialState: darkmodeState = {
  isDarkMode: true,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;

export const getMode = (state: RootState) => state.darkmode.isDarkMode;
