import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface initialStateTypes {
  showModalRegister: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const initialState: initialStateTypes = {
  showModalRegister: false,
  showPassword: false,
  showConfirmPassword: false,
};

const modalRegisterSlice = createSlice({
  name: "modalRegister",
  initialState,
  reducers: {
    openModalRegister: (state) => {
      state.showModalRegister = true;
    },
    closeModalRegister: (state) => {
      state.showModalRegister = false;
    },
    changeShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
    changeShowConfirmPassword: (state) => {
      state.showConfirmPassword = !state.showConfirmPassword;
    },
  },
});

export const {
  changeShowPassword,
  changeShowConfirmPassword,
  openModalRegister,
  closeModalRegister,
} = modalRegisterSlice.actions;

export default modalRegisterSlice.reducer;

export const getShowPassword = (state: RootState) =>
  state.modalRegister.showPassword;

export const getShowConfirmPassword = (state: RootState) =>
  state.modalRegister.showConfirmPassword;

export const getModalRegisterStatus = (state: RootState) =>
  state.modalRegister.showModalRegister;
