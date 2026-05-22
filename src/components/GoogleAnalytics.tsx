import { Helmet } from "react-helmet-async";

// Google Analytics 4 tag, injected into <head> declaratively via react-helmet-async
// rather than by an imperative document.createElement("script") at boot. Some
// hosting environments / extensions handle injected-from-React script tags more
// reliably than dynamically-appended ones, and putting the snippet here mirrors
// the canonical gtag.js install instructions Google publishes.
//
// Reads the measurement id directly from import.meta.env so the component is
// drop-in: no prop drilling needed. When the env var is unset (e.g. local dev
// without a .env file) the component renders nothing and gtag never loads.

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const GoogleAnalytics = (): JSX.Element | null => {
  if (!measurementId) return null;
  const gaSource = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  return (
    <Helmet>
      <script async src={gaSource}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
