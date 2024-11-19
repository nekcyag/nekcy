"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const menuItems = ['Home', 'Services', 'Portfolio', 'Clients', 'Contact'];

  useEffect(() => {
    const originalHeaderHeight = 100; // adjust this value to match your original header height
    const bufferZone = 20; // buffer zone before reaching original header

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowFloatingHeader(currentScrollY > originalHeaderHeight + bufferZone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = ({ className = "", itemClassName = "" }) => (
    <ul className={`flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 ${className}`}>
      {menuItems.map((item) => (
        <li key={item}>
          <Link href={`#${item.toLowerCase()}`} className={`text-gray-600 hover:text-blue-500 transition-colors ${itemClassName}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  const BookCallButton = ({ className = "" }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 px-4 py-2 
        text-blue-600 font-medium
        border-2 border-blue-600 rounded-full
        hover:bg-blue-50 transition-colors duration-300
        ${className}
      `}
    >
      <Phone className="w-4 h-4" />
      <Link href='https://cal.com/nekcy/15min'>
        Book a Call
      </Link>
    </motion.button>
  );

  return (
    <>
      {/* Original header */}
      <header className="relative z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
          <Link href="/" className="hover:scale-105 transition-transform flex items-center gap-2">
            <Image 
              src="/nekcy-logo.svg"
              alt="Nekcy Logo"
              width={80}
              height={40}
              className="object-contain w-auto h-8"
              priority
            />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text font-bold text-xl">
              Nekcy
            </span>
          </Link>

            <div className="hidden md:flex items-center gap-6">
              <nav>
                <NavItems />
              </nav>
              <BookCallButton />
            </div>

            <Sheet>
              <SheetTrigger className="md:hidden p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="mt-12">
                  <NavItems className="px-2" itemClassName="block py-2" />
                  <div className="mt-6 px-2">
                    <BookCallButton className="w-full justify-center" />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Floating header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showFloatingHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-4 mt-4">
          <div className="container mx-auto bg-white/10 backdrop-blur-md rounded-full px-6 shadow-lg">
            <div className="py-3 px-4 flex justify-between items-center">
            <Link href="/" className="hover:scale-105 transition-transform flex items-center gap-2">
            <Image 
              src="/nekcy-logo.svg"
              alt="Nekcy Logo"
              width={80}
              height={40}
              className="object-contain w-auto h-8"
              priority
            />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text font-bold text-xl">
              Nekcy
            </span>
          </Link>

              <div className="hidden md:flex items-center gap-6">
                <nav>
                  <NavItems />
                </nav>
                <BookCallButton />
              </div>

              <Sheet>
                <SheetTrigger className="md:hidden p-2">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="mt-12">
                    <NavItems className="px-2" itemClassName="block py-2" />
                    <div className="mt-6 px-2">
                      <BookCallButton className="w-full justify-center" />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;