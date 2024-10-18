"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { removeItem } from '../store/cartSlice'; // Import removeItem action

// Orders Component (This part will remain the same)
function OrdersComponent() {
  return (
    <Card className="flex-1">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-8">Order ID</TableHead>
              <TableHead className="px-8">Customer</TableHead>
              <TableHead className="px-8 sm:table-cell">Payment Method</TableHead>
              <TableHead className="px-8 hidden sm:table-cell">Shipping Address</TableHead>
              <TableHead className="px-8 hidden sm:table-cell">Type</TableHead>
              <TableHead className="px-8 sm:table-cell">Status</TableHead>
              <TableHead className="px-8 hidden md:table-cell">Date</TableHead>
              <TableHead className="px-8 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add rows dynamically */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// Main Cart Component for Cart Page
export default function CartComponent() {
  const dispatch = useDispatch(); // Get the dispatch function
  const items = useSelector((state) => state.cart.items); // Access cart items from the Redux store

  return (
    <div className="flex space-x-4 p-4"> {/* Add padding to the overall container */}
      {/* Orders Component on the left */}
      <OrdersComponent />

      {/* Main Cart Component on the right */}
      <Card className="w-1/3 overflow-hidden">
        <CardHeader className="flex flex-row justify-between items-start bg-muted/50">
          <div className="grid">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Your Cart
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => dispatch(removeItem(item.id))} // Dispatch the removeItem action
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Total Items: {items.length}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
