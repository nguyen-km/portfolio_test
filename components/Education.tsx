// components/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '@/data/education';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<GraduationCap />}
          title="Education"
          subtitle="Academic background in mathematics, statistics, and economics"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary-500 font-medium mt-1">{edu.school}</p>
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-1 bg-primary-500/10 px-3 py-1 rounded-full">
                    <Star size={14} className="text-primary-500" />
                    <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;