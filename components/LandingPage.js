// src/components/LandingPage.js
import React, { useState } from 'react';
import { 
    Dialog, 
    DialogOverlay, 
    DialogContent, 
    DialogTitle, 
    DialogDescription, 
    DialogClose 
  } from '../components/ui/dialog.jsx'; // Ensure the path is correct
import EmailInput from '../components/EmailInput.js'; // Adjust import path if needed
import { Button } from "../components/ui/button.jsx"


const LandingPage = () => {
  const [open, setOpen] = useState(false); // State to manage dialog visibility

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenido al sitio de Polenia!</h1>
      <p className="text-lg text-center mb-6">
        Estamos trabajando para ti.
      </p>
      <Button 
        variant="outline" 
        onClick={() => setOpen(true)} // Open the dialog on button click
      >
        Suscribete
      </Button>

      {/* Dialog for Email Input */}
      <Dialog open={open} onOpenChange={setOpen}>
  <DialogOverlay className="fixed inset-0 bg-black/30" />
  
  <DialogContent className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 w-full max-w-md">
    <DialogTitle className="text-xl font-semibold text-center">Subscribe to our Newsletter</DialogTitle>
    <DialogDescription className="mt-2 text-center">
      Enter your email below to subscribe.
    </DialogDescription>
    
    <EmailInput /> {/* This will be centered in the dialog */}
    
    <DialogClose 
      className="mt-4 bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600" 
      onClick={() => setOpen(false)}
    >
      Close
    </DialogClose>
  </DialogContent>
</Dialog>
    </div>
  );
};

export default LandingPage;