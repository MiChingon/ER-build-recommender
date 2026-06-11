import EmberCanvas from "./EmberCanvas";

const ERDTREE_IMAGE = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree.jpg";

/**
 * Fixed, non-interactive atmospheric backdrop: erdtree imagery under a dark
 * scrim, a slow golden "grace" pulse, a vignette, and the ember canvas.
 */
const BackgroundLayer = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-top"
      style={{ backgroundImage: `url(${ERDTREE_IMAGE})` }}
    />
    {/* dark scrim — lighter at the very top so the hero breathes */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,14,12,0.78) 0%, rgba(15,14,12,0.9) 28%, rgba(15,14,12,0.96) 100%)",
      }}
    />
    {/* grace glow pulse behind the hero */}
    <div
      className="absolute left-1/2 top-[-12%] h-[55vh] w-[80vw] -translate-x-1/2 rounded-full motion-safe:animate-grace-pulse"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0.05) 45%, transparent 70%)",
      }}
    />
    {/* vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
      }}
    />
    <EmberCanvas />
  </div>
);

export default BackgroundLayer;
