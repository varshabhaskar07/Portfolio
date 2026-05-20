"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="text-gradient">Varsha Bhaskar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
            {personalInfo.title}
          </p>
          <p className="text-base text-muted-foreground/70 mt-1">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          {personalInfo.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground/60 mb-10"
        >
          <MapPin size={13} />
          <span>{personalInfo.location}</span>
          <span className="mx-1.5">·</span>
          <span>{personalInfo.education.institute}</span>
          <span className="mx-1.5">·</span>
          <span>{personalInfo.education.period}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={personalInfo.links.resume}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            <FileText size={16} />
            View Resume
          </a>
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border hover:border-violet-500/50 bg-white/[0.03] hover:bg-white/[0.06] text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border hover:border-violet-500/50 bg-white/[0.03] hover:bg-white/[0.06] text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border hover:border-violet-500/50 bg-white/[0.03] hover:bg-white/[0.06] text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={14} className="animate-bounce group-hover:text-violet-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
