import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
  ],
  build: {
    target: "es2020",
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-dom/client"
      ]
    }
  },
  resolve: {
    alias: {
      "react": "react",
      "react-dom": "react-dom"
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-start"]
  }
})
