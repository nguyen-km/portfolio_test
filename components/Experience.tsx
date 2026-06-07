// components/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Briefcase />}
          title="Work Experience"
          subtitle="Professional journey across data science, research, and engineering"
        />
        
        <div className="space-y-8 mt-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary-500/30 hover:border-primary-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-primary-500 font-medium">@{exp.company}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;