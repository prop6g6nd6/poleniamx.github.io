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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from "lucide-react";

// Orders Component
function OrdersComponent() {
  return (
    <Card className="flex-1"> {/* Use flex-1 for full width */}
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-8">Order ID</TableHead> {/* Add padding */}
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
            {/* Sample Rows */}
            <TableRow className="bg-accent">
              <TableCell className="px-8 py-4">Oe31b70H</TableCell>
              <TableCell className="px-8 py-4">
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
              </TableCell>
              <TableCell className="px-8 sm:table-cell py-4">Credit Card</TableCell>
              <TableCell className="px-8 hidden sm:table-cell py-4">1234 Elm St, Springfield</TableCell>
              <TableCell className="px-8 hidden sm:table-cell py-4">Sale</TableCell>
              <TableCell className="px-8 sm:table-cell py-4">
                <Badge className="text-xs" variant="secondary">Fulfilled</Badge>
              </TableCell>
              <TableCell className="px-8 hidden md:table-cell py-4">2023-06-23</TableCell>
              <TableCell className="px-8 text-right py-4">$250.00</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// Main Cart Component
export default function CartComponent() {
  return (
    <div className="flex space-x-4 p-4"> {/* Add padding to the overall container */}
      {/* Orders Component on the left */}
      <OrdersComponent />

      {/* Main Cart Component on the right */}
      <Card className="w-1/3 overflow-hidden"> {/* Adjust width as needed */}
        <CardHeader className="flex flex-row justify-between items-start bg-muted/50">
          <div className="grid">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order Oe31b70H
              <Button size="icon" variant="outline" className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100">
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: November 23, 2023</CardDescription>
          </div>
          <div className="flex items-center">
            <Button size="sm" variant="outline" className="h-8 ml-4"> {/* Added ml-4 for spacing */}
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          {/* Order details and other content */}
          {/* ... (Your existing content here) */}
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">Updated <time dateTime="2023-11-23">November 23, 2023</time></div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}


