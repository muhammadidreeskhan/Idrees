import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code, 
  Layout, 
  Smartphone, 
  Globe, 
  Database,
  Zap,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  Plus,
  Minus,
  Filter,
  Calendar
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useInView } from "react-intersection-observer";
import SEO from '@/components/SEO';

// Service categories
const categories = [
  "All",
  "Design",
  "Development",
  "Mobile",
  "Consulting"
];

// Services data with categories for filtering
const services = [
  {
    icon: <Layout className="w-10 h-10" />,
    title: "UI/UX Design",
    description: "Create beautiful and functional interfaces with focus on user experience",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing"
    ],
    color: "#FF6B6B",
    category: "Design"
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Frontend Development",
    description: "Build modern and responsive web applications using latest technologies",
    features: [
      "React.js Development",
      "Next.js Applications",
      "Responsive Design",
      "Performance Optimization",
      "Animation & Interaction"
    ],
    color: "#4ECDC4",
    category: "Development"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Backend Development",
    description: "Develop robust and scalable server-side solutions",
    features: [
      "API Development",
      "Database Design",
      "Authentication & Security",
      "Cloud Integration",
      "Performance Optimization"
    ],
    color: "#45B7D1",
    category: "Development"
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile Development",
    description: "Create cross-platform mobile applications",
    features: [
      "React Native Development",
      "iOS & Android Apps",
      "App Store Deployment",
      "Push Notifications",
      "Mobile UI/UX"
    ],
    color: "#96CEB4",
    category: "Mobile"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Web Performance",
    description: "Optimize web applications for better performance",
    features: [
      "Load Time Optimization",
      "Code Splitting",
      "Caching Strategies",
      "Image Optimization",
      "Performance Monitoring"
    ],
    color: "#D4A5A5",
    category: "Development"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Consulting",
    description: "Technical consulting and architecture planning",
    features: [
      "Architecture Review",
      "Tech Stack Selection",
      "Best Practices",
      "Code Review",
      "Team Training"
    ],
    color: "#FCE38A",
    category: "Consulting"
  }
];

