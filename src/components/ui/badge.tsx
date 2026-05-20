import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-violet-500/15 text-violet-300 border border-violet-500/20",
        variant === "outline" && "border border-border text-muted-foreground",
        variant === "ghost" && "bg-muted text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
