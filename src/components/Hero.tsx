import { motion, useScroll, useTransform, MotionStyle, TargetAndTransition } from 'framer-motion';
import { ArrowRight, Code2, Palette, Rocket, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownCircle } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

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

  // Staggered animation for children elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 sm:py-32"
      style={heroStyle}
    >
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Logo or brand icon */}
          <motion.div 
            variants={item}
            className="mx-auto mb-8 w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg"
          >
            <Code2 className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
            } as MotionStyle}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Muhammad Idrees
            </span>
          </motion.h1>

          <motion.div 
            variants={item} 
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 h-[40px]"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
                'Tech Innovator',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div 
            variants={item}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-primary/10 text-foreground shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  transition: { duration: 0.2 }
                } as TargetAndTransition}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
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
              className="w-full sm:w-auto backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            variants={item}
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
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full bg-background/10 backdrop-blur-sm border border-primary/10"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  } as TargetAndTransition}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownCircle className="w-10 h-10 text-primary/80 cursor-pointer" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;