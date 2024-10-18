import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { clearCart, removeItem } from '../store/cartSlice'; // Import actions from your cartSlice

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the drawer
  const dispatch = useDispatch(); // Get the dispatch function
  const items = useSelector((state) => state.cart.items); // Access cart items from the Redux store

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the clearCart action
    setIsOpen(false); // Close drawer after clearing
  };

  return (
    <>
      {/* Floating Cart Button */}
      <Button
        className="fixed bottom-4 right-4 bg-blue-500 text-white"
        onClick={() => setIsOpen(true)}
      >
        Cart ({items.length})
      </Button>

      {/* Cart Drawer */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-white p-6 shadow-lg rounded-lg">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">Your Cart</DrawerTitle>
          </DrawerHeader>

          {/* Cart Items List */}
          <div className="py-4">
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between mb-4">
                    <span>{item.productName}</span>
                    <span>{item.price}</span>
                    <Button
                      variant="outline"
                      onClick={() => dispatch(removeItem(item.id))} // Dispatch the removeItem action
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Drawer Footer with Clear Cart and Checkout */}
          <DrawerFooter className="flex justify-between mt-4">
            <Button variant="outline" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button onClick={() => alert('Proceeding to checkout')}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
