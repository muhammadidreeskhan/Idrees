import { motion, useScroll, useSpring, useTransform, MotionStyle, TargetAndTransition } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Calendar, 
  MapPin, 
  Download, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Coffee,
  Code,
  Users,
  Timer,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Image } from "../components/Image";
import SEO from '@/components/SEO';
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import ParticlesBackground from "../components/ParticlesBackground";
import { useInView } from "react-intersection-observer";

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Mouse position state for parallax effects
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

  // Define staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skills = {
    frontend: [
      { name: "React.js", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "Tailwind CSS", level: 90, color: "#38B2AC" },
      { name: "Framer Motion", level: 80, color: "#FF0055" },
    ],
    backend: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "MongoDB", level: 75, color: "#47A248" },
      { name: "RESTful APIs", level: 85, color: "#FF6C37" },
      { name: "GraphQL", level: 70, color: "#E535AB" },
    ]
  };

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications using React and Node.js.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced loading time by 50%",
        "Implemented responsive designs"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Web Technologies",
      achievements: [
        "GPA: 3.8/4.0",
        "Published research paper on Web Performance Optimization",
        "Led student developer community"
      ]
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016",
      description: "Foundation in Computer Science and Programming",
      achievements: [
        "First Class Honours",
        "Best Final Year Project Award",
        "Active member of coding club"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "/assets/images/aws-cert.png"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2022",
      icon: "/assets/images/google-cert.png"
    },
    {
      name: "Meta Frontend Developer",
      issuer: "Meta",
      date: "2022",
      icon: "/assets/images/meta-cert.png"
    }
  ];

  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      name: "Open Source",
      description: "Contributing to community projects"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Coffee & Code",
      description: "Perfect combination for productivity"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Tech Blogging",
      description: "Sharing knowledge with others"
    }
  ];

  const stats = [
    {
      icon: <Timer className="w-6 h-6" />,
      value: "5+",
      label: "Years of Experience"
    },
    {
      icon: <Code className="w-6 h-6" />,
      value: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "30+",
      label: "Happy Clients"
    }
  ];

  // Counter animation component
  const CounterAnimation = ({ targetValue }: { targetValue: number | string }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    // Extract the numeric part from strings like "5+"
    const numericValue = typeof targetValue === 'string' 
      ? parseInt(targetValue.replace(/\D/g, ''))
      : targetValue;
    
    // Check if the original value had a plus sign
    const hasPlus = typeof targetValue === 'string' && targetValue.includes('+');
    
    useEffect(() => {
      if (inView) {
        let startTime: number;
        let animationFrameId: number;
        
        const animateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          
          // Animation duration in milliseconds (1.5 seconds)
          const duration = 1500;
          
          // Calculate the current count based on progress
          const currentCount = Math.min(Math.floor((progress / duration) * numericValue), numericValue);
          
          setCount(currentCount);
          
          if (progress < duration) {
            animationFrameId = requestAnimationFrame(animateCount);
          }
        };
        
        animationFrameId = requestAnimationFrame(animateCount);
        
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        };
      }
    }, [inView, numericValue]);
    
    // Display value with plus sign if original had it
    const displayValue = hasPlus ? `${count}+` : count;
      
    return <span ref={ref}>{displayValue}</span>;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="About Me"
        description="Full Stack Developer specializing in React, Node.js, and modern web technologies. Learn about my experience, skills, and professional journey."
        keywords={["full stack developer", "react developer", "node.js", "web development", "UI/UX design"]}
        type="profile"
      />
      
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground className="opacity-40" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
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
      
      <Navbar />
      <main className="container mx-auto px-4 py-20" ref={targetRef}>
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/5 backdrop-blur-sm relative z-10">
                <Image
                  src="/assets/images/profile.jpg"
                  alt="Muhammad Idrees"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-8 top-20 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-lg z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
                } as MotionStyle}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Full Stack Dev</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-8 bottom-20 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-lg z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
                } as MotionStyle}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">UI/UX Expert</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Muhammad Idrees
                </h1>
                <div className="relative">
                  <h2 className="text-xl md:text-2xl text-muted-foreground inline-flex items-center gap-2">
                    Full Stack Developer
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block w-2 h-2 rounded-full bg-primary"
                    ></motion.span>
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 bg-background/50 backdrop-blur-md rounded-xl p-6 border border-primary/10 shadow-lg"
              >
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:text-primary transition-colors">
                    contactmuhammadidrees@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Available for new projects</span>
                </div>
                <div className="flex space-x-4 pt-2">
                  <Button 
                    className="gap-2 bg-primary/90 hover:bg-primary"
                    onClick={() => window.open('/assets/idrees-resume.pdf', '_blank')}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open('https://www.coroflot.com/Muhammadidreeskhan/stream', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Portfolio
                  </Button>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-background/50 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-background/50 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:contactmuhammadidrees@gmail.com" 
                  className="p-3 bg-background/50 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              })}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="group hover:border-primary/50 transition-colors overflow-hidden bg-background/70 backdrop-blur-md border-primary/10 shadow-lg">
                  <CardContent className="p-8 relative">
                    {/* Decorative gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm group-hover:from-primary/10 transition-all duration-500"></div>
                    
                    <div className="relative flex items-center space-x-6">
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary">
                          <CounterAnimation targetValue={stat.value} />
                        </div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* About Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            
            <div className="bg-background/50 backdrop-blur-md rounded-xl p-8 border border-primary/10 shadow-lg space-y-6 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              
              <motion.p 
                className="text-lg leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Hello! I'm Muhammad Idrees, a passionate Full Stack Developer with expertise in React.js and Next.js. 
                With years of experience in web development, I've helped numerous clients bring their digital visions to life.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies and best practices. 
                My goal is to deliver high-quality solutions that not only meet but exceed client expectations.
              </motion.p>
              
              <motion.div
                className="pt-4 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button 
                  className="gap-2 px-8 py-6 bg-primary/90 hover:bg-primary shadow-lg"
                  onClick={() => window.open('/contact', '_self')}
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="mb-10 bg-background/50 backdrop-blur-md border border-primary/10 p-1 rounded-xl">
                <TabsTrigger 
                  value="frontend" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  Frontend Development
                </TabsTrigger>
                <TabsTrigger 
                  value="backend"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  Backend Development
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="frontend" className="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-background/70 backdrop-blur-md border-primary/10 shadow-lg overflow-hidden"
                      >
                        <CardContent className="p-6 relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm group-hover:from-primary/10 transition-all duration-500"></div>
                          
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
                              <Badge 
                                variant="secondary"
                                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                                className="transition-all duration-300 group-hover:shadow-md"
                              >
                                {skill.level}%
                              </Badge>
                            </div>
                            <div className="h-2 bg-secondary/20 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                className="h-full"
                                style={{ backgroundColor: skill.color } as MotionStyle}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="backend" className="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-background/70 backdrop-blur-md border-primary/10 shadow-lg overflow-hidden"
                      >
                        <CardContent className="p-6 relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm group-hover:from-primary/10 transition-all duration-500"></div>
                          
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
                              <Badge 
                                variant="secondary"
                                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                                className="transition-all duration-300 group-hover:shadow-md"
                              >
                                {skill.level}%
                              </Badge>
                            </div>
                            <div className="h-2 bg-secondary/20 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                className="h-full"
                                style={{ backgroundColor: skill.color } as MotionStyle}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Experience Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            
            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  <Card className="ml-12 md:ml-6 hover:border-primary/50 transition-colors bg-background/70 backdrop-blur-md border-primary/10 shadow-lg overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Decorative gradient */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm"></div>
                      
                      {/* Timeline dot */}
                      <div className="absolute -left-[28px] md:-left-3 top-8 w-8 h-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center shadow-md">
                        <Briefcase className="w-3 h-3 text-primary" />
                      </div>
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-primary">{exp.company}</p>
                          </div>
                          <div className="flex items-center text-muted-foreground mt-2 md:mt-0 bg-background/50 rounded-full px-4 py-1 shadow-sm border border-primary/10">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 bg-background/50 p-4 rounded-lg border border-primary/5">{exp.description}</p>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start space-x-3 bg-background/30 p-3 rounded-lg border border-primary/5"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                            >
                              <span className="w-2 h-2 mt-2 bg-primary rounded-full"></span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  <Card className="ml-12 md:ml-6 hover:border-primary/50 transition-colors bg-background/70 backdrop-blur-md border-primary/10 shadow-lg overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Decorative gradient */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm"></div>
                      
                      {/* Timeline dot */}
                      <div className="absolute -left-[28px] md:-left-3 top-8 w-8 h-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center shadow-md">
                        <GraduationCap className="w-3 h-3 text-primary" />
                      </div>
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-primary">{edu.school}</p>
                          </div>
                          <div className="flex items-center text-muted-foreground mt-2 md:mt-0 bg-background/50 rounded-full px-4 py-1 shadow-sm border border-primary/10">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 bg-background/50 p-4 rounded-lg border border-primary/5">{edu.description}</p>
                        <ul className="space-y-3">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start space-x-3 bg-background/30 p-3 rounded-lg border border-primary/5"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                            >
                              <span className="w-2 h-2 mt-2 bg-primary rounded-full"></span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="group overflow-hidden bg-background/70 backdrop-blur-md border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 relative">
                      {/* Decorative elements */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm"></div>
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300"></div>
                      
                      <div className="relative flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-lg bg-background shadow-md p-2 border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                          <img src={cert.icon} alt={cert.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <div className="mt-2 flex items-center bg-background/50 rounded-full px-3 py-1 text-xs w-fit border border-primary/10">
                            <Calendar className="w-3 h-3 mr-1 text-primary" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary rounded-full mr-4"
                viewport={{ once: true }}
              ></motion.div>
              <h2 className="text-3xl font-bold">Personal Interests</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Card className="group overflow-hidden h-full bg-background/70 backdrop-blur-md border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 relative h-full">
                      {/* Decorative gradient */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-lg blur-sm group-hover:from-primary/10 transition-all duration-500"></div>
                      
                      <div className="relative h-full flex flex-col">
                        <div className="p-4 rounded-xl bg-background/70 shadow-md border border-primary/10 w-fit mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                          {interest.icon}
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{interest.name}</h3>
                          <p className="text-muted-foreground">{interest.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;