// Monthly and yearly pricing plans
const pricingData = {
  monthly: [
    {
      name: "Basic",
      price: "499",
      description: "Perfect for small projects",
      features: [
        "Single page website",
        "Basic SEO optimization",
        "Mobile responsive design",
        "3 rounds of revisions",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "999",
      description: "Ideal for growing businesses",
      features: [
        "Multi-page website",
        "Advanced SEO optimization",
        "Custom animations",
        "Priority support",
        "3 months support",
        "Performance optimization",
        "Analytics integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale applications",
      features: [
        "Full-stack development",
        "Custom features & integrations",
        "Dedicated support team",
        "CI/CD setup",
        "6 months support",
        "Performance monitoring",
        "Security audit",
        "Team training"
      ],
      popular: false
    }
  ],
  yearly: [
    {
      name: "Basic",
      price: "4,990",
      description: "Perfect for small projects",
      features: [
        "Single page website",
        "Basic SEO optimization",
        "Mobile responsive design",
        "5 rounds of revisions",
        "12 months support",
        "Quarterly updates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "9,990",
      description: "Ideal for growing businesses",
      features: [
        "Multi-page website",
        "Advanced SEO optimization",
        "Custom animations",
        "Priority support",
        "12 months support",
        "Performance optimization",
        "Analytics integration",
        "Monthly maintenance"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale applications",
      features: [
        "Full-stack development",
        "Custom features & integrations",
        "Dedicated support team",
        "CI/CD setup",
        "12 months premium support",
        "Performance monitoring",
        "Security audit",
        "Team training",
        "24/7 emergency assistance"
      ],
      popular: false
    }
  ]
};

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechStart",
    content: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    rating: 5,
    image: "https://via.placeholder.com/100x100.png?text=JS"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, GrowthCo",
    content: "The attention to detail and technical expertise was impressive. Our website performance improved significantly.",
    rating: 5,
    image: "https://via.placeholder.com/100x100.png?text=SJ"
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "Outstanding service and communication throughout the project. The end result was exactly what we needed.",
    rating: 5,
    image: "https://via.placeholder.com/100x100.png?text=MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, UpScale",
    content: "The mobile app development service was top-notch. Our users love the intuitive interface and smooth performance.",
    rating: 5,
    image: "https://via.placeholder.com/100x100.png?text=ER"
  },
  {
    name: "David Park",
    role: "CTO, FutureWorks",
    content: "The consulting services provided valuable insights that helped us make critical technology decisions for our startup.",
    rating: 5,
    image: "https://via.placeholder.com/100x100.png?text=DP"
  }
];

// FAQ data
const faqs = [
  {
    question: "What is your development process?",
    answer: "My development process follows an agile methodology with iterative development cycles. I start with thorough requirements gathering, followed by design, development, testing, and deployment phases. Regular client feedback is integrated throughout the process."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, I offer various maintenance packages to keep your website or application running smoothly. These include regular updates, security patches, performance optimization, and content updates."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various database systems like MongoDB and PostgreSQL. For mobile development, I use React Native for cross-platform solutions."
  },
  {
    question: "How do we get started with a project?",
    answer: "Getting started is easy. Simply contact me through the contact form or email. We'll schedule an initial consultation to discuss your requirements, after which I'll provide a proposal including scope, timeline, and cost estimates."
  },
  {
    question: "Do you offer custom design services?",
    answer: "Yes, I offer custom UI/UX design services tailored to your brand and target audience. I focus on creating intuitive, accessible, and visually appealing interfaces that enhance user experience."
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="group h-full overflow-hidden bg-background/70 backdrop-blur-md border-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30">
        <CardHeader>
          <div 
            className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${service.color}20`, color: service.color }}
          >
            {service.icon}
          </div>
          <Badge 
            className="w-fit mb-3"
            variant="secondary"
            style={{ backgroundColor: `${service.color}15`, color: service.color }}
          >
            {service.category}
          </Badge>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300"
          >
            Learn More <ChevronRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PricingCard = ({ plan }) => (
  <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : ''} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
    {plan.popular && (
      <Badge 
        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1"
        variant="default"
      >
        Most Popular
      </Badge>
    )}
    <CardHeader>
      <CardTitle className="text-2xl">{plan.name}</CardTitle>
      <CardDescription>{plan.description}</CardDescription>
      <div className="mt-4">
        <span className="text-4xl font-bold">${plan.price}</span>
        {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6 gap-2 bg-primary/90 hover:bg-primary">
        Get Started <ArrowRight className="w-4 h-4" />
      </Button>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ testimonial }) => (
  <Card className="bg-background/70 backdrop-blur-md border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full">
    <CardContent className="pt-6">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-primary/20"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground">{testimonial.content}</p>
    </CardContent>
  </Card>
);

const Services = () => {
  // State for filtering services
  const [activeCategory, setActiveCategory] = useState("All");
  // State for pricing toggle
  const [pricingInterval, setPricingInterval] = useState("monthly");
  // State for testimonial carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialPerPage] = useState(3);

  // Filter services based on active category
  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Get current pricing plans based on interval
  const currentPricingPlans = pricingData[pricingInterval];

  // Animation variants
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
      y: 0
    }
  };

  // Get current testimonials for carousel
  const currentTestimonials = testimonials.slice(
    currentTestimonialIndex,
    currentTestimonialIndex + testimonialPerPage
  );

  // Handle testimonial navigation
  const nextTestimonials = () => {
    setCurrentTestimonialIndex(prev => 
      prev + testimonialPerPage >= testimonials.length 
        ? 0 
        : prev + testimonialPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex(prev => 
      prev - testimonialPerPage < 0 
        ? Math.max(0, testimonials.length - testimonialPerPage) 
        : prev - testimonialPerPage
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/5 to-transparent"></div>
        
        {/* Animated gradient orbs */}
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
      </div>
      
      <SEO 
        title="My Services"
        description="Professional web development services including frontend, backend, and mobile development."
        keywords={["web development", "frontend", "backend", "mobile", "consulting"]}
        type="website"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section - Enhanced with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge className="mb-4 px-4 py-1">Professional Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Services I Offer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            From concept to deployment, I provide end-to-end solutions for your digital needs.
            Let's build something amazing together.
          </p>
          <Button 
            className="gap-2 px-6 py-6 bg-primary/90 hover:bg-primary"
            onClick={() => window.open('/contact', '_self')}
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Service Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-primary" />
            <h3 className="text-lg font-medium">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid - With filtering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Process Section - Enhanced with better visuals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20 bg-background/50 backdrop-blur-md rounded-xl p-8 border border-primary/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            My Development Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg hover:text-primary transition-colors">
                  1. Discovery & Planning
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    We begin with a thorough discussion of your project requirements, goals, and vision.
                    This phase includes market research, competitor analysis, and creating a detailed project roadmap.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Deliverables:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Project requirement document</li>
                      <li>Scope definition</li>
                      <li>Project timeline</li>
                      <li>Budget estimation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg hover:text-primary transition-colors">
                  2. Design & Prototyping
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Creating wireframes and interactive prototypes to visualize the solution.
                    This ensures we're aligned on the design direction before moving to development.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Deliverables:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Wireframes</li>
                      <li>Interactive prototypes</li>
                      <li>Design system</li>
                      <li>User flow diagrams</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg hover:text-primary transition-colors">
                  3. Development & Testing
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Writing clean, maintainable code following best practices.
                    Regular testing and quality assurance to ensure everything works perfectly.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Deliverables:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Development milestones</li>
                      <li>Regular progress updates</li>
                      <li>Code repository</li>
                      <li>Testing documentation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg hover:text-primary transition-colors">
                  4. Deployment & Support
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Smooth deployment process and ongoing support to ensure your project runs efficiently.
                    Regular maintenance and updates as needed.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Deliverables:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Deployment checklist</li>
                      <li>User documentation</li>
                      <li>Training sessions</li>
                      <li>Support and maintenance plan</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* Pricing Section - With monthly/yearly toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing options to suit projects of any size. Choose the plan that best fits your needs.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-background/70 backdrop-blur-md p-1 rounded-full border border-primary/10 shadow-md">
              <div className="flex items-center">
                <button 
                  className={`px-6 py-2 rounded-full flex items-center ${pricingInterval === 'monthly' ? 'bg-primary text-white' : 'bg-transparent'}`}
                  onClick={() => setPricingInterval('monthly')}
                >
                  <span>Monthly</span>
                </button>
                <button 
                  className={`px-6 py-2 rounded-full flex items-center ${pricingInterval === 'yearly' ? 'bg-primary text-white' : 'bg-transparent'}`}
                  onClick={() => setPricingInterval('yearly')}
                >
                  <span>Yearly</span>
                  <Badge className="ml-2 bg-green-500 hover:bg-green-600">Save 15%</Badge>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section - New addition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20 bg-background/50 backdrop-blur-md rounded-xl p-8 border border-primary/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Testimonials Section - Enhanced with carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Don't just take my word for it. See what my clients have to say about working with me.
          </p>
          
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                onClick={prevTestimonials}
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                disabled={currentTestimonialIndex === 0}
              >
                <motion.div
                  whileHover={{ x: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 transform rotate-180" />
                </motion.div>
              </Button>
              <Button 
                variant="outline" 
                onClick={nextTestimonials}
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                disabled={currentTestimonialIndex + testimonialPerPage >= testimonials.length}
              >
                <motion.div
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialPerPage) }).map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${currentTestimonialIndex / testimonialPerPage === index ? 'bg-primary' : 'bg-primary/30'}`}
                  onClick={() => setCurrentTestimonialIndex(index * testimonialPerPage)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA Section - New addition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl p-10 text-center backdrop-blur-md border border-primary/20 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how I can help bring your vision to life. Reach out for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="gap-2 px-6 py-6 bg-primary/90 hover:bg-primary"
              onClick={() => window.open('/contact', '_self')}
            >
              <MessageSquare className="w-5 h-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 px-6 py-6 border-primary/20 hover:bg-primary/10"
              onClick={() => window.open('https://calendly.com/yourusername', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;