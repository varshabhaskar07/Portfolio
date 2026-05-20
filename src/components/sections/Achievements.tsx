"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/data";

const iconMap = {
  trophy: Trophy,
  star: Star,
  award: Award,
  zap: Zap,
};

const glowColors = [
  "shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/30",
  "shadow-violet-500/10 hover:shadow-violet-500/20 hover:border-violet-500/30",
  "shadow-sky-500/10 hover:shadow-sky-500/20 hover:border-sky-500/30",
  "shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-500/30",
  "shadow-rose-500/10 hover:shadow-rose-500/20 hover:border-rose-500/30",
];

const iconColors = [
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-sky-400 bg-sky-500/10 border-sky-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Achievements"
          title="Hackathons & Recognition"
          description="Highlights from competitions and events where ideas met execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Trophy;
            const iconColor = iconColors[idx % iconColors.length];
            const glowColor = glowColors[idx % glowColors.length];

            return (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card p-6 flex flex-col gap-4 shadow-lg ${glowColor} border border-border/60 hover:border-opacity-100 hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconColor}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 mb-1">
                    {item.title}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {item.event}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
