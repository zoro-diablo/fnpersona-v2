import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    exclude: ['react-icons/gr', 'react-router-dom'],
  },
  envPrefix: 'VITE_',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
