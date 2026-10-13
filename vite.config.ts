import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative, so the built site works on
// GitHub Pages sub-folders, Netlify, Vercel or any static host.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
