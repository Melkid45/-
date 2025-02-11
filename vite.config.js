import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export const pathResolver = (p) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


