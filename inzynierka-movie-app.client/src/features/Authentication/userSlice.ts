import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/types";
import { RootState } from "../../store";

interface UserState {
  user: User | null;
  token: string;
}

const initialState: UserState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  token: localStorage.getItem("token") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getUser = (state: RootState) => state.user.user;
export const getUserWatchList = (state: RootState) =>
  state.user.user?.watchlist;
export const getUserToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
