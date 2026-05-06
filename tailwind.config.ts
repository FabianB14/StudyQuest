import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sq: {
          bg: "#0b0d12",
          panel: "#141823",
          panel2: "#1c2230",
          ink: "#e8ecf3",
          muted: "#8a93a6",
          accent: "#7c5cff",
          accent2: "#22d3ee",
          good: "#22c55e",
          bad: "#ef4444",
          gold: "#fbbf24",
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.7)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-6px)" },
          "40%, 80%": { transform: "translateX(6px)" },
        },
        rise: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(124,92,255,0.0)" },
          "50%": { boxShadow: "0 0 24px 6px rgba(124,92,255,0.45)" },
        },
      },
      animation: {
        pop: "pop 320ms cubic-bezier(.2,.9,.3,1.2)",
        shake: "shake 360ms ease-in-out",
        rise: "rise 220ms ease-out",
        glow: "glow 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
