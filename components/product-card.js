import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addItem, addOrder } from '../store/cartSlice'; // Import your Redux actions

// Add id prop to accept product id passed from shop.js
export default function ProductCard({ id, productName, description, price, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false); // State to control the drawer
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Function to handle adding the product to the cart and creating an order
  const handleAddToCart = () => {
    const product = {
      id, // Use the id passed from Firebase
      productName,
      description,
      price,
      imageUrl,
    };

    // Create the order object
    const order = {
      id: Date.now(), // Generate a unique order ID
      items: [{ // Array to hold the items in this order
        id, // Product ID
        productName,
        price,
      }],
      total: price, // Set total to the price of this order
      date: new Date().toISOString(), // Store the current date
    };

    // Dispatch actions to add the item to the cart and the order to orders
    dispatch(addItem(product)); // Dispatch the addItem action
    dispatch(addOrder(order)); // Dispatch the addOrder action
    
    handleClose(); // Close the drawer after adding
  };

  return (
    <Card className="w-[300px] overflow-hidden shadow-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="relative h-[200px] w-full">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleOpen} className="w-full">Buy Now</Button>
      </CardFooter>

      {/* Drawer Implementation */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-white rounded-lg p-6 shadow-lg">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-gray-800">{productName}</DrawerTitle>
            <DrawerDescription className="text-gray-600">{description}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex justify-between mt-4">
            <Button onClick={handleClose} variant="outline" className="text-gray-600 w-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>Close</Button>
            <Button onClick={handleAddToCart} style={{ fontFamily: 'Manrope, sans-serif' }}>Confirm Purchase</Button>
          </DrawerFooter>
        </DrawerContent>
        <DrawerClose />
      </Drawer>
    </Card>
  );
}
