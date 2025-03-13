import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  featured?: boolean;
}

const defaultImage = '/assets/images/placeholder.jpg';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 14 vs React: A Complete Comparison Guide for 2024',
    excerpt: 'An in-depth comparison between Next.js 14 and React, helping developers choose the right framework for their projects. Learn about Server Components, App Router, and performance optimizations.',
    content: `# Next.js 14 vs React: A Complete Comparison Guide for 2024

In today's rapidly evolving web development landscape, choosing the right framework is crucial for project success. Next.js 14 has introduced groundbreaking features that are reshaping how we build web applications. In this comprehensive guide, we'll explore the key differences and help you make an informed decision.

## Understanding Server Components

Server Components represent a paradigm shift in React applications. Here's what you need to know:

1. Server Components are rendered entirely on the server, reducing client-side JavaScript
2. They enable better performance by eliminating unnecessary client-side processing
3. Perfect for static content and SEO-critical pages
4. Seamless integration with client components when interactivity is needed

## The Revolutionary App Router

Next.js 14's App Router brings significant improvements to routing and data fetching:

1. File-system based routing with improved organization
2. Built-in loading and error states
3. Parallel route rendering capabilities
4. Improved data fetching with server components

## Built-in SEO Optimizations

SEO is crucial for modern web applications. Next.js 14 provides:

1. Automatic metadata optimization
2. Enhanced static generation capabilities
3. Improved crawlability with server-side rendering
4. Built-in image optimization

## Performance Comparisons

Let's look at real-world performance metrics:

1. Initial page load: Next.js 14 is 30% faster
2. Time to First Byte (TTFB): 50ms vs 150ms
3. First Contentful Paint: 0.8s vs 1.2s
4. Total Bundle Size: Reduced by up to 40%

## When to Choose Next.js over React

Consider Next.js 14 when:

1. Building SEO-critical applications
2. Requiring server-side rendering
3. Working on large-scale applications
4. Needing built-in performance optimizations

## Best Practices and Implementation Tips

To get the most out of Next.js 14:

1. Leverage server components for static content
2. Use client components judiciously
3. Implement proper caching strategies
4. Optimize images using the built-in Image component

Whether you're building a small project or an enterprise application, this guide will help you make an informed decision based on your specific needs and requirements.`,
    date: '2024-01-20',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Performance', 'SEO', 'Server Components'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    slug: 'nextjs-14-vs-react-comparison',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Essential Tips for Modern Web Development',
    excerpt: 'Discover advanced TypeScript techniques that will improve your code quality and development workflow. From type inference to custom utility types, learn how to leverage TypeScript\'s full potential.',
    content: `# Mastering TypeScript: Essential Tips for Modern Web Development

TypeScript has revolutionized how we write and maintain JavaScript applications. This comprehensive guide will help you master TypeScript's advanced features and best practices.

## Advanced Type Inference Techniques

Understanding type inference is crucial for TypeScript mastery:

1. Conditional types and their practical applications
2. Using infer keyword effectively
3. Template literal types for string manipulation
4. Recursive type definitions
5. Type inference in generic functions

## Creating and Using Utility Types

TypeScript's utility types are powerful tools for type manipulation:

1. Understanding built-in utility types
2. Creating custom mapped types
3. Using intersection and union types effectively
4. Template literal type transformations
5. Type guards and type narrowing

## Best Practices for Large-Scale Applications

Scale your TypeScript applications effectively:

1. Project structure and organization
2. Module architecture patterns
3. Dependency management
4. Type declaration strategies
5. Configuration best practices

## Performance Optimization Techniques

Optimize your TypeScript applications:

1. Type-level computation optimization
2. Bundle size reduction strategies
3. Development workflow improvements
4. Compilation performance tips
5. Runtime performance considerations

## Integration with Popular Frameworks

Learn how to use TypeScript with modern frameworks:

1. React and TypeScript best practices
2. Vue.js type safety
3. Angular's built-in TypeScript support
4. Node.js and Express integration
5. Testing frameworks and TypeScript

## Advanced TypeScript Features

Master these advanced concepts:

1. Decorators and metadata
2. Abstract classes and interfaces
3. Generics and constraints
4. Mapped and conditional types
5. Module augmentation

Level up your TypeScript skills and write more maintainable, type-safe code that scales.`,
    date: '2024-01-18',
    readTime: '15 min read',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming', 'Type Safety', 'Development'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop',
    slug: 'mastering-typescript-essential-tips',
    featured: true
  },
  {
    id: '3',
    title: 'AI-Powered Web Development: Tools and Techniques for 2024',
    excerpt: 'Explore how AI is transforming web development with tools like GitHub Copilot, ChatGPT, and AI-driven testing. Learn to leverage AI for better productivity and code quality.',
    content: `# AI-Powered Web Development: Tools and Techniques for 2024

Artificial Intelligence is revolutionizing web development, making developers more productive and efficient than ever before. Let's explore the cutting-edge AI tools and techniques that are shaping the future of web development.

## AI Coding Assistants: A Developer's Best Friend

Modern AI coding assistants have transformed how we write code:

1. GitHub Copilot: Advanced code completion and generation
2. Amazon CodeWhisperer: AWS-optimized coding assistant
3. Tabnine: AI-powered code completion
4. ChatGPT for coding: Problem-solving and debugging
5. Best practices for working with AI assistants

## Automated Testing with AI

AI is revolutionizing software testing:

1. AI-powered test generation
2. Automated visual regression testing
3. Smart test maintenance and updates
4. Performance testing automation
5. Security vulnerability detection

## AI-Driven Design Systems

Transform your design workflow with AI:

1. AI design tools and frameworks
2. Automated responsive design
3. Design system maintenance
4. Component suggestions and variations
5. Accessibility improvements

## Performance Optimization Using AI

Leverage AI for better performance:

1. Automated performance monitoring
2. Smart caching strategies
3. Resource optimization
4. Load time prediction
5. User behavior analysis

## Future Trends in AI Web Development

Stay ahead with emerging trends:

1. Natural language to code generation
2. Automated code refactoring
3. AI-powered debugging
4. Intelligent code review
5. Predictive development analytics

## Implementation Strategies

Successfully integrate AI into your workflow:

1. Choosing the right AI tools
2. Setting up development environments
3. Team training and adoption
4. Quality control and verification
5. Cost-benefit analysis

Stay ahead of the curve by mastering these AI-powered development tools and techniques. The future of web development is here, and it's powered by artificial intelligence.`,
    date: '2024-01-15',
    readTime: '12 min read',
    tags: ['AI', 'Web Development', 'Automation', 'Future Tech', 'GitHub Copilot', 'ChatGPT', 'Development Tools'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    slug: 'ai-powered-web-development-2024',
    featured: true
  },
  {
    id: '4',
    title: 'Building High-Performance React Applications: The Ultimate Guide',
    excerpt: 'Learn advanced techniques for optimizing React applications, from code splitting to rendering optimization and state management strategies. Master the art of building blazing-fast React apps.',
    content: `# Building High-Performance React Applications: The Ultimate Guide

Performance is crucial for modern web applications. This comprehensive guide will help you optimize your React applications for maximum speed and efficiency.

## Advanced Code Splitting Strategies

Optimize your bundle size with smart code splitting:

1. Route-based code splitting
2. Component-based splitting
3. Dynamic imports and lazy loading
4. Micro-frontends architecture
5. Bundle analysis and optimization

## React Server Components Implementation

Leverage the power of Server Components:

1. Server Component architecture
2. Client-Server component balance
3. Data fetching strategies
4. Streaming and Suspense
5. Error handling and fallbacks

## State Management Optimization

Master efficient state management:

1. React Context optimization
2. Redux performance tips
3. Recoil for atomic state
4. Zustand implementation
5. State persistence strategies

## Memory Leak Prevention

Keep your application memory-efficient:

1. Identifying memory leaks
2. Cleanup in useEffect
3. Event listener management
4. Cache invalidation
5. Component lifecycle optimization

## Performance Monitoring and Analysis

Track and improve performance:

1. React DevTools profiler
2. Lighthouse optimization
3. Core Web Vitals monitoring
4. Custom performance metrics
5. Real user monitoring

## Advanced Optimization Techniques

Take performance to the next level:

1. Virtual scrolling implementation
2. Web Workers integration
3. Service Worker strategies
4. Browser rendering optimization
5. Network optimization

Transform your React applications into high-performance masterpieces with these proven techniques and strategies.`,
    date: '2024-01-12',
    readTime: '15 min read',
    tags: ['React', 'Performance', 'Optimization', 'Web Development', 'JavaScript', 'Server Components', 'State Management'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    slug: 'high-performance-react-applications',
    featured: true
  },
  {
    id: '5',
    title: 'The Complete Guide to Web Accessibility in 2024',
    excerpt: 'Master web accessibility (a11y) with this comprehensive guide covering WCAG guidelines, testing tools, and implementation strategies. Learn how to create truly inclusive web experiences.',
    content: `# The Complete Guide to Web Accessibility in 2024

Creating accessible websites is not just about compliance—it's about ensuring everyone can access and use your web content effectively. This comprehensive guide will help you master web accessibility.

## Understanding WCAG 2.2 Guidelines

Master the latest accessibility standards:

1. New success criteria in WCAG 2.2
2. Understanding conformance levels
3. Mobile accessibility requirements
4. Focus management guidelines
5. Target size and spacing rules

## Accessibility Testing Tools and Methods

Implement effective testing strategies:

1. Automated testing tools
2. Manual testing techniques
3. Screen reader testing
4. Keyboard navigation testing
5. Color contrast analysis

## Keyboard Navigation Best Practices

Ensure complete keyboard accessibility:

1. Focus management
2. Skip links implementation
3. Modal and popup handling
4. Custom component navigation
5. Touch device considerations

## Screen Reader Optimization

Make your content screen reader-friendly:

1. ARIA labels and landmarks
2. Dynamic content updates
3. Form field associations
4. Table accessibility
5. Document structure

## Color and Typography Guidelines

Create visually accessible designs:

1. Color contrast requirements
2. Typography best practices
3. Focus indicators
4. Icon accessibility
5. Motion and animation considerations

## Implementation Strategies

Put accessibility into practice:

1. Component-level accessibility
2. Form validation techniques
3. Error handling
4. Progressive enhancement
5. Performance considerations

Learn how to create inclusive web experiences that work for everyone, regardless of their abilities or circumstances.`,
    date: '2024-01-10',
    readTime: '14 min read',
    tags: ['Accessibility', 'Web Development', 'UX', 'WCAG', 'A11y', 'Inclusive Design', 'User Experience'],
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1000&auto=format&fit=crop',
    slug: 'complete-web-accessibility-guide',
    featured: true
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  // Get featured posts (posts marked as featured or the latest 2 posts)
  const featuredPosts = blogPosts
    .filter(post => post.featured)
    .slice(0, 2);

  // Get all unique categories from posts
  const categories = Array.from(new Set(blogPosts.map(post => {
    const firstTag = post.tags[0]; // Using first tag as category
    return firstTag;
  })));

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search term, tag, and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesCategory = !selectedCategory || post.tags[0] === selectedCategory;
    return matchesSearch && matchesTag && matchesCategory;
  });

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Blog | Your Name"
        description="Explore our latest articles about web development, design, and technology."
      />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4"
      >
        <div className="pt-28 pb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Explore articles about web development, design, and technology
          </p>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map(post => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/blog/${post.slug}`}>
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6">
                      <Badge className="mb-4" variant="secondary">Featured</Badge>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Search and Filters Section */}
        <section className="mb-8 bg-card rounded-lg p-6 border border-border">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            <select
              className="px-4 py-2 rounded-lg border border-border bg-background"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className="flex items-center"
              >
                <Tag className="mr-2 h-3 w-3" />
                {tag}
              </Button>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-12 bg-primary/5 rounded-lg p-8 border border-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles and tech insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map(post => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <Link to={`/blog/${post.slug}`}>
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.article>
          ))}
        </section>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Blog;
