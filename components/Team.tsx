'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    {
      image: '/team/member1.jpg',
      name: 'Dennis Dankwa',
      role: 'CEO/Founder',
      description: 'Waste-to-Resource Scientist, Carbon Accounting Specialist',
    },
    {
      image: '/team/member2.jpg',
      name: 'Isaac O. Amponsah',
      role: 'Co-Founder & Environment Lead',
      description:
        'Environmental Scientist, Environmental Consulting Specialist',
    },
    {
      image: '/team/member3.jpg',
      name: 'Isaac O. Amponsah',
      role: 'Co-Founder & Environment Lead',
      description:
        'Environmental Scientist, Environmental Consulting Specialist',
    },
    {
      image: '/team/member4.jpg',
      name: 'Ibrahim Sabiku',
      role: 'Co-Founder & CTO',
      description: 'Bioresource Engineer, Smart Systems & Process Design',
    },
    {
      image: '/team/member5.jpg',
      name: 'Mary-Grace Kanwille',
      role: 'Head of Finance & Admin',
      description:
        'Financial Oversight Specialist (ex-UN FAO), Project Cycle Management',
    },
  ];

  const ambassadors = {
    count: 5,
    title: 'Compost Ambassadors in Training',
    description:
      'Community leaders being trained to champion sustainable composting practices in their villages.',
  };

  const patron = {
    image: '/team/patron.jpg',
    name: 'Capt. Dr. Ir. Peter N-jonaam Mahama (PhD)',
    role: 'Patron',
    credentials: [
      'PhD in Environmental Engineering Management',
      'MSc in Geo-Information Science (University of Twente, Netherlands)',
      'BSc in Water and Sanitation (University of Cape Coast)',
    ],
    description:
      'Environmental engineer, public health specialist, and sustainability advocate. Currently serving as Principal Public Health Officer (Environmental) and Captain in the Ghana Armed Forces with UN service experience. Led the Circular Wastewater Initiative Project, designing composting facilities and ensuring environmental compliance. Provides strategic guidance and technical insight to advance RCS\'s mission.',
  };

  return (
    <section
      id="team"
      className="section-spacing bg-white scroll-mt-28 md:scroll-mt-32"
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
              Our Team
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
            Meet the Team
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Dedicated individuals working to transform rural communities
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10 mb-16 md:mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-gray-800 font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#2d5016] font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compost Ambassadors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[#2d5016]/10 to-[#4a7c2e]/10 rounded-3xl p-8 md:p-12 border border-[#2d5016]/20 max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="text-6xl md:text-7xl font-extrabold text-primary mb-4">
            {ambassadors.count}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {ambassadors.title}
          </h3>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {ambassadors.description}
          </p>
        </motion.div>

        {/* Patron Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <span className="bg-[#f59e0b]/20 text-[#b45309] px-6 py-2 rounded-full text-sm font-bold">
            Our Patron
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <Image
                  src={patron.image}
                  alt={patron.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {patron.name}
                </h3>
                <p className="text-[#f59e0b] font-semibold text-lg mb-4">
                  {patron.role}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  {patron.credentials.map((credential, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 text-white/90 px-3 py-1 rounded-full text-xs"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {patron.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
