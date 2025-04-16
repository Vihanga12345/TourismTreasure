import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // External dependencies that should not be bundled
      external: [
        // Add any problematic dependencies here if needed
      ]
    }
  },
  optimizeDeps: {
    include: [
      '@tanstack/react-query',
      'react',
      'react-dom',
      'framer-motion',
      '@radix-ui/react-toast',
      'class-variance-authority',
      'clsx',
      'lucide-react',
      'tailwind-merge'
    ]
  }
}); 