/* Build-time only: renders the page to HTML so the browser paints before the
 * bundle has even parsed. Driven by prerender.mjs. */
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render() {
  return renderToString(<App />);
}
