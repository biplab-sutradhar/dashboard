import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c00017f",
  isOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setMode, setIsOpen } = globalSlice.actions;
export default globalSlice.reducer;