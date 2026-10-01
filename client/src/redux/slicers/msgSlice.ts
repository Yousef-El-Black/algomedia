import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
  name: "msg",
  initialState: {
    value: "",
  },
  reducers: {
    setMsg: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMsg } = msgSlice.actions;
export default msgSlice.reducer;
