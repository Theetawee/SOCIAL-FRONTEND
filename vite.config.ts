import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  publicDir: "public",
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   workbox: {
    //     globPatterns: ["**/*"],
    //     clientsClaim: true,
    //     skipWaiting: true,
    //     cleanupOutdatedCaches: true,
    //   },
    //   devOptions: { enabled: true },
    //   injectRegister: "script-defer",
    //   manifest:false,
    //   strategies: "injectManifest",
    //   srcDir: "src",
    //   filename: "sw.js",
    //   includeAssets: ["**/*"],
    // }),
  ],
  base: "./",
});
