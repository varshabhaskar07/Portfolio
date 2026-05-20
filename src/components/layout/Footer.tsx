"use client";

import { personalInfo } from "@/data";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  LeetcodeIcon,
} from "@/components/ui/social-icons";

const socials = [
  { icon: GithubIcon, href: personalInfo.links.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.links.linkedin, label: "LinkedIn" },
  { icon: TwitterXIcon, href: personalInfo.links.twitter, label: "Twitter" },
  { icon: LeetcodeIcon, href: personalInfo.links.leetcode, label: "LeetCode" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">Varsha Bhaskar</span>
            {" — "}Built with Next.js & Tailwind CSS
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Varsha Bhaskar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
