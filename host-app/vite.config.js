import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/store",
      },
      remotes: {
        microApp1: 'http://localhost:5001/assets/remoteEntry.js',
        microApp2: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});