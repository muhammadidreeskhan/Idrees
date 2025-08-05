import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    level: 95,
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    level: 90,
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Express.js",
    level: 85,
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },

  // Tools & Others
  {
    name: "Git",
    level: 90,
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "Docker",
    level: 75,
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "AWS",
    level: 70,
    category: "Tools",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
  },
  {
    name: "Figma",
    level: 85,
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }
];

const categories = ["Frontend", "Backend", "Tools"];

const TechnicalSkills: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-purple-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficiency in modern web technologies and development tools
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-8">
                {category} <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">Technologies</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-sky-400/10 hover:border-purple-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    >
                      {/* Enhanced Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 via-purple-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/30 via-purple-500/30 to-amber-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                          <div className="relative h-2 bg-gradient-to-r from-sky-400/20 via-purple-500/20 to-amber-500/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 rounded-full"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Proficiency: {skill.level}%
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
