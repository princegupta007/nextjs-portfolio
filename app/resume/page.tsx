'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Github,
  Linkedin,
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ResumePage = () => {
  const personalInfo = {
    name: 'Prince Gupta',
    title: 'Full Stack Developer & Creative Innovator',
    email: 'princegupta98299@gmail.com',
    phone: '+91 9982844166',
    location: 'Jaipur, INDIA',
    website: 'https://princegupta7.netlify.app/',
    github: 'https://github.com/princegupta007',
    linkedin: 'https://linkedin.com/in/princegupta7',
  };

  const experience = [
    {
      company: 'TechFlow Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'Jaipur, INDIA',
      description:
        'Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'StartupLab',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Jaipur, INDIA',
      description:
        'Developed MVP for multiple startup projects. Built responsive web applications and RESTful APIs from concept to production.',
      achievements: [
        'Built 3 successful MVPs that secured $2M+ in funding',
        'Reduced development time by 30% through reusable components',
        'Implemented real-time features using WebSocket technology',
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe'],
    },
    {
      company: 'Digital Solutions Co.',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Remote',
      description:
        'Specialized in creating responsive, accessible web interfaces. Collaborated with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Improved website accessibility score to 98%',
        'Reduced page load times by 50% through optimization',
        'Mentored 2 junior developers in modern frontend practices',
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Webpack', 'Jest'],
    },
  ];

  const education = [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      achievements: [
        'Magna Cum Laude',
        "Dean's List (6 semesters)",
        'Computer Science Honor Society',
      ],
    },
    {
      institution: 'Stanford University',
      degree: 'Certificate in Machine Learning',
      period: '2021',
      achievements: [
        'Completed with Distinction',
        'Final project on neural networks',
      ],
    },
  ];

  const skills = {
    Frontend: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    Backend: [
      'Node.js',
      'Python',
      'Express.js',
      'Django',
      'GraphQL',
      'REST APIs',
    ],
    Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'],
    DevOps: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify'],
    Tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress'],
  };

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-2023-001',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PRO-2022-001',
    },
    {
      name: 'Meta React Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022',
    },
  ];

  const projects = [
    {
      name: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory and payment processing',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
    },
    {
      name: 'AI Analytics Dashboard',
      description:
        'Machine learning powered analytics platform with predictive insights',
      technologies: ['Python', 'TensorFlow', 'React'],
      link: '#',
    },
    {
      name: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates',
      technologies: ['React', 'Socket.io', 'MongoDB'],
      link: '#',
    },
  ];

  const downloadResume = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual PDF file
    link.download = 'Prince_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-4">
                Professional Resume
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {personalInfo.title}
              </p>
              <Button
                onClick={downloadResume}
                size="lg"
                className="shadow-glow hover:shadow-glow-hover"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-b border-border/20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <Card className="text-center bg-card shadow-md rounded-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Mail className="h-8 w-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-center break-all">
                      {personalInfo.email}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-card shadow-md rounded-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Phone className="h-8 w-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-center">
                      {personalInfo.phone}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-card shadow-md rounded-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <MapPin className="h-8 w-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="font-medium text-center">
                      {personalInfo.location}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-card shadow-md rounded-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Globe className="h-8 w-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Website
                    </p>
                    <p className="font-medium text-center break-all">
                      {personalInfo.website ||
                        'https://princegupta7.netlify.app/'}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2 flex items-center">
                  <Briefcase className="h-8 w-8 text-primary mr-3" />
                  Professional Experience
                </h2>
                <p className="text-muted-foreground">
                  My professional journey and key achievements
                </p>
              </motion.div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-border/20 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-primary">
                              {job.position}
                            </h3>
                            <p className="text-lg font-medium">{job.company}</p>
                            <p className="text-sm text-muted-foreground">
                              {job.location}
                            </p>
                          </div>
                          <div className="flex items-center mt-2 lg:mt-0">
                            <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="text-sm font-medium">
                              {job.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start"
                              >
                                <span className="text-primary mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2 flex items-center">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  Education
                </h2>
                <p className="text-muted-foreground">
                  Academic background and continuous learning
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary mb-1">
                          {edu.degree}
                        </h3>
                        <p className="font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                        {edu.gpa && (
                          <p className="text-sm font-medium mb-3">
                            GPA: {edu.gpa}
                          </p>
                        )}
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2 flex items-center">
                  <Code className="h-8 w-8 text-primary mr-3" />
                  Technical Skills
                </h2>
                <p className="text-muted-foreground">
                  Technologies and tools I work with
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary mb-4">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2 flex items-center">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  Certifications
                </h2>
                <p className="text-muted-foreground">
                  Professional certifications and achievements
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <Award className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {cert.issuer}
                        </p>
                        <p className="text-sm font-medium">{cert.date}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          ID: {cert.credentialId}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">
                  Notable projects and contributions
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/20 hover:border-primary/20 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Interested in my background and experience? Let's discuss how
                  I can contribute to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="shadow-glow hover:shadow-glow-hover"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" size="lg" onClick={downloadResume}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
