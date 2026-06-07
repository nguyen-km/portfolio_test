// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Kevin Nguyen | Data Scientist & Applied Mathematician',
  description: 'Portfolio of Kevin Nguyen — Data Scientist at BBC Research & Consulting, specializing in Bayesian statistics, machine learning, and economic analysis.',
  keywords: 'Data Scientist, Bayesian Statistics, Machine Learning, Python, R, Economics, Portfolio',
  authors: [{ name: 'Kevin Nguyen' }],
  openGraph: {
    title: 'Kevin Nguyen | Data Scientist',
    description: 'Portfolio showcasing statistical modeling, ML pipelines, and data engineering projects.',
    url: 'https://kevinnguyen.dev',
    siteName: 'Kevin Nguyen Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}