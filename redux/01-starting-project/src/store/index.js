import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement"){
    return {
      counter: state.counter - 1
    }
  }

  console.log('current state', state);
  return state;
};

const reduxStore = createStore(counterReducer);

export default reduxStore;
