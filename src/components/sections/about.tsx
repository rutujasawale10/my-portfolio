"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Trophy } from "lucide-react";

const STATS = [
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: Trophy, label: "Hackathons", value: "3" },
  { icon: BookOpen, label: "Degrees", value: "2" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m Rutuja Vitthalrao Sawale, a highly motivated engineering student pursuing a B.E. in Computer Science and Engineering at Prof Ram Meghe College of Engineering & Management, Badnera (Expected 2028).
            </p>
            <p>
              My journey involves working on diverse software engineering, full-stack development, and machine learning projects. I thrive on translating abstract ideas into reliable, user-centric applications. As an AI-ML Virtual Intern at EduSkills, I enjoyed combining intelligent algorithms with real-world datasets.
            </p>
            <p>
              When I&apos;m not developing web applications or experimenting with the latest AI trends, I enjoy collaborating on team projects, solving complex problems, and continuously expanding my technical toolkit with certifications like AWS Cloud Practitioner and Google Cloud Foundations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground text-center font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}