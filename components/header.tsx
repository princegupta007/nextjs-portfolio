"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Code2, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Only track sections on home page
      if (pathname === '/') {
        const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const mainNavItems = [
    { href: '/', label: 'Home', isPage: true },
    { href: '/blog', label: 'Blog', isPage: true },
    { href: '/resume', label: 'Resume', isPage: true },
    { href: '/resources', label: 'Resources', isPage: true },
  ];

  const homeNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // Handle section scrolling on home page
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    } else {
      // Handle page navigation
      router.push(href);
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActivePage = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const isActiveSection = (href: string) => {
    return pathname === '/' && activeSection === href.slice(1);
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Prince Gupta</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-lg opacity-30"
              />
              <Code2 className="relative h-8 w-8 text-primary group-hover:text-purple-500 transition-colors duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prince Gupta
              </span>
              <div className="text-xs text-muted-foreground font-medium">
                Full Stack Developer
              </div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Main Pages */}
            {mainNavItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActivePage(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                {isActivePage(item.href) && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Home Page Sections (only show on home page) */}
            {pathname === '/' && (
              <>
                <div className="w-px h-6 bg-border/20 mx-2" />
                {homeNavItems.slice(1).map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActiveSection(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 4) * 0.1 }}
                  >
                    {item.label}
                    {isActiveSection(item.href) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </>
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === 'dark' ? 180 : 0,
                  scale: theme === 'dark' ? 1.1 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-500" />
                )}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{ 
                  scale: theme === 'dark' ? [1, 1.2, 1] : 1,
                  opacity: theme === 'dark' ? [0.2, 0.4, 0.2] : 0
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection(pathname === '/' ? '#contact' : '/#contact')}
                size="sm"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  Let's Talk
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <motion.nav 
                className="py-6 px-4 bg-background/95 backdrop-blur-xl border-t border-border/20 rounded-b-2xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-2">
                  {/* Main Pages */}
                  {mainNavItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                        isActivePage(item.href)
                          ? 'text-primary bg-primary/10 shadow-lg'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:rotate-0 transition-transform duration-300" />
                    </motion.button>
                  ))}

                  {/* Home Page Sections (only show on home page) */}
                  {pathname === '/' && (
                    <>
                      <div className="border-t border-border/20 my-4" />
                      {homeNavItems.slice(1).map((item, index) => (
                        <motion.button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                            isActiveSection(item.href)
                              ? 'text-primary bg-primary/10 shadow-lg'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index + 4) * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:rotate-0 transition-transform duration-300" />
                        </motion.button>
                      ))}
                    </>
                  )}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-border/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    onClick={() => scrollToSection(pathname === '/' ? '#contact' : '/#contact')}
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
                    size="lg"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                    >
                      Get In Touch
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "left"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
};

export default Header;