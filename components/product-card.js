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

export default function ProductCard({ productName, description, price, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false); // State to control the drawer

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Card className="w-[300px] overflow-hidden shadow-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="relative h-[200px] w-full">
        <Image
          src={imageUrl}
          alt={productName}
          fill // Updated to use fill prop
          style={{ objectFit: "cover" }} // Use inline styles for objectFit
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
        {/* Button to open the drawer */}
        <Button onClick={handleOpen} className="w-full">Buy Now</Button>
      </CardFooter>

      {/* Drawer Implementation */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-white rounded-lg p-6 shadow-lg"> {/* Add background, padding, and shadow */}
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-gray-800">{productName}</DrawerTitle>
            <DrawerDescription className="text-gray-600">{description}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex justify-between mt-4">
            {/* Adjusted button widths */}
            <Button onClick={handleClose} variant="outline" className="text-gray-600 w-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>Close</Button>
            <Button style={{ fontFamily: 'Manrope, sans-serif' }}>Confirm Purchase</Button>
          </DrawerFooter>
        </DrawerContent>
        <DrawerClose />
      </Drawer>
    </Card>
  );
}
