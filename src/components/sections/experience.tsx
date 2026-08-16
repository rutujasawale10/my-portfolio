"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const EXPERIENCES = [
  {
    type: "work",
    title: "AI-ML Virtual Intern",
    organization: "EduSkills",
    date: "2023",
    description: "Participated in an AI-ML Virtual Internship, gaining hands-on experience with machine learning algorithms and practical application development.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "B.E. Computer Science and Engineering",
    organization: "Prof Ram Meghe College of Engineering & Management, Badnera",
    date: "Expected 2028",
    description: "Focusing on Software Development, AI, and Full-Stack Technologies. Maintaining an active role in technical projects and events.",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "AWS Cloud Practitioner & Google Cloud Foundations",
    organization: "AWS / Google",
    date: "Recent",
    description: "Earned certifications demonstrating foundational understanding of cloud platforms and cloud-native application deployment.",
    icon: Award,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience & Achievements</h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-8 top-1 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-primary/80 mb-4">{exp.organization}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}