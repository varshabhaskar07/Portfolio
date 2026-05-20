"use client";

import { motion } from "framer-motion";
import { Briefcase, FlaskConical, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data";

const typeIcon = {
  Industry: Briefcase,
  Research: FlaskConical,
};

const typeColor = {
  Industry: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Research: "text-sky-400 bg-sky-500/10 border-sky-500/20",
};

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I&apos;ve worked & researched"
          description="Industry roles and academic research that shaped my engineering perspective."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = typeIcon[exp.type as keyof typeof typeIcon] ?? Briefcase;
              const colorClass = typeColor[exp.type as keyof typeof typeColor] ?? "";

              return (
                <motion.div
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-background border-2 border-violet-500/50 hidden md:flex items-center justify-center -translate-x-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>

                  <div className="glass-card p-6 hover:bg-white/[0.06] transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <h3 className="text-base font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${colorClass}`}
                          >
                            <Icon size={11} />
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm text-violet-400 font-medium">{exp.company}</p>
                        {exp.topic && (
                          <p className="text-xs text-muted-foreground/70 mt-0.5 italic">
                            {exp.topic}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground/60 bg-white/[0.04] border border-border/60 rounded-lg px-3 py-1 whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            size={14}
                            className="text-violet-400/60 mt-0.5 shrink-0"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
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
