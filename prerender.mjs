/* Post-build pass: render the page to HTML so the browser paints without waiting
 * for the bundle, and inline the stylesheet so it costs no extra round trip. */
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);

let html = await readFile("dist/index.html", "utf8");

const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("dist/index.html has no empty #root to fill");
html = html.replace(marker, `<div id="root">${render()}</div>`);

const link = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (link) {
  const css = await readFile(resolve("dist", link[1].replace(/^\//, "")), "utf8");
  html = html.replace(link[0], `<style>${css}</style>`);
  await rm(resolve("dist", link[1].replace(/^\//, "")), { force: true });
}

await writeFile("dist/index.html", html);
await rm("dist-ssr", { recursive: true, force: true });
console.log(`prerendered dist/index.html (${Math.round(html.length / 1024)} KB, css ${link ? "inlined" : "not found"})`);
