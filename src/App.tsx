import { Link as RouterLink, Outlet } from "react-router-dom";
import { Mail } from "lucide-react";
import GoogleAnalytics from "./components/GoogleAnalytics";
import BackgroundLayer from "@/components/er/BackgroundLayer";
import InfoTip from "@/components/er/InfoTip";

// Inline SVG used as the masthead emblem — a gold runic 8-point star inside
// a dark circle. Matches the favicon so the brand identity reads across tab
// and page.
const Emblem = ({ size = 36 }: { size?: number }) => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden
    width={size}
    height={size}
    className="shrink-0"
    style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.45))" }}
  >
    <circle cx="32" cy="32" r="28" fill="#1a1714" stroke="#d4af37" strokeWidth="3" />
    <path
      d="M32 12 L32 52 M12 32 L52 32 M19 19 L45 45 M45 19 L19 45"
      stroke="#d4af37"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayer />
      <GoogleAnalytics />
      <header className="sticky top-0 z-40 border-b border-gold-500/35 bg-[rgba(20,18,15,0.88)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <RouterLink to="/" className="flex items-center gap-3 text-inherit no-underline">
            <Emblem />
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display bg-gradient-to-b from-gold-300 to-gold-600 bg-clip-text text-lg leading-tight font-bold tracking-[0.1em] whitespace-nowrap text-transparent uppercase sm:text-2xl">
                  Tarnished Builds
                </span>
                <span className="rounded-full border border-gold-500/40 px-2 py-px text-xs leading-tight font-semibold tracking-wide text-gold-500/75">
                  v{__APP_VERSION__}
                </span>
              </div>
              <span className="hidden text-[0.7rem] tracking-[0.1em] text-gold-500/70 uppercase sm:block">
                Optimal stats · AP · status · spells
              </span>
            </div>
          </RouterLink>
          <InfoTip title="Available for ads — contact the owner" side="bottom">
            <a
              href="https://fabianalmaraz.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact the owner (opens in new tab)"
              className="flex shrink-0 items-center gap-2 rounded-full border border-gold-500/40 px-3 py-1.5 text-sm font-medium text-gold-300 transition-all hover:border-gold-500 hover:bg-gold-500/10 hover:shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            >
              <Mail className="size-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </InfoTip>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="px-4 py-4 text-center">
        <p className="text-sm tracking-wide text-white/55">
          Powered by the{" "}
          <a
            href="https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 no-underline hover:underline"
          >
            Fextralife Elden Ring Wiki
          </a>
        </p>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm tracking-wide text-white/55">
          <svg viewBox="0 0 64 64" aria-hidden className="size-[0.95em] shrink-0">
            {/* Stylized Claude mark — eight petals radiating from a center */}
            <g fill="#D97757">
              <path d="M32 4 C34 18 34 22 32 32 C30 22 30 18 32 4 Z" />
              <path d="M32 60 C30 46 30 42 32 32 C34 42 34 46 32 60 Z" />
              <path d="M4 32 C18 30 22 30 32 32 C22 34 18 34 4 32 Z" />
              <path d="M60 32 C46 34 42 34 32 32 C42 30 46 30 60 32 Z" />
              <path d="M12 12 C22 20 25 23 32 32 C23 25 20 22 12 12 Z" />
              <path d="M52 52 C42 44 39 41 32 32 C41 39 44 42 52 52 Z" />
              <path d="M52 12 C44 22 41 25 32 32 C39 23 42 20 52 12 Z" />
              <path d="M12 52 C20 42 23 39 32 32 C25 41 22 44 12 52 Z" />
            </g>
          </svg>
          Built with Claude AI
        </p>
      </footer>
    </div>
  );
}
