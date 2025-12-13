'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white to-gray-50/50 scroll-mt-28 md:scroll-mt-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">About Us</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
            About Rural Climate
            <br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Transforming local farming communities through sustainable practices and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 md:space-y-10"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-primary text-xl md:text-2xl">Rural Climate Solutions (RCS)</span> is a pioneering organization dedicated to transforming local farming communities across Ghana through sustainable agricultural practices and innovative waste management solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We work directly with farmers to implement regenerative agriculture techniques that restore soil health, increase crop yields, and combat climate change. Our waste-to-resource initiatives turn agricultural waste into valuable products, creating circular economy opportunities in rural communities.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Through capacity building, technical support, and community empowerment, we're creating a sustainable future where farmers thrive while protecting our environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
<div className="bg-gradient-to-br from-[#2d5016]/10 to-[#4a7c2e]/10 p-8 rounded-2xl border border-[#2d5016]/20 hover:border-[#2d5016]/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-xl flex items-center justify-center text-white">
                      <FaUsers className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-base md:text-lg text-gray-700 font-semibold">Farmers Trained</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
<div className="bg-gradient-to-br from-[#2d5016]/10 to-[#4a7c2e]/10 p-8 rounded-2xl border border-[#2d5016]/20 hover:border-[#2d5016]/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-xl flex items-center justify-center text-white">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">75+</div>
                  <div className="text-base md:text-lg text-gray-700 font-semibold">Communities</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/logo.jpg"
                alt="RCS Mission"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-white mb-3">Grow Soil, Grow Future</p>
                  <p className="text-base md:text-lg text-white/90">Regenerative Agriculture & Innovation</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-2xl opacity-20 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
