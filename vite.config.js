import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "compression";

/* Every static host serves these gzipped; without this `npm run preview` would
 * ship them raw and make a local Lighthouse run look far worse than production.
 * Note: the hook must not return anything — Vite calls a returned value as a
 * post-hook. */
const gzipPreview = {
  name: "gzip-preview",
  configurePreviewServer(server) {
    server.middlewares.use(compression());
  },
};

export default defineConfig({ plugins: [react(), gzipPreview] });
