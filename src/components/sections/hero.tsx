"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";

const TECH_PILLS = ["Next.js", "TypeScript", "Tailwind CSS", "Python", "React"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Full-Stack Developer <br className="hidden md:block" />
            <span className="text-primary">& AI Enthusiast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I build exceptional and accessible digital experiences for the web.
            Passionate about bridging the gap between elegant UI and robust data-driven backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="w-full sm:w-auto gap-2">
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto gap-2 bg-background/50 backdrop-blur-sm">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Floating tech pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_PILLS.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-card/80 border border-border shadow-sm backdrop-blur-md text-sm font-medium"
              >
                <Terminal className="h-3 w-3 text-primary" /> {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}