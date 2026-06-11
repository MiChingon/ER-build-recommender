import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The workhorse surface of the cinematic theme: a glassmorphic panel with a
 * gold border and an inner gold gradient edge along the top.
 */
const GlassCard = ({
  children,
  className,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) => (
  <div
    className={cn(
      "glass-card relative p-4",
      "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-lg",
      "before:bg-gradient-to-r before:from-transparent before:via-gold-500/60 before:to-transparent",
      glow && "shadow-[0_0_24px_rgba(212,175,55,0.14)]",
      className,
    )}
  >
    {children}
  </div>
);

export default GlassCard;
