// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, GitBranch } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/data/skills';

const Skills = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'Database': return <Database size={20} />;
      case 'BarChart3': return <BarChart3 size={20} />;
      case 'GitBranch': return <GitBranch size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Code2 />}
          title="Technical Skills"
          subtitle="Technologies and methodologies I specialize in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="text-primary-500">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;