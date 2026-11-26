import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { parseCaddyHeaders, parseCsp } from "./caddy-headers";

// Guards the production security headers served by the root Caddyfile.
const caddyfile = readFileSync(resolve(__dirname, "../../Caddyfile"), "utf8");
const headers = parseCaddyHeaders(caddyfile);
const csp = parseCsp(headers["Content-Security-Policy"] ?? "");

describe("production security headers (Caddyfile)", () => {
  it("sends the hardening headers", () => {
    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    expect(headers["X-Frame-Options"]).toBe("DENY");
    expect(headers["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["Strict-Transport-Security"]).toMatch(/max-age=\d{7,}/);
    expect(headers["Permissions-Policy"]).toContain("camera=()");
    expect(headers["Cross-Origin-Opener-Policy"]).toBe("same-origin");
  });

  it("CSP forbids inline/eval scripts, framing, plugins and base hijacking", () => {
    expect(csp["script-src"]).toBeDefined();
    expect(csp["script-src"]).not.toContain("'unsafe-inline'");
    expect(csp["script-src"]).not.toContain("'unsafe-eval'");
    expect(csp["script-src"]).not.toContain("*");
    expect(csp["frame-ancestors"]).toEqual(["'none'"]);
    expect(csp["object-src"]).toEqual(["'none'"]);
    expect(csp["base-uri"]).toEqual(["'self'"]);
    expect(csp["default-src"]).toEqual(["'self'"]);
  });

  it("CSP carries a per-request nonce (for Cloudflare's injected bot-detection script)", () => {
    expect(csp["script-src"]).toContain("'nonce-{http.request.uuid}'");
  });

  it("the 404 error route gets the same security headers", () => {
    const errors = caddyfile.slice(caddyfile.indexOf("handle_errors"));
    expect(errors).toContain("import security_headers");
    expect(caddyfile.match(/import security_headers/g)).toHaveLength(2);
  });

  it("production CSP doesn't carry the dev-only websocket sources", () => {
    expect(csp["connect-src"]).not.toContain("ws:");
    expect(csp["connect-src"]).not.toContain("wss:");
  });

  it("parses Name \"value\" lines and ignores removals", () => {
    const parsed = parseCaddyHeaders('x {\n\theader {\n\t\tA-B "1"\n\t\t-Server\n\t}\n}');
    expect(parsed).toEqual({ "A-B": "1" });
  });
});
