import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isCartVisible: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle(state){
      state.isCartVisible = !state.isCartVisible;
    },
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
