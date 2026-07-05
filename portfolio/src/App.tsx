import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Suspense fallback={null}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
      </div>
      <Analytics />
    </div>
  );
};

export default App; 
