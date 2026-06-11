import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { classes } from "../../../data/classes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 64, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir * -64, opacity: 0, scale: 0.96 }),
};

const ClassCarousel = ({
  classId,
  onChange,
}: {
  classId: string;
  onChange: (id: string) => void;
}) => {
  const currentIndex = Math.max(
    0,
    classes.findIndex((c) => c.id === classId),
  );
  const current = classes[currentIndex];
  const dirRef = useRef(1);

  const go = (delta: number) => {
    dirRef.current = delta > 0 ? 1 : -1;
    const next = (currentIndex + delta + classes.length) % classes.length;
    onChange(classes[next].id);
  };

  return (
    <div>
      <h3 className="panel-heading mb-2">
        Starting Class
      </h3>
      <div className="glass-card relative overflow-hidden p-4">
        {/* halo behind the portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 45%, rgba(212,175,55,0.12), transparent 70%)",
          }}
        />
        <div className="relative flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous class"
            onClick={() => go(-1)}
            className="shrink-0 text-gold-300 hover:bg-gold-500/10 hover:text-gold-300"
          >
            <ChevronLeft className="size-6" />
          </Button>
          <div className="min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={dirRef.current} initial={false}>
              <motion.div
                key={current.id}
                custom={dirRef.current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <img
                  src={current.image}
                  alt={`${current.name} portrait`}
                  loading="lazy"
                  width={160}
                  height={260}
                  className="rounded-md bg-white/5 object-contain object-bottom pt-2 drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]"
                />
                <Badge variant="outline" className="border-gold-500/50 text-gold-300">
                  Lv {current.level}
                </Badge>
              </motion.div>
            </AnimatePresence>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next class"
            onClick={() => go(1)}
            className="shrink-0 text-gold-300 hover:bg-gold-500/10 hover:text-gold-300"
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>
      <p className="mx-2 mt-1 text-xs text-muted-foreground">
        Build is computed against this class's starting stats.
      </p>
    </div>
  );
};

export default ClassCarousel;
