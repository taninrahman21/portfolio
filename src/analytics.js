/* Free analytics: Umami (visitors, referrers, click counts) + Microsoft Clarity
 * (heatmaps, session recordings). Paste your IDs below, or set them as Netlify
 * environment variables VITE_UMAMI_ID / VITE_CLARITY_ID. Leave one empty to
 * turn that tool off. Nothing loads in `npm run dev` or on localhost, so your
 * own testing never shows up in the numbers. */
const UMAMI_ID = import.meta.env.VITE_UMAMI_ID || "7b3c4393-e816-4bba-873d-96ce56b381c7";
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || "zbdx980rdy";

/* Spread onto a link to count its clicks in Umami → Events.
 *   <a {...track("resume-download", { where: "hero" })}>
 * The event name groups the clicks; props show the breakdown (which plugin,
 * which network, which part of the page). */
export function track(event, props = {}) {
  const attrs = { "data-umami-event": event };
  for (const [k, v] of Object.entries(props)) attrs[`data-umami-event-${k}`] = v;
  return attrs;
}

export function loadAnalytics() {
  if (!import.meta.env.PROD) return;
  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return;

  if (UMAMI_ID) {
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://cloud.umami.is/script.js";
    s.dataset.websiteId = UMAMI_ID;
    document.head.appendChild(s);
  }

  if (CLARITY_ID) {
    /* Microsoft's loader: queues calls until the real script arrives */
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(s);
  }
}
