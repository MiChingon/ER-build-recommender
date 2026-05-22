declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// gtag.js itself is injected into <head> by src/components/GoogleAnalytics.tsx
// via react-helmet-async — this module only exposes named event helpers so
// product code never reaches for window.gtag directly.

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function trackPdfDownload(startingClass: string): void {
  if (!measurementId) return;
  window.gtag?.("event", "pdf_download", { starting_class: startingClass });
}
