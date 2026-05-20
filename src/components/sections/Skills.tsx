"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data";

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  "AI / ML": "⚡",
  Development: "⬡",
  Tools: "◈",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated set of tools and languages I use to build, train, and deploy systems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-card p-6 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-lg font-mono text-violet-400 leading-none">
                  {categoryIcons[category.label] ?? "○"}
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.08 + skillIdx * 0.04,
                    }}
                    className="px-2.5 py-1 text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-muted-foreground rounded-lg hover:bg-violet-500/10 hover:border-violet-500/20 hover:text-violet-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
