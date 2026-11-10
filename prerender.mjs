/* Post-build pass: render the page to HTML so the browser paints without waiting
 * for the bundle, and inline the stylesheet so it costs no extra round trip. */
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
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

/* ARD manifest: tells AI agents where the machine-readable parts of the site
 * are. Its URLs must be absolute, so it is only written once `person.site` is set. */
const { person } = await import(pathToFileURL(resolve("src/data.js")).href);
if (person.site) {
  const site = person.site.replace(/\/$/, "");
  const ard = {
    entries: [
      {
        identifier: "urn:air:builtbytanin:portfolio:profile",
        displayName: `${person.name} — portfolio summary`,
        description: `Plain-text summary of ${person.name}, ${person.role.toLowerCase()} in ${person.city}: work at bPlugins, featured products, skills and contact details, written for AI agents.`,
        type: "application/x-llms-txt",
        url: `${site}/llms.txt`,
        representativeQueries: ["WordPress plugin developer in Dhaka", "Gutenberg and MCP product engineer", `${person.name} contact details`],
      },
      {
        identifier: "urn:air:builtbytanin:portfolio:resume",
        displayName: `${person.name} — resume`,
        description: `${person.name}'s resume as a PDF.`,
        type: "application/pdf",
        url: site + person.resume,
        representativeQueries: [`${person.name} resume`, `${person.name} CV`],
      },
    ],
  };
  await mkdir("dist/.well-known", { recursive: true });
  await writeFile("dist/.well-known/ard.json", JSON.stringify(ard, null, 2) + "\n");
  console.log("wrote dist/.well-known/ard.json");
} else {
  console.log("skipped /.well-known/ard.json — set person.site in src/data.js");
}
await rm("dist-ssr", { recursive: true, force: true });
console.log(`prerendered dist/index.html (${Math.round(html.length / 1024)} KB, css ${link ? "inlined" : "not found"})`);
