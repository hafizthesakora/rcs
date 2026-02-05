'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
            {/* About */}
            <div className="lg:col-span-1">
              <Link href="#home" className="flex items-center space-x-3 mb-6 group">
                <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logo.jpg"
                    alt="RCS Logo"
                    fill
                    className="object-contain rounded-full ring-2 ring-white/20"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white">Rural Climate Solutions</span>
                  <span className="text-xs text-gray-400">RCS</span>
                </div>
              </Link>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Empowering local farmers through regenerative agriculture and waste-to-resource innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Quick Links</h4>
              <div className="space-y-4">
                <Link href="#home" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Home
                </Link>
                <Link href="#about" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  About Us
                </Link>
                <Link href="#work" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Our Work
                </Link>
                <Link href="#impact" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Impact
                </Link>
              </div>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Get Involved</h4>
              <div className="space-y-4">
                <Link href="#donate" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Donate
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Contact Us
                </Link>
                <Link href="#volunteer" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Volunteer
                </Link>
                <Link href="#partner" className="block text-gray-400 hover:text-[#4a7c2e] transition-colors text-base md:text-lg leading-relaxed font-medium">
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Newsletter</h4>
              <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                Stay updated with our latest news and impact stories.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-[#2d5016]-light text-base md:text-lg placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2e] px-6 py-3.5 rounded-xl hover:from-[#4a7c2e] hover:to-[#2d5016] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FaPaperPlane className="w-5 h-5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-base md:text-lg mt-4 leading-relaxed font-semibold">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              &copy; {new Date().getFullYear()} Rural Climate Solutions. All rights reserved.
            </p>
            <div className="flex items-center text-sm md:text-base text-gray-400">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>for a sustainable future</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating Donate Button */}
      <Link
        href="#donate"
        className="fixed bottom-8 right-8 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:from-[#4a7c2e] hover:to-[#2d5016] transition-all duration-300 transform hover:scale-110 z-40 group"
        aria-label="Donate"
      >
        <FaHeart className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </Link>
    </>
  );
}
