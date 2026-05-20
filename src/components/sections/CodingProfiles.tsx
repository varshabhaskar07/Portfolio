"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  LeetcodeIcon,
} from "@/components/ui/social-icons";
import { codingProfiles } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterXIcon,
  code: LeetcodeIcon,
};

const profileColors = [
  { bg: "bg-white/[0.04]", icon: "text-foreground", border: "hover:border-white/20", label: "bg-white/10 text-foreground" },
  { bg: "bg-amber-500/[0.04]", icon: "text-amber-400", border: "hover:border-amber-500/30", label: "bg-amber-500/10 text-amber-400" },
  { bg: "bg-sky-500/[0.04]", icon: "text-sky-400", border: "hover:border-sky-500/30", label: "bg-sky-500/10 text-sky-400" },
  { bg: "bg-slate-500/[0.04]", icon: "text-slate-400", border: "hover:border-slate-500/30", label: "bg-slate-500/10 text-slate-400" },
];

export function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Profiles"
          title="Find me online"
          description="Platforms where I learn, contribute, and connect."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {codingProfiles.map((profile, idx) => {
            const Icon = iconMap[profile.icon] ?? Code2;
            const colors = profileColors[idx % profileColors.length];

            return (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card p-6 flex flex-col gap-4 border border-border/60 ${colors.border} hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} border border-white/[0.08] flex items-center justify-center`}>
                    <Icon size={18} className={colors.icon} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {profile.platform}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {profile.description}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colors.label}`}>
                    @{profile.username.replace("@", "")}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
