import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Ensure Render can assign a port
    host: "0.0.0.0", // Allow external access
    strictPort: true,
    allowedHosts: ["threedportfolio-72pm.onrender.com"], // Add your Render domain
  },
  build: {
    chunkSizeWarningLimit: 2500, // Set to 1500 kB
  },
});
