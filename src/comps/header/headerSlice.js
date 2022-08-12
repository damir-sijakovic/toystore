import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: 'home',
  changedTimes: 0,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setCurrentHeader: (state, action) => {
      state.selectedItem = action.payload;
    },
    countChange: (state) => {
      state.changedTimes += 1;
    },
  },
});

export const { setCurrentHeader, countChange } = headerSlice.actions;
export default headerSlice.reducer;
