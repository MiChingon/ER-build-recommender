import { useEffect, useRef, useState } from "react";

type Ember = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
  flicker: number;
};

const EMBER_COUNT = 60;
const MAX_DPR = 2;
const SPRITE_SIZE = 32;

function spawnEmber(width: number, height: number, initial: boolean): Ember {
  return {
    x: Math.random() * width,
    y: initial ? Math.random() * height : height + 8,
    size: 1 + Math.random() * 2,
    speed: 0.15 + Math.random() * 0.45,
    drift: 8 + Math.random() * 22,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.25 + Math.random() * 0.55,
    flicker: 0.5 + Math.random() * 1.5,
  };
}

/**
 * Pre-rendered glow sprite: drawing this bitmap per particle is far cheaper
 * than setting canvas shadowBlur per particle per frame.
 */
function buildSprite(): HTMLCanvasElement | null {
  const sprite = document.createElement("canvas");
  sprite.width = SPRITE_SIZE;
  sprite.height = SPRITE_SIZE;
  const ctx = sprite.getContext("2d");
  if (!ctx) return null;
  const half = SPRITE_SIZE / 2;
  const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
  gradient.addColorStop(0, "rgba(244, 214, 112, 1)");
  gradient.addColorStop(0.25, "rgba(212, 175, 55, 0.9)");
  gradient.addColorStop(0.6, "rgba(212, 175, 55, 0.25)");
  gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  return sprite;
}

/**
 * Reads prefers-reduced-motion fresh on every mount and subscribes to
 * changes. Deliberately NOT motion's useReducedMotion, which caches the
 * media query in a module-level singleton.
 */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Drifting golden embers rendered on a fixed full-viewport canvas, evoking a
 * Site of Grace. Renders nothing under prefers-reduced-motion; pauses while
 * the tab is hidden.
 */
const EmberCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const sprite = buildSprite();
    if (!sprite) return;

    let width = 0;
    let height = 0;
    let embers: Ember[] = [];
    let raf = 0;
    let running = true;
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (embers.length === 0) {
        embers = Array.from({ length: EMBER_COUNT }, () => spawnEmber(width, height, true));
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - last) / 16.67, 3); // normalize to ~60fps steps
      last = now;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y -= e.speed * dt;
        e.phase += 0.01 * e.flicker * dt;
        const x = e.x + Math.sin(e.phase) * e.drift;
        const tw = 0.65 + 0.35 * Math.sin(e.phase * 3);
        if (e.y < -10) embers[i] = spawnEmber(width, height, false);
        const r = e.size * 4;
        ctx.globalAlpha = e.alpha * tw;
        ctx.drawImage(sprite, x - r, e.y - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  if (reduced) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-testid="ember-canvas"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default EmberCanvas;
