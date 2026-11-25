import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { classes } from "../../../data/classes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { focusedPortraitStyle } from "@/lib/portrait-frame";

// Portrait frame: 160px wide, 245px tall including the 8px top pad (pt-2) —
// the size the pre-DLC 200x296 portraits have always rendered at.
const PORTRAIT_W = 160;
const PORTRAIT_H = 245;
const PORTRAIT_PAD_TOP = 8;

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
                <div className="relative">
                  {current.portraitFocus ? (
                    // Same 160x245 frame (incl. the 8px top pad), but the image
                    // is positioned so its figure — not its transparent canvas
                    // — fills the frame. Only empty margin is clipped.
                    <div className="relative h-[245px] w-40 overflow-hidden rounded-md bg-white/5">
                      <img
                        src={current.image}
                        alt={`${current.name} portrait`}
                        loading="lazy"
                        className="absolute max-w-none drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]"
                        style={(() => {
                          const s = focusedPortraitStyle(current.portraitFocus, {
                            width: PORTRAIT_W,
                            height: PORTRAIT_H - PORTRAIT_PAD_TOP,
                          });
                          return { width: s.width, height: s.height, left: s.left, top: s.top + PORTRAIT_PAD_TOP };
                        })()}
                      />
                    </div>
                  ) : (
                    <img
                      src={current.image}
                      alt={`${current.name} portrait`}
                      loading="lazy"
                      width={PORTRAIT_W}
                      height={PORTRAIT_H}
                      // Fixed frame for every portrait: the pre-DLC files are
                      // 200x296, so 160px wide + pt-2 renders 245px tall. Squatter
                      // art (e.g. Heavy Knight, 270x348) would otherwise render
                      // shorter; object-contain + object-bottom keeps it
                      // uncropped and grounded.
                      className="h-[245px] w-40 rounded-md bg-white/5 object-contain object-bottom pt-2 drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]"
                    />
                  )}
                  {current.portraitHasName === false && (
                    // Mimics the name the older portraits carry in the artwork:
                    // light Cinzel caps near the bottom, over a soft dark fade
                    // so it stays legible on any armor colour. aria-hidden
                    // because the img alt already announces the name.
                    <div
                      aria-hidden="true"
                      data-testid="class-portrait-name"
                      className="pointer-events-none absolute inset-x-0 bottom-0 flex h-20 items-end justify-center rounded-b-md bg-gradient-to-t from-black/85 via-black/45 to-transparent pb-3"
                    >
                      <span className="font-display text-base leading-none tracking-wide text-[#ece4d0] uppercase [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
                        {current.name}
                      </span>
                    </div>
                  )}
                </div>
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
