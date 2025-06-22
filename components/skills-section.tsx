"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Layers,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "text-purple-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Vercel", level: 90 },
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-pink-500",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility", level: 80 },
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "Postman", "Figma", "Notion", "Slack",
    "Linear", "Vercel", "Supabase", "Prisma", "Stripe", "Auth0"
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "Meta React Certification",
    "MongoDB Certified Developer"
  ];

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

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical{" "}
              <span className="text-gradient">Proficiency</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and expertise 
              accumulated through years of hands-on development experience.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300 glass-effect">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-background/50 ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: "100%" } : { width: 0 }}
                            transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Certifications */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tools */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Layers className="h-6 w-6 text-primary mr-3" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GitBranch className="h-6 w-6 text-primary mr-3" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3D Element */}
          <motion.div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden 2xl:block opacity-10"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="text-9xl select-none">⚡</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;