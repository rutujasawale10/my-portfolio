"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubLogoIcon as Github } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ProjectCategory = "All" | "Web Apps" | "AI/ML" | "Hackathons";

const CATEGORIES: ProjectCategory[] = ["All", "Web Apps", "AI/ML", "Hackathons"];

const PROJECTS = [
  {
    title: "AI-Based Fraud Detection",
    description: "Machine Learning models implemented to identify and prevent fraudulent activities in financial transactions.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Science"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Student Management System",
    description: "A comprehensive platform for managing student records, attendance, and performance with a robust backend.",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A highly responsive and modern personal portfolio showcasing projects and skills, featuring neon dark theme and smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All");

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px bg-border flex-1 hidden md:block" />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between bg-card rounded-2xl border border-border p-6 md:p-8 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                        <Link href={project.githubUrl} target="_blank" aria-label="GitHub Repository">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                        <Link href={project.liveUrl} target="_blank" aria-label="Live Demo">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}