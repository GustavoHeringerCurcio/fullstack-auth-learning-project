import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});