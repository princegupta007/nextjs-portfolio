'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, performance optimization, and user experience design were outstanding. Our conversion rates increased by 40% after launch.',
      rating: 5,
      project: 'E-Commerce Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupLab',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'Working with Alex was a game-changer for our startup. He transformed our complex requirements into an intuitive, scalable application. His technical expertise and problem-solving skills are remarkable.',
      rating: 5,
      project: 'Task Management App',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'DataViz Solutions',
      avatar:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'The analytics dashboard Alex built for us provides incredible insights into our data. The AI-powered features have revolutionized how we make business decisions. Highly recommended for any data-driven project.',
      rating: 5,
      project: 'AI Analytics Dashboard',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder',
      company: 'EduTech Pro',
      avatar:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'Alex created a learning management system that perfectly fits our educational needs. The platform is intuitive, feature-rich, and has significantly improved our student engagement rates.',
      rating: 5,
      project: 'Learning Management System',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Operations Manager',
      company: 'FinanceFlow',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'The cryptocurrency tracker Alex developed is incredibly sophisticated yet user-friendly. Real-time updates, portfolio management, and market analysis tools are exactly what we needed.',
      rating: 5,
      project: 'Crypto Tracker',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Head of Engineering',
      company: 'SocialConnect',
      avatar:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      content:
        'Alex delivered a robust social media platform with excellent scalability and security features. His code quality and attention to best practices made our development process smooth and efficient.',
      rating: 5,
      project: 'Social Media Platform',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what clients and colleagues
              have to say about working with me and the results we've achieved
              together.
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div variants={fadeInUp} className="mb-16">
            <Card className="border-border/20 glass-effect max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <motion.div
                      key={currentIndex}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                        <AvatarImage src={testimonials[currentIndex].avatar} />
                        <AvatarFallback>
                          {testimonials[currentIndex].name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                        <Quote className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      key={`content-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex justify-center lg:justify-start mb-4">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      <div className="space-y-1">
                        <h4 className="text-xl font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].role} at{' '}
                          {testimonials[currentIndex].company}
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          {testimonials[currentIndex].project}
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted hover:bg-muted-foreground/20'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* All Testimonials Grid */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-center mb-12">
              All Reviews
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                        "
                        {testimonial.content.length > 150
                          ? testimonial.content.substring(0, 150) + '...'
                          : testimonial.content}
                        "
                      </blockquote>

                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
