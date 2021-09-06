import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./reducers/cart-slice";
import uiSliceReducer from "./reducers/ui-slice";

const reduxStore = configureStore({
  reducer: { 
    cartReducer: cartSliceReducer,
    uiReducer: uiSliceReducer,
   },
});

export default reduxStore;
