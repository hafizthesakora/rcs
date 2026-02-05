'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      content: 'Ghana',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'rcsclimate@outlook.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      content: '+1 (514) 574-4172',
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-gray-50 to-white scroll-mt-28 md:scroll-mt-32">
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
            <span className="bg-[#2d5016]/10 text-[#2d5016] px-6 py-2 rounded-full text-sm font-bold">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">
            Contact Us
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Join us in building a sustainable future for rural farming communities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Whether you're a farmer, partner, donor, or volunteer, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-5 group"
                >
<div className="w-14 h-14 bg-gradient-to-br from-[#2d5016] to-[#4a7c2e] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2 text-lg md:text-xl">{info.title}</h4>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 space-y-6 border border-gray-100">
              <div>
                <label htmlFor="name" className="block text-base md:text-lg font-bold text-gray-900 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-[#2d5016] transition-all duration-300 outline-none text-base md:text-lg leading-relaxed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-bold text-gray-900 mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-[#2d5016] transition-all duration-300 outline-none text-base md:text-lg leading-relaxed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base md:text-lg font-bold text-gray-900 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-[#2d5016] transition-all duration-300 outline-none text-base md:text-lg leading-relaxed"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base md:text-lg font-bold text-gray-900 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2d5016] focus:border-[#2d5016] transition-all duration-300 outline-none resize-none text-base md:text-lg leading-relaxed"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2d5016] to-[#4a7c2e] text-white px-8 py-5 rounded-xl font-bold text-base md:text-lg hover:from-[#4a7c2e] hover:to-[#2d5016] transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
              >
                Send Message
                <FaPaperPlane className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-xl font-semibold"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
