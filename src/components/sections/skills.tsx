"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI & Data Science",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "Jupyter", "SQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Figma", "Linux"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Tech</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground/90">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-secondary hover:border-border transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}