import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
  build: {
    rollupOptions: {
      external: [
        // Fix: Tell Rollup not to bundle react separately
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-dom/client'
      ]
    },
    // Alternative: Use esbuild instead of Rolldown
    // target: 'es2020'
  },
  // Add this to fix resolution
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-start']
  }
})
