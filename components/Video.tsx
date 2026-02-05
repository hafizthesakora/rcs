'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Video() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className="section-spacing bg-gradient-to-b from-gray-50/50 to-white scroll-mt-28 md:scroll-mt-32">
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
            <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">Watch Our Story</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
            Our Vision in
            <br />
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">Action</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            See how we're transforming rural communities through sustainable agriculture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src="https://drive.google.com/file/d/198GhjUOrzIsU3lmsY93LbygmRnVhyqKl/preview"
              className="w-full aspect-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
