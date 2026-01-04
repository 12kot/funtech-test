import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    esbuild: {
      keepNames: true,
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, "./src/app"),
        i18n: path.resolve(__dirname, "./src/i18n"),
        config: path.resolve(__dirname, "./src/config"),
        "shared/hooks": path.resolve(__dirname, "./src/shared/hooks"),
        "shared/types": path.resolve(__dirname, "./src/shared/types"),
        "shared/utils": path.resolve(__dirname, "./src/shared/utils"),
        "shared/store": path.resolve(__dirname, "./src/shared/store"),
        "shared/assets": path.resolve(__dirname, "./src/shared/assets"),
        "shared/styles": path.resolve(__dirname, "./src/shared/styles"),
        "shared/features": path.resolve(__dirname, "./src/shared/features"),
        "shared/components": path.resolve(__dirname, "./src/shared/components"),
      },
    },
    server: {
      allowedHosts: ["localhost", ""],
    },
  });
};
