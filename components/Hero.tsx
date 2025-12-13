'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Enhanced Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016] via-primary-light to-primary">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Modern animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/20">
              Empowering Rural Communities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Growing Soil,
            <br />
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
              Growing Future
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering local farmers through regenerative agriculture and waste-to-resource innovation
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#about"
              className="group bg-white text-[#2d5016] px-10 py-4 md:px-14 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl whitespace-nowrap inline-flex items-center gap-3"
            >
              Learn About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group bg-transparent border-2 border-white/80 text-white px-10 py-4 md:px-14 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-[#2d5016] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap inline-flex items-center gap-3"
            >
              Get Involved
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/80 cursor-pointer hover:text-white transition-colors"
          >
            <Link href="#about" className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1.5">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
