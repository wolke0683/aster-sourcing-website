import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Add base URL configuration for client-side routing
  base: '/',
  // Configure build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate SPA fallback for client-side routing
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  // Configure server options for development
  server: {
    port: 3000,
    // Enable history fallback for client-side routing in dev
    historyApiFallback: true,
    // Configure proxy if needed
    proxy: {},
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});