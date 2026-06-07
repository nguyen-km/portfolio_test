// components/SectionHeading.tsx
import { ReactNode } from 'react';

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const SectionHeading = ({ icon, title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center p-2 bg-primary-500/10 rounded-xl mb-4">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;