import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d4dbe6",
          200: "#9eadc4",
          300: "#6878a0",
          400: "#3a4a6e",
          500: "#1e2d4d",
          600: "#152038",
          700: "#0f172a",
          800: "#0b1424",
          900: "#0D1B2A",
          950: "#06101c",
        },
        gold: {
          50: "#fbf6ea",
          100: "#f3e5c0",
          200: "#e7cb88",
          300: "#d9b15a",
          400: "#C89D4A",
          500: "#b08334",
          600: "#8a672a",
          700: "#664c21",
        },
        graphite: "#4A4F55",
        bone: "#F7F7F8",
        sand: "#E9E1D6",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(13, 27, 42, 0.18)",
        gold: "0 10px 40px -10px rgba(200, 157, 74, 0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
        screens: { "2xl": "1280px" },
      },
    },
  },
  plugins: [],
};

export default config;
