'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSeedling, FaFire } from 'react-icons/fa';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      icon: <FaSeedling className="w-10 h-10" />,
      title: 'Oti Soils and Climate Initiative',
      subtitle: 'Black Gold Project',
      description:
        'A comprehensive soil restoration initiative focused on transforming degraded agricultural lands in the Oti Region through sustainable practices and community engagement. This project aims to turn depleted soils into fertile "black gold" that supports healthy crop production and carbon sequestration.',
      highlights: [
        'Soil health restoration',
        'Climate resilience building',
        'Community-led implementation',
        'Carbon sequestration focus',
      ],
    },
    {
      icon: <FaFire className="w-10 h-10" />,
      title: 'Rural Biochar Initiative',
      subtitle: 'Carbon Gold Project',
      description:
        'An innovative biochar production program that converts agricultural waste into valuable soil amendments. This project empowers rural communities to produce and apply biochar, improving soil fertility while permanently sequestering carbon.',
      highlights: [
        'Biochar production training',
        'Agricultural waste conversion',
        'Soil fertility improvement',
        'Long-term carbon storage',
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="section-spacing bg-gradient-to-b from-gray-50 to-white scroll-mt-28 md:scroll-mt-32"
    >
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
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">
              Our Projects
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
            Current Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Our flagship initiatives driving sustainable change in rural Ghana
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#2d5016]/20 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-[#f59e0b] mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-[#2d5016]/10 text-[#2d5016] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
