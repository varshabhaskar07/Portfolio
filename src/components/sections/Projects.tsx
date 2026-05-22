"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Projects"
          title="Things I&apos;ve built"
          description="A selection of projects spanning AI, backend systems, and computational tools."
        />

        {/* Featured */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} className="text-violet-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
              Featured
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((project, idx) => (
              <ProjectCard key={project.title} project={project} delay={idx * 0.08} featured />
            ))}
          </div>
        </div>

        {/* Others */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">
              {/* Other Projects */}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((project, idx) => (
              <ProjectCard key={project.title} project={project} delay={idx * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay = 0,
  featured = false,
}: {
  project: (typeof projects)[0];
  delay?: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 flex flex-col gap-4 hover:bg-white/[0.06] hover:-translate-y-1 hover:glow-sm transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            {featured && (
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            )}
            <h3 className="text-sm font-semibold text-foreground group-hover:text-violet-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/50">
        {project.tech.map((t) => (
          <Badge key={t} className="text-[10px] px-2 py-0.5">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
