'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Download,
  ExternalLink,
  Search,
  Filter,
  FileText,
  Code,
  BookOpen,
  Video,
  Link,
  Star,
  Calendar,
  Eye,
  Github,
  Globe,
  Zap,
  Lightbulb,
  PenTool as Tool,
  Palette,
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const resources = [
    {
      id: 1,
      title: 'React Component Library Starter',
      description:
        'A comprehensive starter template for building reusable React component libraries with TypeScript, Storybook, and automated testing.',
      category: 'Templates',
      type: 'download',
      format: 'ZIP',
      size: '2.3 MB',
      downloads: 1250,
      rating: 4.9,
      tags: ['React', 'TypeScript', 'Storybook', 'Testing'],
      image:
        'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Next.js Performance Optimization Guide',
      description:
        'Complete guide with practical examples for optimizing Next.js applications for maximum performance and SEO.',
      category: 'Guides',
      type: 'pdf',
      format: 'PDF',
      size: '5.1 MB',
      downloads: 890,
      rating: 4.8,
      tags: ['Next.js', 'Performance', 'SEO', 'Optimization'],
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'CSS Animation Toolkit',
      description:
        'Collection of 50+ CSS animations and transitions ready to use in your projects. Includes SCSS mixins and utility classes.',
      category: 'Tools',
      type: 'download',
      format: 'ZIP',
      size: '1.8 MB',
      downloads: 2100,
      rating: 4.7,
      tags: ['CSS', 'Animation', 'SCSS', 'UI/UX'],
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Full-Stack Development Roadmap 2024',
      description:
        'Interactive roadmap covering modern full-stack development technologies, learning resources, and career guidance.',
      category: 'Guides',
      type: 'link',
      format: 'Web',
      views: 15000,
      rating: 4.9,
      tags: ['Career', 'Learning', 'Full-Stack', 'Roadmap'],
      image:
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'API Design Best Practices Checklist',
      description:
        'Comprehensive checklist for designing RESTful APIs with examples, security considerations, and documentation templates.',
      category: 'Checklists',
      type: 'pdf',
      format: 'PDF',
      size: '3.2 MB',
      downloads: 750,
      rating: 4.6,
      tags: ['API', 'REST', 'Backend', 'Best Practices'],
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Modern JavaScript ES2024 Features',
      description:
        'Video series covering the latest JavaScript features with practical examples and browser compatibility information.',
      category: 'Videos',
      type: 'link',
      format: 'Video',
      duration: '2h 30m',
      views: 8500,
      rating: 4.8,
      tags: ['JavaScript', 'ES2024', 'Modern JS', 'Tutorial'],
      image:
        'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: false,
    },
    {
      id: 7,
      title: 'Docker Development Environment Setup',
      description:
        'Complete Docker configuration for full-stack development with database, caching, and monitoring services.',
      category: 'Templates',
      type: 'download',
      format: 'ZIP',
      size: '1.2 MB',
      downloads: 980,
      rating: 4.7,
      tags: ['Docker', 'DevOps', 'Development', 'Configuration'],
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'UI/UX Design System Template',
      description:
        'Complete design system with components, color palettes, typography, and Figma templates for consistent UI design.',
      category: 'Design',
      type: 'download',
      format: 'Figma',
      size: '15.5 MB',
      downloads: 1800,
      rating: 4.9,
      tags: ['Design System', 'Figma', 'UI/UX', 'Components'],
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      featured: true,
    },
  ];

  const categories = [
    'All',
    'Templates',
    'Guides',
    'Tools',
    'Checklists',
    'Videos',
    'Design',
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'download':
        return <Download className="h-4 w-4" />;
      case 'pdf':
        return <FileText className="h-4 w-4" />;
      case 'link':
        return <ExternalLink className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Templates':
        return <Code className="h-4 w-4" />;
      case 'Guides':
        return <BookOpen className="h-4 w-4" />;
      case 'Tools':
        return <Tool className="h-4 w-4" />;
      case 'Videos':
        return <Video className="h-4 w-4" />;
      case 'Design':
        return <Palette className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
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
                Developer Resources
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A curated collection of templates, guides, tools, and resources
                to accelerate your development workflow. All free to download
                and use in your projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-b border-border/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources, templates, guides..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="text-xs"
                      >
                        {getCategoryIcon(category)}
                        <span className="ml-1">{category}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Resources</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">
                    Avg Rating
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">Free</div>
                  <div className="text-sm text-muted-foreground">Always</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {resources
                    .filter((resource) => resource.featured)
                    .map((resource, index) => (
                      <motion.div
                        key={resource.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="group overflow-hidden border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                          <div className="relative overflow-hidden">
                            <img
                              src={resource.image}
                              alt={resource.title}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Badge className="absolute top-4 left-4 bg-primary">
                              Featured
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="absolute top-4 right-4 bg-background/80"
                            >
                              {resource.category}
                            </Badge>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                {getTypeIcon(resource.type)}
                                <span className="text-sm font-medium">
                                  {resource.format}
                                </span>
                                {resource.size && (
                                  <span className="text-xs text-muted-foreground">
                                    • {resource.size}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-1">
                                {renderStars(resource.rating)}
                                <span className="text-xs text-muted-foreground ml-1">
                                  ({resource.rating})
                                </span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {resource.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-muted-foreground">
                                {resource.downloads ? (
                                  <>
                                    <Download className="h-4 w-4 mr-1" />
                                    {resource.downloads.toLocaleString()}{' '}
                                    downloads
                                  </>
                                ) : (
                                  <>
                                    <Eye className="h-4 w-4 mr-1" />
                                    {resource.views?.toLocaleString()} views
                                  </>
                                )}
                              </div>
                              <Button
                                size="sm"
                                className="shadow-glow hover:shadow-glow-hover"
                              >
                                {getTypeIcon(resource.type)}
                                <span className="ml-2">
                                  {resource.type === 'download'
                                    ? 'Download'
                                    : 'View'}
                                </span>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'All'
                    ? 'All Resources'
                    : `${selectedCategory} Resources`}
                </h2>
                <div className="text-sm text-muted-foreground">
                  {filteredResources.length} resource
                  {filteredResources.length !== 1 ? 's' : ''} found
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group h-full overflow-hidden border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                      <div className="relative overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge
                          variant="secondary"
                          className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-xs"
                        >
                          {getCategoryIcon(resource.category)}
                          <span className="ml-1">{resource.category}</span>
                        </Badge>
                      </div>
                      <CardContent className="p-4 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            {getTypeIcon(resource.type)}
                            <span>{resource.format}</span>
                            {resource.size && <span>• {resource.size}</span>}
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(resource.rating)}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed flex-1 line-clamp-3">
                          {resource.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {resource.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            {resource.downloads
                              ? `${resource.downloads.toLocaleString()} downloads`
                              : `${resource.views?.toLocaleString()} views`}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs"
                          >
                            {getTypeIcon(resource.type)}
                            <span className="ml-1">
                              {resource.type === 'download' ? 'Get' : 'View'}
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get notified when new resources are added. Join our community
                  of developers and never miss out on useful tools and
                  templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button className="shadow-glow hover:shadow-glow-hover">
                    <Zap className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
