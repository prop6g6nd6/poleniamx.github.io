// store/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  items: [],
  orders: [],
};

// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'CLEAR_CART':
      return initialState;
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

// Create store
const store = createStore(cartReducer);

export default store;
