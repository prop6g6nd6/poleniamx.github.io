// src/components/LandingPage.js
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import EmailInput from '../components/EmailInput';
import { Dialog, DialogOverlay, DialogContent } from '../components/ui/dialog';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
};

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Shop', href: '#', current: false },
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
      <Disclosure as="nav" className="bg-gray-800">
        <div className="px-2 sm:px-6 lg:px-8"> {/* Adjusted padding */}
          <div className="flex h-16 items-center justify-start"> {/* Changed to justify-start */}
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Polenia"
                  src="/Polenia Ginger Beer - Logo y variaciones-17.png"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-2 flex items-baseline space-x-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Notification and Profile Section */}
            <div className="hidden md:block ml-auto">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                    </MenuButton>
                  </div>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Dashboard
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Welcome to Polenia!
            </h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              onClick={() => setOpen(true)}
            >
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Dialog for Email Input */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/30" />
        <DialogContent>
          <div className="flex justify-center">
            <EmailInput />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;