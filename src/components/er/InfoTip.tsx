import { ReactNode, useEffect, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TOUCH_HOLD_MS = 5000;

/**
 * Tooltip that also works on touch devices: Radix tooltips are hover/focus
 * only, so a touch tap opens the tip immediately and holds it for 5 s
 * (matching the old MUI enterTouchDelay/leaveTouchDelay behavior).
 */
const InfoTip = ({
  title,
  children,
  side,
}: {
  title: ReactNode;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}) => {
  const [open, setOpen] = useState(false);
  const touchOpenedAt = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (title === "" || title === null || title === undefined) return <>{children}</>;

  const handleOpenChange = (next: boolean) => {
    // Ignore the close Radix fires right after a touch tap so the tip stays
    // readable for the full hold window.
    if (!next && Date.now() - touchOpenedAt.current < TOUCH_HOLD_MS) return;
    setOpen(next);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "touch") return;
    touchOpenedAt.current = Date.now();
    setOpen(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      touchOpenedAt.current = 0;
      setOpen(false);
    }, TOUCH_HOLD_MS);
  };

  return (
    // Self-contained provider: Radix throws if a Tooltip renders outside a
    // TooltipProvider, and per-instance providers are cheap.
    <TooltipProvider delayDuration={150}>
      <Tooltip open={open} onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild onPointerDown={handlePointerDown}>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side}>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTip;
