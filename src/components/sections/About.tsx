"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Code2, FlaskConical, Rocket, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { personalInfo } from "@/data";

const highlights = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    desc: "Building intelligent systems with PyTorch, LangChain, and RAG pipelines.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    desc: "Designing robust APIs and data pipelines using Django, Flask, and Node.js.",
  },
  {
    icon: FlaskConical,
    title: "Computational Biology",
    desc: "Applying ML to protein structure prediction and protein-ligand interaction.",
  },
  {
    icon: Rocket,
    title: "Hackathons & Building",
    desc: "Multiple national hackathon wins, shipping end-to-end products under pressure.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Curious engineer, builder, researcher"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: photo + bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/pfp.jpeg"
                      alt="Varsha Bhaskar"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-base">Varsha Bhaskar</p>
                <p className="text-sm text-violet-400">{personalInfo.title}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <GraduationCap size={13} className="text-muted-foreground/60" />
                  <span className="text-xs text-muted-foreground/60">
                    {personalInfo.education.institute} · {personalInfo.education.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                CS & Biosciences graduate from{" "}
                <span className="text-violet-400 font-medium">IIIT Delhi</span>, focused
                on AI/ML engineering and backend systems. I build LLM-powered applications,
                secure data pipelines, and conduct research in computational biology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive at the intersection of{" "}
                <span className="text-foreground font-medium">research depth</span> and{" "}
                <span className="text-foreground font-medium">product delivery</span> —
                from winning GenAI and fintech hackathons to contributing to academic
                research labs. Actively looking for roles in{" "}
                <span className="text-violet-400 font-medium">AI engineering</span> and
                software development.
              </p>
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 transition-colors">
                  <item.icon size={17} className="text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
