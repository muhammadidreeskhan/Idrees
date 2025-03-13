import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Star,
  Calendar,
  Clock,
  Tag
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import SEO from '@/components/SEO';

// Sample data for latest projects
const latestProjects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=E-commerce+Platform",
    link: "/projects/ecommerce"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Social+Media+Dashboard",
    link: "/projects/dashboard"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    tech: ["React Native", "Redux", "Node.js"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Mobile+Banking+App",
    link: "/projects/banking"
  }
];

// Sample data for latest blog posts
const latestPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for building large-scale React applications",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    category: "Development",
    link: "/blog/building-scalable-react-apps"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends in web development for 2024",
    date: "Mar 8, 2024",
    readTime: "4 min read",
    category: "Technology",
    link: "/blog/future-of-web-development"
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks for improving React application performance",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    category: "Performance",
    link: "/blog/optimizing-react-performance"
  }
];

const Index: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "-100px" });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Muhammad Idrees - Full Stack Developer"
        description="Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable and performant web applications."
        keywords={["full stack developer", "react", "node.js", "web development"]}
        type="website"
      />
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        <Statistics />
        <Features />

        {/* Latest Projects Section */}
        <section ref={projectsRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Latest Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore some of my recent work and see how I can help bring your ideas to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={project.link}>
                    <Card className="group overflow-hidden h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-secondary/10">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" className="group/btn w-full justify-between">
                            View Project
                            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section ref={postsRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: postsInView ? 1 : 0, y: postsInView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Latest Insights
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stay updated with my latest thoughts on development, design, and technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={post.link}>
                    <Card className="group h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-secondary/10">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link to="/blog">
                <Button variant="outline" size="lg" className="group">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;