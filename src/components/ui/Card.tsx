import { HTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "glass" | "subtle" | "bordered";
  hoverEffect?: "none" | "lift" | "glow" | "zoom";
  isAnimated?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hoverEffect = "none",
  isAnimated = false,
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-all duration-350 overflow-hidden";

  const variantStyles = {
    default: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",
    glass: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-800/40 shadow-md",
    subtle: "bg-slate-50 dark:bg-slate-900/50 border border-transparent shadow-none",
    bordered: "bg-transparent border border-slate-200 dark:border-slate-800 shadow-none",
  }[variant];

  const hoverStyles = {
    none: "",
    lift: "hover:-translate-y-1.5 hover:shadow-md dark:hover:border-slate-700",
    glow: "hover:shadow-glow hover:border-blue-500/25 hover:scale-[1.01]",
    zoom: "hover:scale-[1.02] hover:shadow-md",
  }[hoverEffect];

  const combinedClasses = cn(baseStyles, variantStyles, hoverStyles, className);

  if (isAnimated) {
    return (
      <motion.div
        className={combinedClasses}
        whileHover={hoverEffect === "lift" ? { y: -6 } : hoverEffect === "zoom" ? { scale: 1.02 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...(props as HTMLMotionProps<"div">)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
