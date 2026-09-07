import type { Config } from "tailwindcss";

/* Night-flight world. One ground (night), one text (chalk), one accent
   (ember). `gold` stays as an alias of the accent scale so the inner pages,
   which were written against it, follow the brand without a rewrite. */
const ember = {
  50: "#fff4ee", 100: "#ffe4d5", 200: "#ffc6a8", 300: "#ffa274", 400: "#ff7a3d",
  500: "#f4602a", 600: "#d8481c", 700: "#b13617", 800: "#8b2d17", 900: "#6f2816", 950: "#3d1108",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ember,
        gold: ember,
        night: { 950: "#06080f", 900: "#0a0e19", 800: "#111726", 700: "#1a2236", 600: "#27314a" },
        chalk: { DEFAULT: "#f2eee6", soft: "#c9c5bd", dim: "#8e8d93" },
        navy: { 900: "#06080f", 800: "#0a0e19", 700: "#111726", 600: "#1a2236" },
        ivory: { 50: "#f9f6ef", 100: "#f6f1e7", 200: "#efe7d6" },
      },
      borderRadius: { card: "1.25rem" },
      boxShadow: {
        lift: "0 24px 60px -24px rgba(0,0,0,0.75), 0 8px 20px -12px rgba(0,0,0,0.5)",
        ember: "0 14px 40px -14px rgba(255,122,61,0.55)",
      },
      transitionTimingFunction: { out: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [],
} satisfies Config;
