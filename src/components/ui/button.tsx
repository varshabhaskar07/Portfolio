"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/20",
          variant === "outline" &&
            "border border-border bg-transparent text-foreground hover:bg-white/5 hover:border-violet-500/50",
          variant === "ghost" && "hover:bg-white/5 text-muted-foreground hover:text-foreground",
          variant === "link" && "text-violet-400 hover:text-violet-300 underline-offset-4 hover:underline p-0 h-auto",
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-10 px-5 text-sm",
          size === "lg" && "h-12 px-7 text-base",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
