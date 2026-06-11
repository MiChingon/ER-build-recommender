import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Cinzel display heading flanked by fading gold rules and diamond ornaments.
 */
const SectionHeading = ({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className="gold-rule flex-1" />
    <span className="size-1.5 rotate-45 bg-gold-500/70" />
    <Tag className="font-display bg-gradient-to-b from-gold-300 to-gold-600 bg-clip-text text-center text-lg font-semibold tracking-[0.18em] text-transparent uppercase">
      {children}
    </Tag>
    <span className="size-1.5 rotate-45 bg-gold-500/70" />
    <div className="gold-rule flex-1" />
  </div>
);

export default SectionHeading;
