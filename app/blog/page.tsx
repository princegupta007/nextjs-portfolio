"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Filter,
  BookOpen,
  Code,
  Lightbulb,
  Zap
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 14",
      excerpt: "Learn how to leverage the latest features in Next.js 14 to build performant, scalable React applications with server components and improved routing.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["Next.js", "React", "Performance", "SSR"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Dive deep into advanced TypeScript patterns, utility types, and best practices that will make your code more robust and maintainable.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 3,
      title: "The Future of Web Development: AI-Powered Development Tools",
      excerpt: "Explore how AI is revolutionizing web development with intelligent code completion, automated testing, and smart debugging tools.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "AI/ML",
      tags: ["AI", "Development Tools", "Future Tech"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 4,
      title: "Optimizing Database Performance in Node.js Applications",
      excerpt: "Learn essential techniques for optimizing database queries, implementing caching strategies, and improving overall application performance.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Backend",
      tags: ["Node.js", "Database", "Performance", "Optimization"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Creating Beautiful Animations with Framer Motion",
      excerpt: "Master the art of web animations using Framer Motion. From basic transitions to complex orchestrated animations.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Frontend",
      tags: ["Animation", "Framer Motion", "React", "UI/UX"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 6,
      title: "Deploying Full-Stack Applications with Docker and AWS",
      excerpt: "A comprehensive guide to containerizing and deploying full-stack applications using Docker, AWS ECS, and modern DevOps practices.",
      content: "Full article content here...",
      author: "Prince Gupta",
      date: "2023-12-15",
      readTime: "18 min read",
      category: "DevOps",
      tags: ["Docker", "AWS", "DevOps", "Deployment"],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categories = ["All", "React", "TypeScript", "AI/ML", "Backend", "Frontend", "DevOps"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'React': return <Code className="h-4 w-4" />;
      case 'TypeScript': return <Zap className="h-4 w-4" />;
      case 'AI/ML': return <Lightbulb className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
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
                Technical Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Insights & <span className="text-gradient">Tutorials</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sharing knowledge, best practices, and insights from the world of web development. 
                From beginner tutorials to advanced techniques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-b border-border/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles, tags, or topics..."
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
                        variant={selectedCategory === category ? "default" : "outline"}
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
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "All" && searchTerm === "" && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {blogPosts.filter(post => post.featured).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Badge className="absolute top-4 left-4 bg-primary">
                            Featured
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
                <div className="text-sm text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group h-full overflow-hidden border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge 
                          variant="secondary" 
                          className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm"
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-xs font-semibold group-hover:text-primary">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;