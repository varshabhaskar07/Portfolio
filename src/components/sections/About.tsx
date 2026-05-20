"use client";

import { motion } from "framer-motion";
import { Brain, Code2, FlaskConical, Rocket, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { personalInfo } from "@/data";

const highlights = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    desc: "Building intelligent systems with PyTorch, LangChain, and RAG pipelines — from research prototypes to production.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    desc: "Designing robust APIs and data pipelines using Django, Flask, and Node.js with a focus on scalability.",
  },
  {
    icon: FlaskConical,
    title: "Computational Biology",
    desc: "Applying ML to protein structure prediction, oligomeric state classification, and protein-ligand interaction.",
  },
  {
    icon: Rocket,
    title: "Hackathons & Building",
    desc: "Multiple national hackathon wins, shipping end-to-end products under pressure with cross-functional teams.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Curious engineer, builder, researcher"
          description="A snapshot of who I am and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m{" "}
              <span className="text-foreground font-medium">Varsha Bhaskar</span>, a
              Computer Science and Biosciences graduate from{" "}
              <span className="text-violet-400 font-medium">IIIT Delhi</span>, with a
              strong focus on AI/ML engineering and backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans building LLM-powered applications, designing secure data
              pipelines for industry clients, and conducting research in computational
              biology — predicting oligomeric protein states and modelling molecular
              interactions using advanced ML architectures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive at the intersection of{" "}
              <span className="text-foreground font-medium">research depth</span> and{" "}
              <span className="text-foreground font-medium">product delivery</span>.
              From winning fintech and GenAI hackathons to contributing to academic
              research labs, I bring both intellectual rigour and a bias for shipping
              working products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m actively looking for roles in{" "}
              <span className="text-violet-400 font-medium">AI engineering</span>,
              software development, and research — where I can keep pushing what&apos;s
              possible at the frontier.
            </p>

            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl">
                <GraduationCap size={15} className="text-violet-400" />
                <span className="text-sm text-muted-foreground">
                  {personalInfo.education.institute}
                </span>
              </div>
              <div className="glass-card px-4 py-2 rounded-xl text-sm text-muted-foreground">
                {personalInfo.education.degree}
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
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
