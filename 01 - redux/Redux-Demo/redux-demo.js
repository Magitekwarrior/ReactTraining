const redux = require("redux");

//reducer functin
/**
/// <summary> 
* ~       DATE: 01-Sep-2021
* ~    PURPOSE: Pure function - same input leads to same output 
* ~      NOTES: NO 'side-effects' allowed (i.e. no http requests, etc..)
* @ PARAMETERS: inputs: Old State + Dispatched Action [sent by component]
* @             output: New State Object
/// </summary> 
*/

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);
console.log("latestState (1): ", store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latestState/Subscriber: ", latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({
  type: "increment",
});

store.dispatch({
  type: "decrement",
});