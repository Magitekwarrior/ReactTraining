import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import counterReducer from "./reducers/counter";

const reduxStore = configureStore({
  reducer: { counterReducer: counterReducer, authReducer: authReducer }
});


export default reduxStore;
