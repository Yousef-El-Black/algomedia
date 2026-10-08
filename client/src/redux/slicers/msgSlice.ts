import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Message = string;

const msgSlice = createSlice({
  name: "msgs",
  initialState: {
    value: [] as Message[],
  },
  reducers: {
    setMsgs: (state, action: PayloadAction<Message>) => {
      state.value = [...state.value, action.payload];
    },
    delMsg: (state, action: PayloadAction<Message>) => {
      state.value = state.value.filter((msg) => msg !== action.payload);
    },
  },
});

export const { setMsgs, delMsg } = msgSlice.actions;
export default msgSlice.reducer;
