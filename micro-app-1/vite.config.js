import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "micro-app-1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./store": "./src/store",
      },
      remotes: {
        hostApp: 'http://localhost:3000/assets/remoteEntry.js',
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