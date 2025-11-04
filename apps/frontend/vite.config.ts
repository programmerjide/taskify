import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // ❌ Don't expose the full process.env (causes PATH leak + Bun crash)
    "process.env": {},
    // ✅ Define only the variables your app actually needs
    "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL || ""),
    "import.meta.env.VITE_APP_ENV": JSON.stringify(process.env.VITE_APP_ENV || "development"),
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@taskify/openapi": path.resolve(
        __dirname,
        "../../packages/openapi/src"
      ),
      "@taskify/zod": path.resolve(__dirname, "../../packages/zod/src"),
      // ✅ Fix for Bun: alias crypto since Bun doesn’t fully support crypto.hash
      crypto: "crypto-js",
    },
  },
  optimizeDeps: {
    include: ["crypto-js"], // ensure vite pre-bundles this for Bun
  },
});
