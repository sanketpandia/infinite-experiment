import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
  ],
  root: 'src/frontend', // Set the root to your frontend folder
  build: {
    outDir: '../../dist', // Output directory for the built files
    rollupOptions: {
      input: 'index.html', // Entry point for Vite
    },
  },
  server: {
    port: 5173, // Specify the port for the Vite server (optional)
  },
});
