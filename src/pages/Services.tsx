import { motion } from "framer-motion";
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
  ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import SEO from '@/components/SEO';

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
    color: "#FF6B6B"
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
    color: "#4ECDC4"
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
    color: "#45B7D1"
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
    color: "#96CEB4"
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
    color: "#D4A5A5"
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
    color: "#FCE38A"
  }
];

const pricingPlans = [
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
];

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
  }
];

const ServiceCard = ({ service }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${service.color}20`, color: service.color }}
      >
        {service.icon}
      </div>
      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
      <CardDescription>{service.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const PricingCard = ({ plan }) => (
  <Card className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
    {plan.popular && (
      <Badge 
        className="absolute -top-3 left-1/2 -translate-x-1/2"
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
      <Button className="w-full mt-6 gap-2">
        Get Started <ArrowRight className="w-4 h-4" />
      </Button>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ testimonial }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
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
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="My Services"
        description="Professional web development services including frontend, backend, and mobile development."
        keywords={["web development", "frontend", "backend", "mobile", "consulting"]}
        type="website"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services I Offer
          </h1>
          <p className="text-xl text-muted-foreground">
            From concept to deployment, I provide end-to-end solutions for your digital needs.
            Let's build something amazing together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
            {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">How I Work</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Discovery & Planning</AccordionTrigger>
                <AccordionContent>
                  We begin with a thorough discussion of your project requirements, goals, and vision.
                  This phase includes market research, competitor analysis, and creating a detailed project roadmap.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2. Design & Prototyping</AccordionTrigger>
                <AccordionContent>
                  Creating wireframes and interactive prototypes to visualize the solution.
                  This ensures we're aligned on the design direction before moving to development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. Development & Testing</AccordionTrigger>
                <AccordionContent>
                  Writing clean, maintainable code following best practices.
                  Regular testing and quality assurance to ensure everything works perfectly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>4. Deployment & Support</AccordionTrigger>
                <AccordionContent>
                  Smooth deployment process and ongoing support to ensure your project runs efficiently.
                  Regular maintenance and updates as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* Pricing Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
                </div>
              </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;