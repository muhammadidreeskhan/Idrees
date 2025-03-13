import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Search,
  ExternalLink,
  Github,
  Filter,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Card, CardContent } from "../components/ui/card";
import SEO from '@/components/SEO';
import { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";

const categories: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative aspect-video mb-6 bg-secondary rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            {project.screenshots.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button 
                  className="gap-2"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });

    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="My Projects"
        description="Explore my portfolio of web development projects, including full-stack applications, frontend interfaces, and more."
        keywords={["portfolio", "web development", "projects", "react", "full stack"]}
        type="website"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Projects
          </h1>
            <p className="text-xl text-muted-foreground">
              Explore my latest work and side projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.value)}
                    className="gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    {category.label}
                  </Button>
                ))}
              </div>
              <div className="w-full md:w-auto relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full md:w-[300px]"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          {selectedCategory === "all" && searchQuery === "" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter(project => project.featured)
                  .map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                }
              </div>
            </motion.div>
          )}

          {/* All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {selectedCategory === "all" && searchQuery === "" ? (
              <h2 className="text-2xl font-bold mb-6">All Projects</h2>
            ) : (
              <h2 className="text-2xl font-bold mb-6">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter(project => selectedCategory === "all" && searchQuery === "" ? !project.featured : true)
                .map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
        </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;