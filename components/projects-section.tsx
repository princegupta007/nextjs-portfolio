'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  ExternalLink,
  Github,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description:
        'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and advanced analytics dashboard.',
      longDescription:
        'This comprehensive e-commerce solution includes user authentication, shopping cart functionality, payment integration with Stripe, real-time inventory management, order tracking, and an admin dashboard with analytics. Built with performance and scalability in mind.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Stripe',
        'PostgreSQL',
        'Prisma',
      ],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription:
        'A comprehensive project management tool featuring Kanban boards, real-time collaboration, file uploads, time tracking, team management, and detailed reporting. Designed for teams of all sizes with a focus on productivity and ease of use.',
      image:
        'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'React',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Express',
        'Material-UI',
      ],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI/ML',
      description:
        'An intelligent analytics dashboard that leverages machine learning to provide actionable insights and predictive analytics.',
      longDescription:
        'This advanced analytics platform uses AI to analyze large datasets, generate insights, and provide predictive analytics. Features include data visualization, automated reporting, anomaly detection, and machine learning models for forecasting.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'React',
        'D3.js',
        'PostgreSQL',
        'AWS',
      ],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'Full Stack',
      description:
        'A modern social media platform with real-time messaging, content sharing, and advanced privacy controls.',
      longDescription:
        'A feature-rich social platform including user profiles, real-time messaging, content sharing, story features, privacy controls, and content moderation. Built with scalability and user experience as top priorities.',
      image:
        'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'Next.js',
        'GraphQL',
        'PostgreSQL',
        'Redis',
        'AWS S3',
        'WebSockets',
      ],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      category: 'Finance',
      description:
        'A comprehensive cryptocurrency tracking application with portfolio management and market analysis tools.',
      longDescription:
        'A sophisticated crypto tracking platform featuring real-time price updates, portfolio management, technical analysis tools, price alerts, news integration, and detailed market analytics.',
      image:
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'Vue.js',
        'Node.js',
        'Chart.js',
        'WebSockets',
        'CoinGecko API',
        'Firebase',
      ],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Education',
      description:
        'An interactive learning platform with course creation, progress tracking, and collaborative learning features.',
      longDescription:
        'A comprehensive LMS featuring course creation tools, video streaming, interactive quizzes, progress tracking, discussion forums, and certification management. Designed for educators and learners alike.',
      image:
        'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      technologies: [
        'React',
        'Django',
        'PostgreSQL',
        'AWS',
        'FFmpeg',
        'Stripe',
      ],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const categories = [
    'All',
    'Full Stack',
    'Web App',
    'AI/ML',
    'Finance',
    'Education',
  ];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'All' || project.category === activeCategory,
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1,
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1,
        );
      }
    }
  };

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating technical expertise
              and creative problem-solving across various technologies and
              domains.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category
                    ? 'shadow-glow'
                    : 'hover:border-primary/40'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className={
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }
                >
                  <Card className="group overflow-hidden border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80">
                          {project.category}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => {
                                  setSelectedProject(project.id);
                                  setCurrentImageIndex(0);
                                }}
                              >
                                <Play className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                              {selectedProjectData && (
                                <div className="space-y-6">
                                  {/* Image Gallery */}
                                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                                    <img
                                      src={
                                        selectedProjectData.images[
                                          currentImageIndex
                                        ]
                                      }
                                      alt={`${selectedProjectData.title} - Image ${currentImageIndex + 1}`}
                                      className="w-full h-full object-cover"
                                    />

                                    {selectedProjectData.images.length > 1 && (
                                      <>
                                        <Button
                                          size="icon"
                                          variant="secondary"
                                          className="absolute left-4 top-1/2 transform -translate-y-1/2"
                                          onClick={prevImage}
                                        >
                                          <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                          size="icon"
                                          variant="secondary"
                                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                          onClick={nextImage}
                                        >
                                          <ChevronRight className="h-4 w-4" />
                                        </Button>

                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                          {selectedProjectData.images.map(
                                            (_, idx) => (
                                              <button
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                  idx === currentImageIndex
                                                    ? 'bg-white'
                                                    : 'bg-white/50'
                                                }`}
                                                onClick={() =>
                                                  setCurrentImageIndex(idx)
                                                }
                                              />
                                            ),
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </div>

                                  {/* Project Details */}
                                  <div>
                                    <div className="flex items-center justify-between mb-4">
                                      <h3 className="text-2xl font-bold">
                                        {selectedProjectData.title}
                                      </h3>
                                      <Badge variant="outline">
                                        {selectedProjectData.category}
                                      </Badge>
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                      {selectedProjectData.longDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                      {selectedProjectData.technologies.map(
                                        (tech) => (
                                          <Badge key={tech} variant="secondary">
                                            {tech}
                                          </Badge>
                                        ),
                                      )}
                                    </div>

                                    <div className="flex space-x-4">
                                      <Button asChild>
                                        <a
                                          href={selectedProjectData.live}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <ExternalLink className="mr-2 h-4 w-4" />
                                          Live Demo
                                        </a>
                                      </Button>
                                      <Button variant="outline" asChild>
                                        <a
                                          href={selectedProjectData.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <Github className="mr-2 h-4 w-4" />
                                          Source Code
                                        </a>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button size="lg" className="shadow-glow hover:shadow-glow-hover">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
