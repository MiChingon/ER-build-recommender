import { Helmet } from "react-helmet-async";

// Google Analytics 4. Only the external gtag.js loader is injected into
// <head> (declaratively, via react-helmet-async). The usual inline bootstrap
// snippet (dataLayer + gtag('js') + gtag('config')) runs here, in the bundle,
// so the Content-Security-Policy can forbid inline scripts entirely
// (no 'unsafe-inline' in script-src — see index.html / Caddyfile).
//
// Reads the measurement id directly from import.meta.env so the component is
// drop-in: no prop drilling needed. When the env var is unset (e.g. local dev
// without a .env file) nothing is initialised and gtag never loads.

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

/** Same effect as Google's inline snippet; runs once at module load. */
export function initGtag(id: string): void {
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the Arguments object itself (not an array copy) in the
  // dataLayer, so this must be a classic function using `arguments`.
  window.gtag = function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

if (measurementId && typeof window !== "undefined") {
  initGtag(measurementId);
}

const GoogleAnalytics = (): JSX.Element | null => {
  if (!measurementId) return null;
  const gaSource = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  return (
    <Helmet>
      <script async src={gaSource}></script>
    </Helmet>
  );
};

export default GoogleAnalytics;
