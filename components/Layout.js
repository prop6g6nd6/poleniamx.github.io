import React, { useState } from 'react';
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
};

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Acerca de', href: '/about', current: false },
  { name: 'Contacto', href: '#', current: false },
  { name: 'Tienda', href: '/shop', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="min-h-full">
      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800">
        <div className="max-w-full px-12 sm:px-12 lg:px-16">
          <div className="flex h-20 sm:h-24 md:h-24 items-center justify-start">
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
                      aria-current={router.pathname === item.href ? 'page' : undefined}
                      className={classNames(
                        router.pathname === item.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
              <div className="flex items-center md:ml-6">
                {/* Search Bar */}
                {/* Search Bar */}
                <div className="relative mx-4">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  />
                  <img
                    src="search-svgrepo-com.svg" // Adjust the path to your SVG icon
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  />
                </div>



                {/* Shopping Cart Button */}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View cart</span>
                  <img
                    src="/cart.svg"  // Path to your cart SVG in the public folder
                    alt="Shopping Cart Icon"
                    className="h-6 w-6"
                  />
                </button>


                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full object-cover" />
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
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={router.pathname === item.href ? 'page' : undefined}
                className={classNames(
                  router.pathname === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>

      {/* Page content */}
      <main className="mt-8">{children}</main>
    </div>
  );
};

export default Layout;
