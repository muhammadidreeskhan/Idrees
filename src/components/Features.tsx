import { motion } from 'framer-motion';
import { 
  Code2, Layout, Database, Smartphone, Globe, 
  Cpu, Cloud, Shield, Gauge
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using React, Next.js, and TypeScript",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Developing robust server-side solutions with Node.js and MongoDB",
      skills: ["Node.js", "MongoDB", "REST APIs", "Express.js"]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles",
      skills: ["Figma", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Development",
      description: "Ensuring perfect responsiveness across all devices and screen sizes",
      skills: ["Responsive Design", "Mobile Optimization", "Progressive Web Apps"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Deploying and managing applications on cloud platforms",
      skills: ["AWS", "Vercel", "Docker", "CI/CD"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Performance",
      description: "Implementing best practices for secure and fast applications",
      skills: ["Web Security", "Performance Optimization", "SEO", "Analytics"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with 3D depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-sky-400/5 via-purple-500/5 to-amber-500/5"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] mask-image:radial-gradient(ellipse 80% 50% at 50% 50%,#000,transparent)"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">Services</span> & <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions with cutting-edge technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-sky-400/10 hover:border-purple-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] relative overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-sky-400/20 via-purple-500/20 to-amber-500/20 animate-gradient-xy"></div>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/50 via-purple-500/50 to-amber-500/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-amber-500/10 rounded-lg text-purple-500 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-amber-500/10 text-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;