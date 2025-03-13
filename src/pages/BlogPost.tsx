import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { Button } from '../components/ui/button';
import { blogPosts } from './Blog';
import { generateBlogPostSchema } from "../utils/schema";
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { useEffect, useRef } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Get related posts based on tags
  const relatedPosts = post
    ? blogPosts
        .filter(p => 
          p.id !== post.id && 
          p.tags.some(tag => post.tags.includes(tag))
        )
        .slice(0, 3)
    : [];

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: "Muhammad Idrees",
    url: `https://idrees-portfolio.vercel.app/blog/${post.slug}`
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={`${post.title} | Your Name`}
        description={post.excerpt}
        schema={blogPostSchema}
      />
      <Navbar />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        <article className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link to="/blog">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <Button variant="ghost" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 hover:bg-primary/20"
                >
                  <Tag className="mr-2 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div 
            ref={contentRef}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag 
                    key={index} 
                    className="scroll-mt-20"
                    id={text.toLowerCase().replace(/\s+/g, '-')}
                  >
                    {text}
                  </HeadingTag>
                );
              }
              
              if (paragraph.trim().match(/^\d\./)) {
                return (
                  <ul key={index} className="list-decimal pl-6 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.replace(/^\d\.\s/, '')}</li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.trim().startsWith('```')) {
                const code = paragraph.replace(/```\w*\n/, '').replace(/```$/, '');
                return (
                  <pre key={index} className="bg-muted p-4 rounded-lg my-4 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              }

              return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </article>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <OptimizedImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        )}
      </motion.main>
      <Footer />
    </div>
  );
};

export default BlogPost;
