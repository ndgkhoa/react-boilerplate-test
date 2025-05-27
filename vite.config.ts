import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: { devSourcemap: true },
  resolve: { alias: { '~': path.resolve(__dirname, './src') } },
  server: { host: true, port: 3000 },
  build: { outDir: './build' },
});
