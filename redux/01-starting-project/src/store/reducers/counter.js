import { createSlice } from "@reduxjs/toolkit";

const initialCounterState ={
  counter: 0, showCounter: true
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers:{
    increment(state){
      state.counter++; // redux toolkit automatically makes this immutable (a copy of state)
      // auto includes showCounter as per default/previous state.
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
