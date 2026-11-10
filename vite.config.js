import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "compression";
import { existsSync } from "node:fs";
import { join } from "node:path";

/* Every static host serves these gzipped; without this `npm run preview` would
 * ship them raw and make a local Lighthouse run look far worse than production.
 * Note: the hook must not return anything — Vite calls a returned value as a
 * post-hook. */
const gzipPreview = {
  name: "gzip-preview",
  configurePreviewServer(server) {
    server.middlewares.use(compression());
    /* Static hosts answer a missing /.well-known file with a 404; the preview
     * server would hand back index.html instead, which agent checks read as a
     * broken manifest. */
    server.middlewares.use((req, res, next) => {
      if (!req.url.startsWith("/.well-known/") || existsSync(join("dist", req.url.split("?")[0]))) return next();
      res.statusCode = 404;
      res.end("Not found");
    });
  },
};

export default defineConfig({ plugins: [react(), gzipPreview] });
