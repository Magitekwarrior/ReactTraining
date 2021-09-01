import { createStore } from "redux";

const initialState = {
  counter: 0,
};

// [State, Action]
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const reduxStore = createStore(counterReducer); 

export default reduxStore;
