import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState ={
  counter: 0, showCounter: true
};

const initialLoginState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialLoginState,
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    }
  }
});

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

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "decrement"){
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "increase"){
//     return{
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle'){
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     }
//   }

//   console.log('current state', state);
//   return state;
// };

const reduxStore = configureStore({
  // reducer: { counter: counterSlice.reducer }
  reducer: { counterReducer: counterSlice.reducer, authReducer: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default reduxStore;
