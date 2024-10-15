import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the shopping cart
const cartContext = createContext();

// Initial state of the cart
const initialState = {
  items: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(cartContext);
};
