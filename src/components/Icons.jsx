const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, viewBox: "0 0 24 24", className: "arrow" };
export const ArrowUpRight = () => <svg {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>;
export const ArrowRight = () => <svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ArrowLeft = () => <svg {...base}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
export const ArrowUp = () => <svg {...base}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
export const Menu = () => <svg {...base} style={{ width: 18, height: 18 }}><path d="M4 9h16M4 15h16" /></svg>;
export const Check = () => <svg {...base} strokeWidth={3}><path d="m5 12 5 5L20 7" /></svg>;
export const Download = () => <svg {...base}><path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5M5 20h14" /></svg>;

/* brand marks: solid glyphs, not strokes */
const mark = { fill: "currentColor", "aria-hidden": true, viewBox: "0 0 24 24", className: "brand" };
export const Github = () => (
  <svg {...mark}><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" /></svg>
);
export const Linkedin = () => (
  <svg {...mark}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
);
