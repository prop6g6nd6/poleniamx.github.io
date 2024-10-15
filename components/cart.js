import React from 'react';
import { useCart } from '../path/to/cartContext'; // Adjust the path accordingly

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
