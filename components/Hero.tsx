// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary-500"
          >
            Data Scientist & Applied Mathematician
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold mb-6"
          >
            Kevin M. Nguyen
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Building Bayesian models, ML pipelines, and data-driven insights at the intersection of statistics, economics, and engineering.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <MapPin size={18} />
              <span>Denver, CO</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Phone size={18} />
              <span>(303) 803-8138</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Mail size={18} />
              <span>nguyenkm13@gmail.com</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-all duration-200"
            >
              View my work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#experience" className="block animate-bounce">
            <ArrowDown className="text-slate-400 dark:text-slate-600" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;