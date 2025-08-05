import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const headlines = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const skills = ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'AWS'];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroStyle = {
    opacity: opacityValue
  } as MotionStyle;

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 sm:py-32"
      style={heroStyle}
    >
      {/* 3D Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {/* Animated code snippets */}
        <motion.div 
          className="absolute top-[10%] left-[5%] w-32 h-32 rounded-lg bg-background/30 backdrop-blur-md border border-primary/20 p-3 shadow-xl"
          style={{ 
            x: mousePosition.x * -0.5, 
            y: mousePosition.y * -0.5,
            rotate: -5
          }}
        >
          <pre className="text-[8px] text-primary/70 overflow-hidden">{`function Portfolio() {
  return (
    <div className="innovative">
      <Code quality="clean" />
      <Design type="responsive" />
    </div>
  );
}`}</pre>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-lg bg-background/30 backdrop-blur-md border border-primary/20 p-3 shadow-xl"
          style={{ 
            x: mousePosition.x * 0.3, 
            y: mousePosition.y * 0.3,
            rotate: 3
          }}
        >
          <div className="h-full w-full rounded bg-background/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-mono text-primary/70">Experience</div>
              <div className="text-2xl font-bold text-primary">5+ Years</div>
              <div className="text-xs text-muted-foreground mt-1">Full Stack Development</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 relative"
            >
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl animate-pulse" />
                <img 
                  src="/public/assets/images/profile.jpg" 
                  alt="Muhammad Idrees" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 p-1 bg-background/80"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x200/10B981/ffffff?text=MI";
                  }}
                />
                <motion.div 
                  className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary"
            >
              Muhammad Idrees
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-16 flex justify-center items-center mb-6"
            >
              <div className="text-xl md:text-2xl font-medium text-foreground/90 flex items-center gap-2">
                <span>I'm a</span>
                <span className="text-primary font-bold">
                  <TypeAnimation
                    sequence={headlines.flatMap(headline => [headline, 2000])}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              I craft exceptional digital experiences with modern technologies, focusing on performance, accessibility, and beautiful design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-4 py-2 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 text-foreground shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="group w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                <span>View My Work</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto backdrop-blur-md border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <span>Download CV</span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center justify-center gap-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all p-3 rounded-full bg-background/30 backdrop-blur-md border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;