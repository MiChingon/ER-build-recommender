/**
 * Read the unconditional response headers from the root Caddyfile's main
 * `header { ... }` block, e.g. `Content-Security-Policy "default-src ..."`.
 *
 * Used by vite.config.ts so `npm run preview` serves the same security
 * headers as production, and by tests that guard the CSP. Only the simple
 * `Name "value"` form is parsed; removals (`-Server`) and comments are
 * ignored. Matcher-scoped `header @x ...` lines are not part of the block.
 */
export function parseCaddyHeaders(caddyfile: string): Record<string, string> {
  const start = caddyfile.search(/^\s*header\s*\{\s*$/m);
  if (start === -1) return {};
  const body = caddyfile.slice(start);
  const end = body.indexOf("\n\t}");
  const block = end === -1 ? body : body.slice(0, end);
  const out: Record<string, string> = {};
  for (const line of block.split(/\r?\n/).slice(1)) {
    const m = line.match(/^\s*([A-Za-z][A-Za-z0-9-]*)\s+"(.*)"\s*$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

/** Split a CSP string into { directive: sources[] }. */
export function parseCsp(csp: string): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const part of csp.split(";")) {
    const [name, ...values] = part.trim().split(/\s+/);
    if (name) out[name] = values;
  }
  return out;
}
