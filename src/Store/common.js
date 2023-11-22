import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    loader: false,
    users : null
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setLoader  , setUsers} = commonSlice.actions;
export default commonSlice.reducer;