import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, RocketIcon, BriefcaseIcon, LayoutIcon, GitBranchIcon, StarIcon, MessageSquareIcon } from 'lucide-react';

const features = [
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Technical Expertise",
    description: "Proficient in React, TypeScript, and Next.js. Building scalable web applications with modern tech stacks and best practices."
  },
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "Full-Stack Development",
    description: "Experienced in both frontend and backend development, from responsive UI design to RESTful API implementation."
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6" />,
    title: "Professional Experience",
    description: "3+ years of experience in software development, working with agile teams and delivering high-impact projects."
  },
  {
    icon: <LayoutIcon className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces with Tailwind CSS, Framer Motion, and modern design principles."
  },
  {
    icon: <GitBranchIcon className="w-6 h-6" />,
    title: "Open Source",
    description: "Active contributor to open-source projects, sharing knowledge and collaborating with the developer community."
  },
  {
    icon: <StarIcon className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Strong analytical skills in algorithms, data structures, and system design. Regular participant in coding challenges."
  },
  {
    icon: <MessageSquareIcon className="w-6 h-6" />,
    title: "Communication",
    description: "Excellent team collaboration skills, technical documentation writing, and client interaction experience."
  }
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const EssentialFeatures: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400/5 via-purple-500/5 to-amber-500/5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 space-y-4">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold"
            >
              Core <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">Competencies</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Key skills and expertise that drive innovation and deliver exceptional results
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-background/50 backdrop-blur-sm border border-sky-400/10 p-6 rounded-2xl hover:border-purple-500/20 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group"
              >
                <div className="bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EssentialFeatures;
