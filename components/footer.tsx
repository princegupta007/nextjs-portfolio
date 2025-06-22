"use client";

import { motion } from 'framer-motion';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resume', href: '/resume' },
      { label: 'Resources', href: '/resources' },
    ],
    sections: [
      { label: 'About', href: '/#about' },
      { label: 'Skills', href: '/#skills' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'Contact', href: '/#contact' },
    ],
    services: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'Consulting', href: '#' },
      { label: 'Code Review', href: '#' },
      { label: 'Training', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/princegupta007', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/princegupta7/', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Mail, value: 'princegupta98299@gmail.com', href: 'mailto:princegupta98299@gmail.com' },
    { icon: Phone, value: '+91 9982844166', href: 'tel:+919982844166' },
    { icon: MapPin, value: 'Jaipur, INDIA', href: '#' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-primary/5 to-background border-t border-border/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Code2 className="h-8 w-8 text-primary" />
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full blur-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-xl font-bold text-gradient">Prince Gupta</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Developer passionate about creating innovative digital 
                  experiences that make a meaningful impact.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <info.icon className="h-4 w-4 mr-3 group-hover:text-primary" />
                      {info.value}
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/50 border border-border/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-6">Pages</h3>
                  <ul className="space-y-3">
                    {footerLinks.navigation.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm block w-full text-left"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Sections */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-6">Sections</h3>
                  <ul className="space-y-3">
                    {footerLinks.sections.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm block w-full text-left"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-6">Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-foreground flex items-center"
            >
              © {currentYear} Prince Gupta. Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
              in INDIA.
            </motion.p>

            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              
              {/* Back to Top Button */}
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="hover:border-primary/40 hover:bg-primary/5"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;