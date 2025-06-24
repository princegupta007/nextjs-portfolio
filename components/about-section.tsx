'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users, Award, Heart } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Design Excellence',
      description:
        'Crafting beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Optimizing applications for speed, accessibility, and seamless user interactions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Working closely with teams to deliver projects that exceed expectations.',
    },
    {
      icon: Award,
      title: 'Quality',
      description:
        'Maintaining high standards and attention to detail in every project.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Bringing enthusiasm and dedication to create innovative digital solutions.',
    },
  ];

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Tailwind CSS',
    'Framer Motion',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 5 years of experience in full-stack development, I
              specialize in creating digital experiences that combine
              cutting-edge technology with intuitive design.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left Column - Story */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development began with a curiosity about how
                  digital experiences come to life. What started as tinkering
                  with HTML and CSS evolved into a deep passion for creating
                  applications that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that great software is more than just code—it's
                  about understanding user needs, designing elegant solutions,
                  and delivering experiences that make a meaningful impact.
                  Every project is an opportunity to learn, innovate, and push
                  the boundaries of what's possible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through blog posts and
                  mentoring.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technologies I Love</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300 group hover:shadow-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <value.icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold ml-3">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
