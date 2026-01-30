'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
      <motion.span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
        {rounded}
      </motion.span>
      <span className="text-[#f59e0b]">{suffix}</span>
    </div>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 60, suffix: '+', label: 'Farmers Reached', icon: '👨‍🌾' },
    { value: 3, suffix: '', label: 'Communities in Beachhead Zone', icon: '🏘️' },
    { value: 5, suffix: '', label: 'Compost Ambassadors in Training', icon: '🌱' },
    { value: 2, suffix: '', label: 'Active Projects', icon: '♻️' }
  ];

  return (
    <section id="impact" className="relative section-spacing overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016] via-primary-light to-primary">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Modern animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-custom">
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
            <span className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold border border-white/20">
              Our Achievements
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-tight">
            Our Impact
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Measurable change in communities across Ghana
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-white/95 text-base md:text-lg lg:text-xl font-semibold mt-4 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 max-w-5xl mx-auto">
            <p className="text-white text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
              Every day, we're building a more sustainable future for rural communities,
              <span className="font-bold text-[#f59e0b]"> one farm at a time.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
