import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#08090b",
          50: "#f5f6f7",
          900: "#0c0d10",
          950: "#08090b",
        },
        surface: {
          DEFAULT: "#111318",
          raised: "#15171d",
        },
        line: "rgba(255,255,255,0.08)",
        "line-soft": "rgba(255,255,255,0.05)",
        ink: {
          DEFAULT: "#e8e9ec",
          dim: "#9a9ea8",
          faint: "#6b6f78",
        },
        accent: {
          DEFAULT: "#7c9cff",
          dim: "#5b76c9",
          soft: "rgba(124,156,255,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,9,11,1) 90%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
