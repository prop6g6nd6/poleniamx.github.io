// src/components/LandingPage.js
import React, { useState } from 'react';
import EmailInput from '../components/EmailInput';
import { Dialog, DialogOverlay, DialogContent } from '../components/ui/dialog';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
          </h1>
        </div>
      </header>

      <main className="bg-white min-h-screen flex items-center justify-center">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Centered Content Container */}
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <Card>
        <CardHeader>
          <CardTitle>Suscríbete a nuestro newsletter</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>Ingresa para recibir noticias e incribles descuentos</p>
        </CardContent>
        <CardFooter className="flex justify-center"> {/* Center the button */}
          <Button
            style={{ fontFamily: 'Manrope, sans-serif' }}
            onClick={() => setOpen(true)}
          >
            Suscríbete
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</main>


      {/* Dialog for Email Input */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/30" />
        <DialogContent className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center">
            <EmailInput />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;
