import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";
import { parseCaddyHeaders } from "./src/lib/caddy-headers";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  // `npm run preview` serves dist/ with the same security headers as
  // production (read from the Caddyfile), so CSP problems show up locally.
  // Caddy's per-request {http.request.uuid} nonce becomes a fixed random one.
  preview: {
    headers: Object.fromEntries(
      Object.entries(
        parseCaddyHeaders(readFileSync(new URL("./Caddyfile", import.meta.url), "utf8")),
      ).map(([k, v]) => [k, v.replaceAll("{http.request.uuid}", randomUUID())]),
    ),
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
