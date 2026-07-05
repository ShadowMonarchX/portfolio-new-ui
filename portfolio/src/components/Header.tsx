import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = useMemo(
    () => [
      { title: 'Home', link: 'hero' },
      { title: 'About', link: 'about' },
      { title: 'Projects', link: 'projects' },
      { title: 'Experience', link: 'experience' },
      { title: 'Certifications', link: 'certifications' },
      { title: 'Contact', link: 'contact' },
    ],
    [],
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
        }`}
      style={{
        background: isScrolled
          ? 'var(--theme-surface)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? 'var(--theme-shadow)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--theme-border)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient cursor-pointer relative group"
            onClick={() => {
              const heroSection = document.getElementById('hero');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Jenish</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.15, 1] }}
              transition={reduceMotion ? { duration: 0 } : { duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.link}
                href={`#${item.link}`}
                whileHover={{ y: -2 }}
                className="theme-toggle hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-colors duration-300 relative group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'dark'}
            className="theme-toggle theme-focus-ring hidden md:inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-9h1M3 12H4m14.364 6.364l.707.707M5.636 5.636l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z" />
              </svg>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden theme-toggle transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute left-0 right-0 top-full theme-surface rounded-b-lg"
              >
              <nav className="flex flex-col space-y-4 p-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.link}
                    href={`#${item.link}`}
                    whileHover={{ x: 10 }}
                    className="theme-toggle transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  aria-pressed={theme === 'dark'}
                  className="theme-toggle theme-focus-ring flex items-center gap-2 rounded-lg py-2 text-left"
                >
                  {theme === 'light' ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-9h1M3 12H4m14.364 6.364l.707.707M5.636 5.636l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z" />
                    </svg>
                  )}
                  <span>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
