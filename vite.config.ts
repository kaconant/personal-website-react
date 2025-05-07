import { defineConfig, Plugin, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const logMalformedURIs = (): Plugin => ({
  name: "log-malformed-uris",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      try {
        decodeURI(req.url!);
      } catch {
        console.error("🚨 Malformed URI detected:", req.url);
      }
      next();
    });
  },
});

const config: UserConfigExport = defineConfig({
  plugins: [react(), logMalformedURIs()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/atoms": path.resolve(__dirname, "src/components/atoms"),
      "@/blocks": path.resolve(__dirname, "src/components/blocks"),
      "@/pages": path.resolve(__dirname, "src/components/pages"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/assets": path.resolve(__dirname, "src/assets"),
    },
  },
});

export default config;
