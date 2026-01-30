'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="#home" 
            className="flex items-center space-x-4 md:space-x-5 flex-shrink-0 group"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.jpg"
                alt="RCS Logo"
                fill
                className="object-contain rounded-full ring-2 ring-white/20"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg sm:text-xl transition-colors ${
                scrolled ? 'text-[#2d5016]' : 'text-white'
              }`}>
                Rural Climate Solutions
              </span>
              <span className={`text-xs font-medium ${
                scrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                RCS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 whitespace-nowrap relative group ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${index > 0 ? 'ml-8 lg:ml-10' : ''}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4a7c2e] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#donate"
              className="ml-8 lg:ml-10 bg-gradient-to-r from-[#2d5016] to-[#4a7c2e] text-white px-7 py-3 rounded-full hover:from-[#4a7c2e] hover:to-[#2d5016] transition-all duration-300 transform hover:scale-105 font-semibold text-sm whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Support Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-[#4a7c2e] py-3 font-semibold transition-colors text-base border-b border-gray-100 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-[#2d5016] to-[#4a7c2e] text-white px-6 py-4 rounded-full text-center hover:from-[#4a7c2e] hover:to-[#2d5016] transition-all duration-300 font-semibold shadow-lg mt-4"
              >
                Support Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
