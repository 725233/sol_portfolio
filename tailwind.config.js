/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy field + one electric-blue accent
        navy: {
          950: "#050b1a",
          900: "#0a1a3a",
          800: "#12306b",
        },
        ink: {
          DEFAULT: "#eef3ff", // primary text
          soft: "#b4c3e0", // body text
          faint: "#8a9cc2", // labels, meta
        },
        accent: {
          DEFAULT: "#7cb8ff",
          strong: "#4d9bff",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
