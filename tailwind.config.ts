import type { Config } from "tailwindcss";

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
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // single accent — warm academic gold (replaces the old teal everywhere)
        gold: {
          50: "#fbf6ea", 100: "#f5ead0", 200: "#ecd6a3", 300: "#e2bf72",
          400: "#d4a54e", 500: "#c79a3e", 600: "#a97e30", 700: "#875f28",
          800: "#6b4b24", 900: "#573e21",
        },
        navy: {
          900: "#070b1c", 800: "#0a1024", 700: "#0e1533", 600: "#141d45",
        },
        ivory: { 50: "#f9f6ef", 100: "#f6f1e7", 200: "#efe7d6" },
      },
    },
  },
  plugins: [],
} satisfies Config;
