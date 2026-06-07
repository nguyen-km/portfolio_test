// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Kevin M. Nguyen. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;