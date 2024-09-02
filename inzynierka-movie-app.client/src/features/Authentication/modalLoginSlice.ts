import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface initialStateTypes {
  showModalLogin: boolean;
  showPassword: boolean;
}

const initialState: initialStateTypes = {
  showModalLogin: false,
  showPassword: false,
};

const modalLoginSlice = createSlice({
  name: "modalLogin",
  initialState,
  reducers: {
    openModalLogin: (state) => {
      state.showModalLogin = true;
    },
    closeModalLogin: (state) => {
      state.showModalLogin = false;
      state.showPassword = false;
    },
    changeShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
});

export const { changeShowPassword, closeModalLogin, openModalLogin } =
  modalLoginSlice.actions;

export default modalLoginSlice.reducer;

export const getModalLoginStatus = (state: RootState) =>
  state.modalLogin.showModalLogin;

export const getShowPassword = (state: RootState) =>
  state.modalLogin.showPassword;
