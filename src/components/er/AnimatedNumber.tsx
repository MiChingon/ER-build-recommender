import { useEffect } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";

/**
 * A number that springs toward its new value when the recommendation changes.
 * Renders the plain value under prefers-reduced-motion.
 */
const AnimatedNumber = ({ value, className }: { value: number; className?: string }) => {
  const reduced = useReducedMotion();
  const spring = useSpring(value, { stiffness: 120, damping: 22 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  if (reduced) return <span className={className}>{Math.round(value).toLocaleString()}</span>;
  return <motion.span className={className}>{display}</motion.span>;
};

export default AnimatedNumber;
