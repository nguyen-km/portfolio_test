// components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Send />}
          title="Get in touch"
          subtitle="Let's connect and discuss opportunities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm currently open to data science, research, and analytics roles where I can apply my expertise in Bayesian statistics, machine learning, and econometrics. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Mail size={20} className="text-primary-500" />
                </div>
                <a href="mailto:nguyenkm13@gmail.com" className="hover:text-primary-500 transition">
                  nguyenkm13@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Phone size={20} className="text-primary-500" />
                </div>
                <span>(303) 803-8138</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <MapPin size={20} className="text-primary-500" />
                </div>
                <span>Denver, Colorado</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/nguyen-km"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nguyen-km"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
            action="https://formspree.io/f/xqapgvrb"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;