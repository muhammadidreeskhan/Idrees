export type Technology = {
  name: string;
  color: string;
};

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
