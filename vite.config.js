import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    port: process.env.PORT || 5173, // Use Render's port if available
    host: "0.0.0.0", // Allow external connections
  },
=======
   server: {
    port: process.env.PORT || 5173,  // Ensure Render can assign a port
    host: '0.0.0.0',  // Allow external access
    strictPort: true,
    allowedHosts: ['threedportfolio-72pm.onrender.com'], // Add your Render domain
  },
  
>>>>>>> 6b314f972e9f1e817171799f2174b99b7e7a3920
  build: {
    chunkSizeWarningLimit: 2500, // Set to 1500 kB
  },
});
