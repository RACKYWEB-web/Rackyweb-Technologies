import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Rackyweb-Technologies/",
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});