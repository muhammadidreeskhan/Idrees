import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Define animation variants for staggered animations
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
      transition: { duration: 0.5 }
    }
  };

  // Sample data for skills
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 70 }
  ];

  // Sample data for experience
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and Next.js."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained web applications using the MERN stack, implementing responsive designs and RESTful APIs."
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "2018 - 2019",
      description: "Created responsive websites for clients using HTML, CSS, JavaScript, and WordPress."
    }
  ];

  // Sample data for education
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Web Technologies and Software Engineering."
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      description: "Graduated with honors, focused on Programming and Database Systems."
    }
  ];

  // Sample data for certifications
  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Validated expertise in developing and maintaining applications on the AWS platform."
    },
    {
      name: "Professional React Developer",
      issuer: "React Training",
      date: "2021",
      description: "Advanced certification in React development patterns and best practices."
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2020",
      description: "Demonstrated proficiency in MongoDB database design and application development."
    }
  ];

  // Sample data for interests
  const interests = [
    {
      name: "Open Source",
      icon: <Code className="w-6 h-6 text-primary" />,
      description: "Contributing to open-source projects and sharing knowledge with the developer community."
    },
    {
      name: "Tech Meetups",
      icon: <Users className="w-6 h-6 text-primary" />,
      description: "Attending and speaking at local tech meetups and conferences."
    },
    {
      name: "Coffee & Coding",
      icon: <Coffee className="w-6 h-6 text-primary" />,
      description: "Exploring new technologies and frameworks while enjoying a good cup of coffee."
    }
  ];

  // Sample data for statistics
  const statistics = [
    { value: "5+", label: "Years Experience", icon: <Timer className="w-6 h-6" /> },
    { value: "50+", label: "Projects Completed", icon: <Briefcase className="w-6 h-6" /> },
    { value: "30+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Me | Idrees - Full Stack Developer"
        description="Learn more about Idrees, a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies."
      />
      <Navbar />
      <main className="pt-20 relative overflow-hidden" ref={targetRef}>
        {/* Particle background */}
        <ParticlesBackground />
        
        <motion.div
          style={{ opacity, y }}
          className="container mx-auto px-4 py-12"
        >
          {/* Hero section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
          >
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full Stack Developer with expertise in creating modern, responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I deliver high-quality solutions that meet client needs and exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href="/assets/idrees-resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:contact@idrees.dev">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/idrees" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/idrees" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                  <Image 
                    src="/assets/images/profile.jpg" 
                    alt="Idrees - Full Stack Developer" 
                    width={320} 
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I specialize in modern web technologies, with a focus on creating responsive, accessible, and performant applications.
              </p>
            </div>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {frontendSkills.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      variants={itemVariants}
                      className="bg-card rounded-lg p-4 shadow-md border border-border"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full bg-background/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {backendSkills.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      variants={itemVariants}
                      className="bg-card rounded-lg p-4 shadow-md border border-border"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full bg-background/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Experience section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey in web development has equipped me with a diverse skill set and valuable industry experience.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {experience.map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l border-sky-400/20 group"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <Badge variant="outline" className="w-fit">{item.period}</Badge>
                    </div>
                    <h4 className="text-primary font-medium mb-2">{item.company}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My academic background has provided me with a strong foundation in computer science and software development.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {education.map((item, index) => (
                <motion.div 
                  key={item.degree}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l border-sky-400/20 group"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <Badge variant="outline" className="w-fit">{item.period}</Badge>
                    </div>
                    <h4 className="text-primary font-medium mb-2">{item.institution}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I continuously enhance my skills through professional certifications and specialized training.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {certifications.map((item, index) => (
                <motion.div 
                  key={item.name}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l border-sky-400/20 group"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <Badge variant="outline" className="w-fit">{item.date}</Badge>
                    </div>
                    <h4 className="text-primary font-medium mb-2">{item.issuer}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 py-12 bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-amber-500/10 rounded-xl"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Personal Interests
              </h2>
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