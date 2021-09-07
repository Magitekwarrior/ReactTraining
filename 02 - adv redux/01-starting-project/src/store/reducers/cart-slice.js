import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  prodItems: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCartItem(state, action) {
      const newItem = action.payload; // payload is 'Item' object
      // console.log('action.payload', action.payload);

      state.totalQty++;
      // below returns object so its a 'reference' pointer and not a copy
      // as it would be with a primitive type (e.g. int)
      const existingItem = state.prodItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        // NOTE: using 'state' like this is ONLY safe when using <redux-toolkit>
        // because it automatically treats as immutable and makes needed transformations
        // without breaking state.
        // if not using redux toolkit, you MUST make your own copy of state.
        state.prodItems.push({
          id: newItem.id,
          unitPrice: newItem.price,
          quantity: newItem.qty,
          totalPrice: newItem.qty * newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      console.log("state.prodItems - add", state.prodItems);
    },

    removeCartItem(state, action) {
      const currentItemId = action.payload;
      console.log("currentItemId", currentItemId);

      if (state.totalQty > 0) {
        state.totalQty--;
      }

      const existingItem = state.prodItems.find((item) => item.id === currentItemId);
      if (existingItem.quantity === 1) {
        // qty 1 so remove from state list.
        state.prodItems = state.prodItems.filter((item) => item.id !== currentItemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.unitPrice;
      }

      console.log("state.prodItems - remove", state.prodItems);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
