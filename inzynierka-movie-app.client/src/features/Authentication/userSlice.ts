import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, WatchListUser } from "../../utils/types";
import { RootState } from "../../store";

interface UserState {
  username: string | undefined;
  token: string;
  watchlist: WatchListUser[] | undefined;
}

interface UserPayload {
  user: User | null;
  token: string;
}

const initialState: UserState = {
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
  watchlist: JSON.parse(localStorage.getItem("watchlist") as string) || [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserPayload>) => {
      state.username = action.payload.user?.username;
      state.token = action.payload.token;
      state.watchlist = action.payload.user?.watchlist;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.user?.username);
      localStorage.setItem(
        "watchlist",
        JSON.stringify(action.payload.user?.watchlist)
      );
    },
    logout: (state) => {
      state.username = "";
      state.token = "";
      state.watchlist = [];

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("watchlist");
    },
  },
});

export const { login, logout } = userSlice.actions;
export const getUsername = (state: RootState) => state.user.username;
export const getUserWatchList = (state: RootState) => state.user.watchlist;
export const getUserToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
