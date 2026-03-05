import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Tailwind y autoprefixer
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// 🔥 NUEVO
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [
      react(),

      // 🔥 Activa compresión gzip en build
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      })
    ],

    server: {
      port: 3000,
      host: '0.0.0.0'
    },

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },

    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
        ],
      },
    },

    // 🔥 Optimización extra del build
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
      sourcemap: false,
    }
  };
});