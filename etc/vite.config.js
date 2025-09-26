import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // shortcut for imports
    },
  },
  server: {
    port: 5173, // default Vite port, can change to 3000 if you prefer
    open: true, // auto-open browser on dev
  },
  build: {
    outDir: "dist",
    sourcemap: true, // useful for debugging production issues
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // code-split vendor chunks
        },
      },
    },
  },
});
