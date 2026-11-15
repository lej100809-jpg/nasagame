import { defineConfig } from 'vite';
// base './' so the build works on GitHub Pages under /nasagame/ and from any folder
export default defineConfig({ base: './', build: { outDir: 'dist', chunkSizeWarningLimit: 2000 } });
