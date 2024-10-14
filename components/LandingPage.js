// src/components/LandingPage.js
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import EmailInput from '../components/EmailInput';
import { Dialog, DialogOverlay, DialogContent } from '../components/ui/dialog';
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
};

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Acerca de', href: '/about', current: false },
  { name: 'Contacto', href: '#', current: false },
  { name: 'Tienda', href: '#', current: false },
  // Add more links as needed
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full">
      {/* Navigation Bar */}


      <header className="bg-white shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Dashboard
          </h1>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Content Container */}
          <div className="flex flex-col items-center justify-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              ¡Bienvenido al sitio de Polenia!
            </h1>
            <p className="mb-6 text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Unete a nuestra comunidad para experimentar los sabores unicos de Polenia
            </p>
            <Button

              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => setOpen(true)}
            >
              Suscribete
            </Button>
          </div>
        </div>
      </main>




      {/* Dialog for Email Input */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/30" />
        <DialogContent className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"> {/* Adjust max-w and add padding */}
          <div className="flex justify-center">
            <EmailInput />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default LandingPage;