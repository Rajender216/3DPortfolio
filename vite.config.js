import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use Render's port if available
    host: "0.0.0.0", // Allow external connections
  },
  build: {
    chunkSizeWarningLimit: 2500, // Set to 1500 kB
  },
});
