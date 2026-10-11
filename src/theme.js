import { THEME } from "./data.js";

/* Per-item colours that CSS variables can't express (they cycle by index). */
const LIME = "#c5ee5c";
const palettes = {
  colorful: {
    releaseBg: ["#eef8d0", "#e7e3ff", "#d6efe9", "#ffe8d1"],
    releasePanel: ["#dcefa6", "#d3ccff", "#bde2d8", "#ffd4a8"],
    releaseInk: ["#4d6b0f", "#3d2fa8", "#045458", "#b35300"],
    releaseAccent: "#111316",
    capDots: ["#d3ccff", "#bde2d8", LIME, "#ffd4a8", "#ffc9d9", "#d3ccff"],
    spotDots: [LIME, "#d3ccff", "#ffd4a8", "#ffc9d9"],
    jobDots: ["#d3ccff", "#bde2d8", LIME, "#ffd4a8", "#ffc9d9", "#d3ccff", "#bde2d8", "#ffd4a8"],
    skillBg: ["#eef8d0", "#e7e3ff", "#d6efe9", "#ffe8d1"],
    recBg: ["#ffe8d1", "#e7e3ff", "#d6efe9", "#eef8d0"],
    courseBg: ["#e7e3ff", "#eef8d0", "#d6efe9", "#ffe8d1"],
    courseArt: [["#3d2fa8", "#c5ee5c"], ["#4d6b0f", "#3d2fa8"], ["#045458", "#c5ee5c"], ["#b35300", "#3d2fa8"]],
  },
  minimal: {
    releaseBg: ["#ffffff", "#fbfaf6", "#f5f4ee", "#ffffff"],
    releasePanel: ["#efede6"],
    releaseInk: ["#cfccc3"],
    releaseAccent: LIME,
    capDots: ["#efede6", "#efede6", LIME, "#efede6", "#efede6", "#efede6"],
    spotDots: [LIME, "#efede6", "#efede6", "#efede6"],
    jobDots: ["#efede6"],
    skillBg: ["#ffffff"],
    recBg: ["#ffffff"],
    courseBg: ["#ffffff"],
    courseArt: [["#cfccc3", "#c5ee5c"]],
  },
};

export function palette() {
  /* no document during the prerender pass — fall back to the configured theme */
  const t = typeof document === "undefined" ? THEME : document.documentElement.dataset.theme;
  return palettes[t] || palettes.colorful;
}
export const pick = (list, i) => list[i % list.length];
