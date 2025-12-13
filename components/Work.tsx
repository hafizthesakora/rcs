'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaSeedling,
  FaRecycle,
  FaUsers,
  FaLeaf,
  FaHandHoldingHeart,
  FaChartLine,
  FaGlobeAfrica,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const workItems = [
    {
      icon: <FaSeedling className="w-8 h-8" />,
      title: 'Regenerative Agriculture',
      description:
        'We train farmers in sustainable farming practices that rebuild soil health, increase biodiversity, and enhance carbon sequestration.',
      features: [
        'Soil restoration techniques',
        'Composting and organic fertilizers',
        'Crop rotation and diversity',
        'Water conservation methods',
      ],
    },
    {
      icon: <FaRecycle className="w-8 h-8" />,
      title: 'Waste-to-Resource Innovation',
      description:
        'Transforming agricultural waste into valuable resources creates new income streams while reducing environmental impact.',
      features: [
        'Organic waste composting',
        'Biogas production',
        'Value-added product development',
        'Community recycling programs',
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Farmer Empowerment',
      description:
        'Building capacity through training, resources, and community support for sustainable practice implementation.',
      features: [
        'Training workshops and programs',
        'Technical support and mentoring',
        'Access to resources and funding',
        'Farmer cooperative development',
      ],
    },
  ];

  const impactAreas = [
    {
      icon: <FaLeaf className="w-10 h-10" />,
      title: 'Climate Action',
      description: 'Sequestering carbon and building resilience',
    },
    {
      icon: <FaHandHoldingHeart className="w-10 h-10" />,
      title: 'Food Security',
      description: 'Healthier soils, better yields, nutritious food',
    },
    {
      icon: <FaChartLine className="w-10 h-10" />,
      title: 'Economic Growth',
      description: 'New income opportunities for rural families',
    },
    {
      icon: <FaGlobeAfrica className="w-10 h-10" />,
      title: 'Environmental Protection',
      description: 'Protecting biodiversity and natural resources',
    },
  ];

  return (
    <>
      <section
        id="work"
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
              <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">Our Services</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
              What We Do
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Our comprehensive approach addresses the interconnected challenges
              of agriculture, climate, and sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
<div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#2d5016]/20 h-full">
<div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                  <ul className="space-y-4">
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-base md:text-lg text-gray-700 leading-relaxed"
                      >
                        <FaCheckCircle className="text-[#4a7c2e] mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white scroll-mt-28 md:scroll-mt-32">
        <div className="container-custom">
          <motion.div
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
              <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">Impact Areas</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
              Why It Matters
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
<div className="group text-center p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#2d5016]/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full">
<div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
