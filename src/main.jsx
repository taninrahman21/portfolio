import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/geist";
import "@fontsource-variable/jetbrains-mono";
import "./styles.css";
import App from "./App.jsx";
import { THEME } from "./data.js";

/* Theme: "colorful" or "minimal". Set it in src/data.js, or try the other one
 * without editing anything by opening the site with ?theme=minimal */
const fromUrl = new URLSearchParams(window.location.search).get("theme");
document.documentElement.dataset.theme = fromUrl === "minimal" || fromUrl === "colorful" ? fromUrl : THEME;

const root = document.getElementById("root");
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);
/* `npm run build` prerenders the page, so attach to that markup when it is there */
if (root.firstChild) hydrateRoot(root, tree);
else createRoot(root).render(tree);
