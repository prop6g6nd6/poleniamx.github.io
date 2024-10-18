// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  orders: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If the item exists, increase the quantity (if you have a quantity field in your payload)
        existingItem.quantity += action.payload.quantity || 1; // Default to 1 if no quantity is provided
      } else {
        // If the item does not exist, add it to the cart with quantity
        state.items.push({ ...action.payload, quantity: 1 }); // Start quantity at 1
      }
    },
    // Action to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Action to add an order
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export the actions
export const { addItem, removeItem, addOrder, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;

// Selector to get cart items
export const selectCartItems = (state) => state.cart.items;
