import { afterEach, describe, expect, it } from "vitest";
import { initGtag } from "./GoogleAnalytics";

describe("initGtag (bundled replacement for the inline GA snippet)", () => {
  afterEach(() => {
    delete window.dataLayer;
    delete window.gtag;
  });

  it("queues the js + config commands as Arguments objects", () => {
    initGtag("G-TEST123");
    const queue = window.dataLayer as IArguments[];
    expect(queue).toHaveLength(2);
    // gtag.js only processes Arguments objects, not arrays.
    expect(Object.prototype.toString.call(queue[0])).toBe("[object Arguments]");
    expect(queue[0][0]).toBe("js");
    expect(queue[0][1]).toBeInstanceOf(Date);
    expect(Array.from(queue[1])).toEqual(["config", "G-TEST123"]);
  });

  it("keeps an existing dataLayer", () => {
    window.dataLayer = ["earlier"];
    initGtag("G-TEST123");
    expect(window.dataLayer[0]).toBe("earlier");
    expect(window.dataLayer).toHaveLength(3);
  });
});
