import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    status: false,
    code: null,
    msg: "",
  },
  reducers: {
    error: (state, action) => {
      console.log(action);
      state.status = action.payload.status || false;
      state.code = action.payload.code || "";
      state.msg = action.payload.msg || "";
    },
  },
});

export const { error } = errorSlice.actions;

export default errorSlice.reducer;
