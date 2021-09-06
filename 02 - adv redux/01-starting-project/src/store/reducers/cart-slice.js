import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  prodItems: [],
  totalQty: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {

    addCartItem(state, action){
      const newItem = action.payload; // payload is 'Item' object
      // below returns object so its a 'reference' pointer and not a copy
      // as it would be with a primitive type (e.g. int)
      const existingItem = state.prodItems.find(item => item.id === newItem.id);
      if (!existingItem){
        // NOTE: using 'state' like this is ONLY safe when using <redux-toolkit>
        // because it automatically treats as immutable and makes needed transformations
        // without breaking state.
        // if not using redux toolkit, you MUST make your own copy of state.
        state.prodItems.push({
          id: newItem.id,
          unitPrice: newItem.price,
          quantity: 1, // newItem.qty,
          totalPrice: (newItem.qty * newItem.price),
          name: newItem.title
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeCartItem(state, action){
      const currentItemId = action.payload;
      const existingItem = state.prodItems.find(item => item.id === currentItemId);

      if (existingItem.quantity > 1){
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.unitPrice;
      } else {
        state.prodItems = state.prodItems.filter(item => item.id === currentItemId);
      }

    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
