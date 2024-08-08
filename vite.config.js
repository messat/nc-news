import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    // Ensure Vite resolves dependencies correctly
    mainFields: [],
    alias: {
      stream: 'stream-browserify',
      util: 'util',
    },
  },
  optimizeDeps: {
    include: ['axios'], // Ensure axios and its dependencies are included
  },
});
