import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export const pathResolver = (p) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/', // Убедитесь, что base установлен правильно
  server: {
    historyApiFallback: true // Включаем поддержку HTML5 History API
  },
  build: {
    outDir: 'dist', // Директория для сборки
    assetsDir: 'assets', // Директория для ассетов
    sourcemap: true
  },
})


