import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserType } from "../../utils/types";
import { RootState } from "../../store";

interface UserState {
  user: User | null;
  token: string;
}

const initialState: UserState = {
  user: null,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getUser = (state: RootState) => state.user;
export const getUserWatchList = (state: UserType) => state.user.Watchlist;
export const getUserToken = (state: UserState) => state.token;

export default userSlice.reducer;
