import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removed lovable-tagger to avoid any injected dev-time branding/badges
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/artisan-stories-ai/",
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
  // Only use standard React plugin; omit lovable dev tagger
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
