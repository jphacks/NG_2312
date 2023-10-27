import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./type";

const initialState: UserState = {
  userId: null,
  idToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action: { payload: string }) => {
      state.userId = action.payload;
    },
    setIdToken: (state, action: { payload: string }) => {
      state.idToken = action.payload;
    },
  },
});

export const { setUserId, setIdToken } = userSlice.actions;
export default userSlice.reducer;
