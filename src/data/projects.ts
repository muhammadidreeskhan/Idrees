import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Framer Motion",
    longDescription: "A modern and interactive portfolio website showcasing my projects and skills. Built with React and enhanced with smooth animations using Framer Motion. Features include dark mode, responsive design, and optimized performance.",
    image: "https://via.placeholder.com/800x600?text=Portfolio+Preview",
    screenshots: [
      "https://via.placeholder.com/1920x1080?text=Portfolio+Homepage",
      "https://via.placeholder.com/1920x1080?text=Portfolio+Projects",
      "https://via.placeholder.com/1920x1080?text=Portfolio+About"
    ],
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://your-portfolio-url.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps",
    longDescription: "A comprehensive weather dashboard that provides real-time weather data, interactive maps, and detailed forecasts. Features include location-based weather, animated weather maps, and severe weather alerts.",
    image: "https://via.placeholder.com/800x600?text=Weather+App+Preview",
    screenshots: [
      "https://via.placeholder.com/1920x1080?text=Weather+Dashboard",
      "https://via.placeholder.com/1920x1080?text=Weather+Map"
    ],
    technologies: ["React", "OpenWeather API", "Mapbox", "TailwindCSS"],
    category: "frontend",
    liveUrl: "https://weather-app-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Full-stack blog platform with markdown support",
    longDescription: "A modern blogging platform built with Next.js and MongoDB. Features include markdown editing, image uploads, user authentication, and a responsive design. The platform supports both light and dark modes.",
    image: "https://via.placeholder.com/800x600?text=Blog+Platform+Preview",
    screenshots: [
      "https://via.placeholder.com/1920x1080?text=Blog+Home",
      "https://via.placeholder.com/1920x1080?text=Blog+Editor",
      "https://via.placeholder.com/1920x1080?text=Blog+Post"
    ],
    technologies: ["Next.js", "MongoDB", "TypeScript", "TailwindCSS"],
    category: "fullstack",
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/blog-platform",
    featured: true
  }
]; 